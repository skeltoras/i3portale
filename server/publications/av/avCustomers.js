Meteor.publish('getAllAvCustomers', function() {
  return AvCustomers.find({}, {field: {_id: 1, avIdOld: 1, avName1Old: 1, avName2Old: 1, avCustomerName: 1}});
});

Meteor.publish('getSingleAvCustomers', function(avCustomerId) {
  return AvCustomers.find(avCustomerId);
});

Meteor.publish('getSingleCustomerPage', function(avSiteUrl) {
  return AvCustomers.find({avSiteUrl: avSiteUrl});
});

// get all customers with approved and withut blocks: I, S, V, X, Z
Meteor.publish('getHomeAvCustomers', function() {
  return AvCustomers.find({avIsApproved: true, avIsFeatured: true, $and: [{'avBlockIndicators.short': { $ne: 'I' }}, {'avBlockIndicators.short': { $ne: 'S' }}, {'avBlockIndicators.short': { $ne: 'V' }}, {'avBlockIndicators.short': { $ne: 'X' }}, {'avBlockIndicators.short': { $ne: 'Z' }} ]}, {fields: {avSiteUrl: 1, avCustomerName: 1, avStreet: 1, avPlz: 1, avCity: 1, avCountry: 1, avShortinfo: 1}});
});

// get all customers with approved and withut blocks: I, S, V, X, Z
Meteor.publish('getChaptersAvCustomers', function(chapterIndex) {
  var self = this;
  var chapterIndex = chapterIndex.toString();
  var chapterList = AvChapters.find({chapterIndex: chapterIndex}).fetch();
  var data = [];
  chapterList.forEach(function(chapter){
    AvCustomers.find({'avAddressChapters.short': chapter.chapterShort, avIsApproved: true, $and: [{'avBlockIndicators.short': { $ne: 'I' }}, {'avBlockIndicators.short': { $ne: 'S' }}, {'avBlockIndicators.short': { $ne: 'V' }}, {'avBlockIndicators.short': { $ne: 'X' }}, {'avBlockIndicators.short': { $ne: 'Z' }} ]}, {fields: {_id: 1, avSiteUrl: 1, avCustomerName: 1, avStreet: 1, avPlz: 1, avCity: 1, avCountry: 1, avShortinfo: 1, avAddressChapters: 1}}).forEach(function(customer){
      //console.log(customer);
      self.added('avCustomers', customer._id, customer);
      //self.added('avCustomers', Random.id(), customer);
    });      
  });
  self.ready();
});

Meteor.publish('getLastInsertedCustomer', function() {
  return AvCustomers.find({}, {sort: {avSubmitted: -1}, limit: 1});
});