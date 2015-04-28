Meteor.publish('acp_allCountries', function() {
  return Countries.find({});
});

Meteor.publish('acp_allAvChapters', function() {
  return AvChapters.find({});
});

Meteor.publish('acp_allAvAssociations', function() {
  return AvAssociations.find({});
});

Meteor.publish('acp_allBlockIndicators', function() {
  return AvBlockIndicators.find({});
});