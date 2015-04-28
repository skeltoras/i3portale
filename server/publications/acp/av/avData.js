Meteor.publish('getAllAvData', function() {
  return AvData.find({});
});

Meteor.publish('getSingleAvData', function(customerId) {
  return AvData.find({customerId: customerId});
});