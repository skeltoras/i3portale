//@since v0.1.1
Meteor.publish('customers', function() {
  return Customers.find();
});

Meteor.publish('rentings', function() {
  return Rentings.find();
});

Meteor.publish('portals', function() {
  return Portals.find();
});

Meteor.publish('tours', function() {
  return Tours.find();
});

Meteor.publish('regions', function() {
  return Regions.find();
});

Meteor.publish('countries', function() {
  return Countries.find();
});

Meteor.publish('addresschapters', function() {
  return AddressChapters.find();
});

Meteor.publish('avassociations', function() {
  return AvAssociations.find();
});

Meteor.publish('avblockindicators', function() {
  return avBlockIndicators.find();
});