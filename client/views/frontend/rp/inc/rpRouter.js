//@since v0.1.1
RPController = RouteController.extend({
  layoutTemplate: 'rpLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/rp', function (){ 
  this.render('rpHome', {
    waitOn: function() {
      return Meteor.subscribe('getHomeRpRentings');
    },
    data: function () {
      return Meteor.subscribe('getHomeRpRentings');
    }
  });
}, {
  name: 'rp.home',
  controller: 'RPController'
});

Router.route('/rp/rn', function (){ 
  this.render('rnHome');
}, {
  name: 'rn.home',
  controller: 'RPController'
});

Router.route('/rp/ts', function (){ 
  this.render('tsHome');
}, {
  name: 'ts.home',
  controller: 'RPController'
});

Router.route('/rp/impressum', function (){ 
  this.render('rpImprint');
}, {
  name: 'rp.imprint',
  controller: 'RPController'
});

Router.route('/rp/agb', function (){ 
  this.render('rpAgb');
}, {
  name: 'rp.agb',
  controller: 'RPController'
});

Router.route('/rp/kontakt', function (){ 
  this.render('rpContact');
}, {
  name: 'rp.contact',
  controller: 'RPController'
});

Router.route('/rp/mediadaten', function (){ 
  this.render('rpMediadata');
}, {
  name: 'rp.mediadata',
  controller: 'RPController'
});


Router.route('/rp/1/:rpRentingsSiteUrl', function (){ 
  this.render('rentingsSingle', {
    waitOn: function() {
      return Meteor.subscribe('getSingleRpRentings');
    },
    data: function () {
      Meteor.subscribe('getSingleRpRentings');
      return RpRentings.findOne({rpRentingsSiteUrl: this.params.rpRentingsSiteUrl});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'rentings.single',
  controller: 'RPController'
});

Router.route('/rp/2/:toursSiteUrl', function (){ 
  this.render('toursSingle', {
    waitOn: function() {
      return Meteor.subscribe('tours');
    },
    data: function () {
      Meteor.subscribe('tours');
      return Tours.findOne({toursSiteUrl: this.params.toursSiteUrl});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'tours.single',
  controller: 'RPController'
});