Meteor.publish('acp_getAllCountries', function() {
  return Countries.find();
});