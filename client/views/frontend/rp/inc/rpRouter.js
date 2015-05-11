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

Router.route('/rp/ld', function (){ 
  this.render('ldHome');
}, {
  name: 'ld.home',
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

Router.route('/rp/2/:toursSiteUrl', function (){ 
  this.render('toursSingle', {
    data: function () {
      Session.set('toursSiteUrl', this.params.toursSiteUrl);
      //Meteor.subscribe('tours');
      return RpTours.findOne({toursSiteUrl: this.params.toursSiteUrl});
    }
  });
}, {
  name: 'tours.single',
  controller: 'RPController'
});

Router.route('/rp/1/:rentingsSiteUrl', function (){ 
  this.render('rentingsSingle', {
    data: function () {
      Session.set('rentingsSiteUrl', this.params.rentingsSiteUrl);
      return RpRentings.findOne({rentingsSiteUrl: this.params.rentingsSiteUrl});
    }
  });
}, {
  name: 'rentings.single',
  controller: 'RPController'
});

Router.route('/rp/3/:countryId', function (){ 
  this.render('ldSingle', {
    data: function () {
      Session.set('country', this.params.countryId);
      return Countries.findOne({countryId: Number(this.params.countryId)});
    }
  });
}, {
  name: 'countries.single',
  controller: 'RPController'
});