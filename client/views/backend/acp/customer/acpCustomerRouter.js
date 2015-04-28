/** ACP Customers **/
Router.route('/acp/kd/list', function (){ 
  this.render('acpCustomersList');
}, {
  name: 'acp.customers.list',
  controller: 'AcpController'
});

Router.route('/acp/kd/sel', function (){ 
  this.render('acpCustomersSelect');
}, {
  name: 'acp.customers.select',
  controller: 'AcpController'
});

Router.route('/acp/kd/medit', function (){ 
  this.render('acpCustomerMultiEdit');
}, {
  name: 'acp.customers.multiedit',
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
    //waitOn: function() {
    //  return [
    //    Meteor.subscribe('getSingleAvCustomers', this.params._id),
    //    Meteor.subscribe('getAllAvBlockIndicators')
    //  ];
    //},
    data: function() {
      Session.set('customerId', this.params._id);
      //Meteor.subscribe('getSingleAvCustomers', this.params._id);
      //return AvCustomers.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'acp.customer.edit',
  controller: 'AcpController'
});