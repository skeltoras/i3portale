//-- template onCreated functions
Template.ldSingle.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var countryNo = Session.get('country');
    self.subscribe('rp_getSingleCountry', countryNo);
    self.subscribe('rp_getCountryRentings', countryNo);
    self.subscribe('rp_getCountryTours', countryNo);
  });
});

//-- template onDestroyed functions
Template.ldSingle.onDestroyed(function () {
});

//-- template onRendered functions
Template.ldSingle.onRendered(function () {
});


//-- template helpers                            
Template.ldSingle.helpers({
  getHeaderImg: function(){
    var countryId = this._id;
    return globalImages.findOne({'metadata.countryId': this._id, 'metadata.assignedObject': 'countryHeaderImage'})
  },
  getTours: function() {
    return RpTours.find().fetch();
  },
  getRentings: function() {
    return RpRentings.find().fetch();
  },
  getImageRentings: function(){
    var imageId = this.images;
    imageId = _.find(imageId, function(obj){ return obj.assignedObject = "rentingsDefaultImage"})
    return rpImages.findOne({_id: imageId.id});
  },
  getImageTours: function(){
    var imageId = this.images;
    imageId = _.find(imageId, function(obj){ return obj.assignedObject = "toursDefaultImage"})
    return rpImages.findOne({_id: imageId.id});
  }
});

//-- template events
Template.ldSingle.events({ 
});