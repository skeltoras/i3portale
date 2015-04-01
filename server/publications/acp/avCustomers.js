Meteor.publish('acp_getAllAvCustomers', function() {
  return AvCustomers.find({}, {sort: { avName1Old: 1}, fields: {_id: 1, avIdOld: 1, avName1Old: 1, avName2Old: 1, avCustomerName: 1}});
});

Meteor.publish('acp_getAllAvCustomersWithLimit', function(limit) {
  if (limit > AvCustomers.find().count()) { 
    limit = 0;
  }   
  return AvCustomers.find({}, {sort: { avName1Old: 1}, limit: limit});
});

Meteor.publish('acp_getSingleAvCustomer', function(customerId) {
  return AvCustomers.find({_id: customerId});
});