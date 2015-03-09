Meteor.publish('getAllAvCustomers', function() {
  return AvCustomers.find({}, {field: {_id: 1, avIdOld: 1, avName1Old: 1, avName2Old: 1, avCustomerName: 1}});
});

Meteor.publish('getSingleAvCustomers', function(avCustomerId) {
  return AvCustomers.find(avCustomerId);
});