Meteor.publish('av_getSingleCustomer', function(avSiteUrl) {
  return AvCustomers.find({avSiteUrl: avSiteUrl});
});

Meteor.publish('av_getSingleCustomerData', function(customerId) {
  return AvData.find({customerId: customerId});
});