//-- template onCreated functions
Template.ldHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('rp_getAllCountries');
  });
});

//-- template onDestroyed functions
Template.ldHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.ldHome.onRendered(function () {
});

//-- template helpers                            
Template.ldHome.helpers({
  getCountries: function() {
    return Countries.find().fetch();
  },
  getImageCountries: function(){
    var imageId = this.images;
    imageId = _.find(imageId, function(obj){ return obj.assignedObject = "countryHeaderImage"})
    return globalImages.findOne({_id: imageId.id});
  }
});

//-- template events
Template.ldHome.events({ 
});