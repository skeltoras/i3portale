//-- template onCreated functions
Template.rentingsSingle.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var rentingsSiteUrl = Session.get('rentingsSiteUrl');
    self.subscribe('rp_getSingleRenting', rentingsSiteUrl);
  });
});

//-- template onDestroyed functions
Template.rentingsSingle.onDestroyed(function () {
});

//-- template onRendered functions
Template.rentingsSingle.onRendered(function () {
});

//-- template helpers                            
Template.rentingsSingle.helpers({
  getHeaderImg: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsHeaderImg'});
  },
  getGalleryS: function(){
    return rpImages.find({'metadata.rpRentingsId': this._id, 'metadata.gallery': 'galleryS'}).fetch();
  },
  getGalleryM: function(){
    return rpImages.find({'metadata.rpRentingsId': this._id, 'metadata.gallery': 'galleryM'}).fetch();
  },
  getCustomer: function() {
    var customerId = this.customerId;
    Meteor.subscribe('rp_getSingleCustomer', customerId);
    return Customers.findOne({_id: customerId});
  }
});

//-- template events
Template.rentingsSingle.events({
  'click .back': function(e) {
    e.preventDefault();
    window.history.back();
  } 
});