//-- template onCreated functions
Template.toursSingle.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var toursSiteUrl = Session.get('toursSiteUrl');
    self.subscribe('rp_getSingleTours', toursSiteUrl);
  });
});

//-- template onDestroyed functions
Template.toursSingle.onDestroyed(function () {
});

//-- template onRendered functions
Template.toursSingle.onRendered(function () {
});

//-- template helpers                            
Template.toursSingle.helpers({
  getHeaderImg: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursHeaderImg'});
  },
  getGalleryS: function(){
    return rpImages.find({'metadata.rpToursId': this._id, 'metadata.gallery': 'galleryS'}).fetch();
  },
  getGalleryM: function(){
    return rpImages.find({'metadata.rpToursId': this._id, 'metadata.gallery': 'galleryM'}).fetch();
  },
  getCustomer: function() {
    var customerId = this.customerId;
    Meteor.subscribe('rp_getSingleCustomer', customerId);
    return Customers.findOne({_id: customerId});
  }
});

//-- template events
Template.toursSingle.events({
  'click .back': function(e) {
    e.preventDefault();
    window.history.back();
  } 
});