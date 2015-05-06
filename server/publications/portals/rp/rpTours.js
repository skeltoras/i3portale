// --- Home ---//

Meteor.publish('rp_getFeaturedTours', function() {
  return RpTours.find({});
});

// --- single Tours ---//

Meteor.publish('rp_getSingleTours', function(toursSiteUrl) {
  return RpTours.find({toursSiteUrl: toursSiteUrl});
});

Meteor.publish('rp_getSingleCustomer', function(customerId) {
  return Customers.find({_id: customerId});
});