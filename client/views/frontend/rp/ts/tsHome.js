//-- template onCreated functions
Template.tsHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('rp_getFeaturedTours');
  });
});

//-- template onDestroyed functions
Template.tsHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.tsHome.onRendered(function () {
});

//-- template helpers                            
Template.tsHome.helpers({
  getTours: function() {
    return RpTours.find().fetch();
  },
  getImageTours: function(){
    var imageId = this.images;
    imageId = _.find(imageId, function(obj){ return obj.assignedObject = "toursDefaultImage"})
    return rpImages.findOne({_id: imageId.id});
  }
});

//-- template events
Template.tsHome.events({ 
});