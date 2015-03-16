Meteor.publish('getAllRpRentings', function() {
  return RpRentings.find({});
});

Meteor.publish('getSingleRpRentings', function(rpRentingsSiteUrl) {
  return RpRentings.find({rpRentingsSiteUrl: rpRentingsSiteUrl});
});

Meteor.publish('getHomeRpRentings', function() {
  return RpRentings.find({});
});
