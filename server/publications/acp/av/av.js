Meteor.publish('acp_av_getAllCustomers', function() {
  return AvCustomers.find({avHasAV: true});
});

Meteor.publish('acp_av_getSingleCustomer', function(customerId) {
  return AvCustomers.find({_id: customerId});
});