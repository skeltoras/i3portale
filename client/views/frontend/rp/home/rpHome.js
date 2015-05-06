//-- template onCreated functions
Template.rpHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('rp_getFeaturedTours');
    self.subscribe('rp_getFeaturedRentings');     
  });
});

//-- template onDestroyed functions
Template.rpHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.rpHome.onRendered(function () {
});

//-- template helpers                            
Template.rpHome.helpers({
  getTours: function() {
    return RpTours.find().fetch();
  },
  getRentings: function() {
    return RpRentings.find().fetch();
  }
});

//-- template events
Template.rpHome.events({ 
});