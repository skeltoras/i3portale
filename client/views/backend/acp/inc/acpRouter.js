//@since v0.1.1
AcpController = RouteController.extend({
  layoutTemplate: 'acpLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
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

Router.route('/acp/kdn', function (){ 
  this.render('acpCustomerlist');
}, {
  name: 'acp.customers',
  controller: 'AcpController'
});

Router.route('/acp/kd/new', function (){ 
  this.render('acpCustomerNew');
}, {
  name: 'acp.customer.new',
  controller: 'AcpController'
});

Router.route('/acp/kd/edit/:_id', function (){ 
  this.render('acpCustomerEdit', {
    data: function() {
      return AvCustomers.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'acp.customer.edit',
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
