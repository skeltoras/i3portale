//-- template onCreated functions
Template.kdSingle.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var avSiteUrl = Session.get('avSiteUrl');
    self.subscribe('av_getSingleCustomer', avSiteUrl);
  });
});

//-- template onDestroyed functions
Template.kdSingle.onDestroyed(function () {
});

//-- template onRendered functions
Template.kdSingle.onRendered(function () {
});

//-- template helpers                            
Template.kdSingle.helpers({
  getCustomerId: function(){
    var customerData = AvCustomers.findOne();
    Session.set('customerId', customerData._id);
  },
  getDataLoad: function(){
    var customerId = Session.get('customerId');
    Meteor.subscribe('av_getSingleCustomerData', customerId);
  },
  getAvData: function(){
    return AvData.findOne();
  },
  getHeaderImg: function(){
    var customerId = Session.get('customerId');
    return avImages.findOne({'metadata.customerId': customerId, 'metadata.assignedObject': 'avDataHeaderImg'});
  },
  getLogo: function(){
    var customerId = Session.get('customerId');
    return avImages.findOne({'metadata.customerId': customerId, 'metadata.assignedObject': 'avDataLogo'});
  },
  getGalleryS: function(){
    var customerId = Session.get('customerId');
    return avImages.findOne({'metadata.customerId': customerId, 'metadata.assignedObject': 'avDataGS1'});
  },
  getGalleryM: function(){
    var customerId = Session.get('customerId');
    return avImages.find({'metadata.customerId': customerId, 'metadata.gallery': 'galleryM'});
  }
});

//-- template events
Template.kdSingle.events({
  'click .back': function(e) {
    e.preventDefault();
    window.history.back();
  } 
});