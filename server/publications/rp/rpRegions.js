Meteor.publish('getAllRpRegions', function() {
  return RpRegions.find({});
});
