Meteor.publish('acp_countAvCustomers', function() {
  Counts.publish(this, 'cnt_allAvCustomers', AvCustomers.find());
  Counts.publish(this, 'cnt_approvedAvCustomers', AvCustomers.find({avIsApproved: true}));
  Counts.publish(this, 'cnt_withoutEmailAvCustomers', AvCustomers.find({$and: [{avMailInternal: {$exists: false}},{avMailContact: {$exists: false}},{avMailFormal: {$exists: false}},{avMailNewsletter: {$exists: false}}]}));
  Counts.publish(this, 'cnt_AV_AvCustomers', AvCustomers.find({avHasAV: true}));
});

Meteor.publish('acp_getNewestAvCustomers', function() {
  return AvCustomers.find({}, {fields: {_id: 1, avCustomerName: 1, avName1Old: 1, avSubmitted: 1, avUpdatedAt: 1}, sort: {avSubmitted: -1}, limit: 1});
});

Meteor.publish('acp_getLastEditedAvCustomers', function() {
  return AvCustomers.find({}, {fields: {_id: 1, avCustomerName: 1, avName1Old: 1, avSubmitted: 1, avUpdatedAt: 1}, sort: {avUpdatedAt: -1}, limit: 1});
});

Meteor.publish('acp_AllAvCustomers', function() {
  return AvCustomers.find({});
});