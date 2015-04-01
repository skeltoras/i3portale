Meteor.publish('acp_countAllAvCustomers', function() {
  return AvCustomers.find({}, {fields: {_id: 1, avIsApproved: 1, avMailContact: 1, avMailFormal: 1, avMailNewsletter:1, avMailInternal: 1}});
});