//@since v0.1.1
AcpController = RouteController.extend({
  layoutTemplate: 'acpLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  before: function() {
    if (! Meteor.user()) {
      if (Meteor.loggingIn()){
        this.render(this.loadingTemplate);
      } else {
        this.redirect('/login');
        this.next();
      }
    } else {
      this.next();
    }
  }
});

Router.route('/acp', function (){ 
  this.render('acpHome');
}, {
  name: 'acp.home',
  controller: 'AcpController'
});

Router.route('/acp/upload', function (){ 
  this.render('acpUploads');
}, {
  name: 'acp.uploads',
  controller: 'AcpController'
});

Router.route('/acp/cl', function (){ 
  this.render('acpCountryList');
}, {
  name: 'acp.countrylist',
  controller: 'AcpController'
});

Router.route('/acp/acl', function (){ 
  this.render('acpAddressChaptersList');
}, {
  name: 'acp.adresschapterslist',
  controller: 'AcpController'
});

Router.route('/acp/al', function (){ 
  this.render('acpAvAssociationsList');
}, {
  name: 'acp.associationslist',
  controller: 'AcpController'
});

Router.route('/acp/bil', function (){ 
  this.render('acpAvBlockIndicatorsList');
}, {
  name: 'acp.blockindicatorslist',
  controller: 'AcpController'
});

Router.route('/acp/kd/rp/:_id/new', function (){ 
  this.render('acpAddRentings', {
    waitOn: function() {
      return [
        //Meteor.subscribe('getSingleAvCustomers', this.params._id),
        //Meteor.subscribe('getAllAvBlockIndicators')
      ];
    },
    data: function() {
      //Meteor.subscribe('getSingleAvCustomers', this.params._id);
      //return AvCustomers.findOne({_id: this.params._id});
      return {customerId: this.params._id};
    }
  });
}, {
  name: 'acp.rentings.add',
  controller: 'AcpController'
});

Router.route('/acp/kd/rp/:customerId/edit/:_id', function (){ 
  this.render('acpEditRentings', {
    waitOn: function() {
      return [
        //Meteor.subscribe('getSingleAvCustomers', this.params._id),
        //Meteor.subscribe('getAllAvBlockIndicators')
      ];
    },
    data: function() {
      //Meteor.subscribe('getSingleAvCustomers', this.params._id);
      return {customerId: this.params.customerId, rpRentingsId: this.params._id};
    }
  });
}, {
  name: 'acp.rentings.edit',
  controller: 'AcpController'
});

/** AV-PORTAL **/
Router.route('/acp/av/list', function (){ 
  this.render('acpListAV');
}, {
  name: 'acp.av.list',
  controller: 'AcpController'
});

Router.route('/acp/av/edit/:_id', function (){ 
  this.render('acpEditAV', {
    data: function() {
      Session.set('customerId', this.params._id);
      return AvData.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'acp.av.edit',
  controller: 'AcpController'
});

/** RP-PORTAL **/
Router.route('/acp/rp/list', function (){ 
  this.render('acpListRP');
}, {
  name: 'acp.rp.list',
  controller: 'AcpController'
});

Router.route('/acp/rp/tours/:customerId/:_id', function (){ 
  this.render('acpEditRPTours', {
    data: function() {
      Session.set('customerId', this.params.customerId);
      Session.set('toursId', this.params._id);
      return RpTours.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'acp.rp.tours.edit',
  controller: 'AcpController'
});

Router.route('/acp/rp/rent/:customerId/:_id', function (){ 
  this.render('acpEditRpRentings', {
    data: function() {
      Session.set('customerId', this.params.customerId);
      Session.set('rentingsId', this.params._id);
      return RpRentings.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'acp.rp.rent.edit',
  controller: 'AcpController'
});
