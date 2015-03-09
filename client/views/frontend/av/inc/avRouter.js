//@since v0.1.1
AVController = RouteController.extend({
  layoutTemplate: 'avLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', function (){ 
  this.render('avHome', {
    waitOn: function() {
      return Meteor.subscribe('getHomeAvCustomers');
    },
    data: function () {
      //Meteor.subscribe('rentings');
      return Meteor.subscribe('getHomeAvCustomers');
    }
  });
}, {
  name: 'av.home',
  controller: 'AVController'
});

Router.route('/av', function (){ 
  this.render('avHome', {
    waitOn: function() {
      return Meteor.subscribe('getHomeAvCustomers');
    },
    data: function () {
      //Meteor.subscribe('rentings');
      return Meteor.subscribe('getHomeAvCustomers');
    }
  });
}, {
  name: 'av.home.av',
  controller: 'AVController'
});

Router.route('/av/impressum', function (){ 
  this.render('avImprint');
}, {
  name: 'av.imprint',
  controller: 'AVController'
});

Router.route('/av/agb', function (){ 
  this.render('avAgb');
}, {
  name: 'av.agb',
  controller: 'AVController'
});

Router.route('/av/kontakt', function (){ 
  this.render('avContact');
}, {
  name: 'av.contact',
  controller: 'AVController'
});

Router.route('/av/mediadaten', function (){ 
  this.render('avMediadata');
}, {
  name: 'av.mediadata',
  controller: 'AVController'
});

Router.route('/av/cl/:chapterIndex', function (){ 
  this.render('avChapters', {
    waitOn: function() {
      return Meteor.subscribe('getChaptersAvCustomers', this.params.chapterIndex);
    },
    data: function () {
      //Meteor.subscribe('getChaptersAvCustomers', this.params.chapterIndex);
      return {chapterIndex: this.params.chapterIndex};
    }
  });
}, {
  name: 'av.chapters',
  controller: 'AVController'
});


Router.route('/av/kd/:avSiteUrl', function (){ 
  this.render('kdSingle', {
    waitOn: function() {
      return Meteor.subscribe('getSingleCustomerPage', this.params.avSiteUrl);
    },
    data: function () {
      //Meteor.subscribe('getSingleAvCustomers', this.params.avSiteUrl);
      return {avSiteUrl: this.params.avSiteUrl};
      //return AvCustomers.findOne({avSiteUrl: this.params.avSiteUrl});
    },
    action: function() {
      if (this.ready())
        this.render();
    }
  });
}, {
  name: 'kd.single',
  controller: 'AVController'
});

