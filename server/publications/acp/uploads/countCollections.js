Meteor.publish('uploadCounts', function() {
  Counts.publish(this, 'cnt_allCustomers', CustomersPending.find());
  Counts.publish(this, 'cnt_allCountries', Countries.find());
  Counts.publish(this, 'cnt_allAvChapters', AvChapters.find());
  Counts.publish(this, 'cnt_allAvAssociations', AvAssociations.find());
  Counts.publish(this, 'cnt_allAvBlockIndicators', AvBlockIndicators.find());
});