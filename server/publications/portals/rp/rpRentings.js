// --- Home ---//

Meteor.publish('rp_getFeaturedRentings', function() {
  return RpRentings.find({});
});

// --- single Rentings ---//

Meteor.publish('rp_getSingleRenting', function(rentingsSiteUrl) {
  return RpRentings.find({rentingsSiteUrl: rentingsSiteUrl});
});