// --- ACP HOME --- //
Meteor.publish('acp_countAllCustomersHome', function() {
  Counts.publish(this, 'cnt_CustomersHome', Customers.find());
  Counts.publish(this, 'cnt_CustomersPendingHome', CustomersPending.find());
  Counts.publish(this, 'cnt_AvDataHome', AvData.find({avDataIsActive: true}));
  Counts.publish(this, 'cnt_CustomersActiveHome', Customers.find({customerIsApproved: true}));
  Counts.publish(this, 'cnt_CustomersNotMailHome', Customers.find({$and: [{customerMailFormal: {$exists: false}}, {customerMailInternal: {$exists: false}}]}));
  Counts.publish(this, 'cnt_CustomersPendingNotMailHome', CustomersPending.find({$and: [{customerMailFormal: {$exists: false}}, {customerMailInternal: {$exists: false}}]}));
});

Meteor.publish('acp_getNewestCustomerHome', function() {
  return Customers.find({}, {$sort: {customerSubmitted: -1}, $limit: 1, $fields: {customerName: 1}});
});

Meteor.publish('acp_getLastEditedCustomerHome', function() {
  return Customers.find({}, {$sort: {customerUpdatedAt: -1}, $limit: 1, $fields: {customerName: 1}});
});

// --- ACP new Customer --- //
Meteor.publish('acp_getLastCustomerNew', function() {
  return Customers.find({}, {$sort: {customerId: -1}, $limit: 1, $fields: {customerId: 1}});
});

//--> acp_getAllCountries

// --- ACP edit Customer ---//
Meteor.publish('acp_getCustomerSingle', function(customerId) {
  return Customers.find({_id: customerId});
});

Meteor.publish('acp_getCustomerPendingSingle', function(customerId) {
  return CustomersPending.find({_id: customerId});
});

Meteor.publish('acp_getCustomerDetailSingle', function(customerId) {
  return CustomersDetail.find({_id: customerId});
});

//--> acp_getAllCountries

// --- ACP select Customer ---//
Meteor.publish('acp_getAllCustomersChapters', function() {
  return CustomersChapters.find();
});     

Meteor.publish('acp_getSelectedCustomers', function() {
  return CustomersSelection.find();
});

Meteor.publish('acp_countCustomersSelection', function() {
  Counts.publish(this, 'cnt_allSelectedCustomers', CustomersSelection.find());
});

Meteor.publish('acp_customersSettings', function() {
  return Settings.find();
});
// --- ACP multiedit Customer ---//

//--> TODO

// --- ACP list AV ---//

Meteor.publish('acp_getAllApprovedAVCustomers', function() {
  return Customers.find({customerHasAv: true});
});

// --- ACP edit AV ---//

Meteor.publish('acp_getSingleAVCustomer', function(customerId) {
  return Customers.find({_id: customerId});
});

Meteor.publish('acp_getSingleAVData', function(customerId) {
  return AvData.find({_id: customerId});
});

// --- ACP list RP ---//

Meteor.publish('acp_getAllApprovedRPCustomers', function() {
  return Customers.find({customerHasRP: true});
});

// --- ACP edit RP Tours & Rentings ---//

Meteor.publish('acp_getSingleRPCustomer', function(customerId) {
  return Customers.find({_id: customerId});
});

Meteor.publish('acp_getSingleRPToursData', function(customerId) {
  return RpTours.find({_id: customerId});
});

Meteor.publish('acp_getSingleRpRentingsData', function(customerId) {
  return RpRentings.find({_id: customerId});
});

