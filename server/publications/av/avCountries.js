Meteor.publish('getAllAvCountries', function() {
  return AvCountries.find({});
});
