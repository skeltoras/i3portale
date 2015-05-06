Meteor.publish('acp_getAllCustomersChapters', function() {
  return CustomersChapters.find();
});