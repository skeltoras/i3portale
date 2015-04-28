Meteor.publish('acp_getCustomerSingle', function(customerId) {
  return Customers.find({_id: customerId});
});

Meteor.publish('acp_getCustomerPendingSingle', function(customerId) {
  return CustomersPending.find({_id: customerId});
});

Meteor.publish('acp_getSelectionAvChapters', function() {
  return AvChapters.find();
});

Meteor.publish('acp_getSelectedCustomers', function() {
  return CustomersSelection.find();
});

Meteor.publish('acp_countCustomersSelection', function() {
  Counts.publish(this, 'cnt_allSelectedCustomers', CustomersSelection.find());
});