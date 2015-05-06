// --- Home ---//

Meteor.publish('av_getHomeAVCustomers', function() {
  return Customers.find({customerHasAv: true});
});