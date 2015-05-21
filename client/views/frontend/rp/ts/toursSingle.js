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
  textOneSImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneSImgTop'});
  },
  textOneSImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneSImgMid'});
  },
  textOneSImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneSImgBot'});
  },
  textOneMImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneMImgTop'});
  },
  textOneMImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneMImgMid'});
  },
  textOneMImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneMImgBot'});
  },
  textTwoMImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoMImgTop'});
  },
  textTwoMImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoMImgMid'});
  },
  textTwoMImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoMImgBot'});
  },
  textOneLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneLImgTop'});
  },
  textOneLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneLImgMid'});
  },
  textOneLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneLImgBot'});
  },
  textTwoLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoLImgTop'});
  },
  textTwoLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoLImgMid'});
  },
  textTwoLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoLImgBot'});
  },
  textThreeLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeLImgTop'});
  },
  textThreeLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeLImgMid'});
  },
  textThreeLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeLImgBot'});
  },
  textOneXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneXLImgTop'});
  },
  textOneXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneXLImgMid'});
  },
  textOneXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneXLImgBot'});
  },
  textTwoXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoXLImgTop'});
  },
  textTwoXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoXLImgMid'});
  },
  textTwoXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoXLImgBot'});
  },
  textThreeXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeXLImgTop'});
  },
  textThreeXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeXLImgMid'});
  },
  textThreeXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeXLImgBot'});
  },
  textFourXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextFourXLImgTop'});
  },
  textFourXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextFourXLImgMid'});
  },
  textFourXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextFourXLImgBot'});
  },
  textAddOneImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddOneImgTop'});
  },
  textAddOneImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddOneImgMid'});
  },
  textAddOneImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddOneImgBot'});
  },
  textAddTwoImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddTwoImgTop'});
  },
  textAddTwoImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddTwoImgMid'});
  },
  textAddTwoImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddTwoImgBot'});
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