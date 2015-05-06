Meteor.publish('uploadCounts', function() {
  Counts.publish(this, 'cnt_allCustomers', CustomersPending.find());
  Counts.publish(this, 'cnt_allCountries', Countries.find());
  Counts.publish(this, 'cnt_allChapters', CustomersChapters.find());
  Counts.publish(this, 'cnt_allLocks', CustomersLock.find());
});