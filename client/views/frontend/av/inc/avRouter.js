//@since v0.1.1
AVController = RouteController.extend({
  layoutTemplate: 'avLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', function (){ 
  this.render('avHome');
}, {
  name: 'av.home',
  controller: 'AVController'
});

Router.route('/av', function (){ 
  this.render('avHome');
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

Router.route('/av/kd/:avSiteUrl', function (){ 
  this.render('kdSingle', {
    waitOn: function() {
      //return Meteor.subscribe('rentings');
    },
    data: function () {
      //Meteor.subscribe('rentings');
      return AvCustomers.findOne({avSiteUrl: this.params.avSiteUrl});
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

