Meteor.publish('uplAvCustomersCount', function() {
  return CustomersPending.find({}, {fields: {_id: 1}});
});

Meteor.publish('uplAvCountriesCount', function() {
  return AvCountries.find({}, {field: {_id: 1}});
});

Meteor.publish('uplAvChaptersCount', function() {
  return AvChapters.find({}, {field: {_id: 1}});
});

Meteor.publish('uplAvAssociationsCount', function() {
  return AvAssociations.find({}, {field: {_id: 1}});
});

Meteor.publish('uplAvBlockIndicatorsCount', function() {
  return AvBlockIndicators.find({}, {field: {_id: 1}});
});

Meteor.publish('uplAvCampaignsCount', function() {
  return AvCampaigns.find({}, {field: {_id: 1}});
});

Meteor.publish('uplAvEducationsCount', function() {
  return AvEducations.find({}, {field: {_id: 1}});
});