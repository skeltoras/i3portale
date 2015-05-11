//-- template onCreated functions
Template.rnHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('rp_getFeaturedRentings');     
  });
});

//-- template onDestroyed functions
Template.rnHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.rnHome.onRendered(function () {
});

//-- template helpers                            
Template.rnHome.helpers({
  getRentings: function() {
    return RpRentings.find().fetch();
  },
  getImageRentings: function(){
    var imageId = this.images;
    imageId = _.find(imageId, function(obj){ return obj.assignedObject = "rentingsDefaultImage"})
    return rpImages.findOne({_id: imageId.id});
  },
});

//-- template events
Template.rnHome.events({ 
});