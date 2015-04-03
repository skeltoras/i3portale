//-- template onCreated functions
Template.avHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getHomeAvCustomers');     
  });
});

//-- template onDestroyed functions
Template.avHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.avHome.onRendered(function () {
});

//-- template helpers                            
Template.avHome.helpers({
  getFeaturedCustomer: function() {
    return AvCustomers.find({}, {limit: 15});
  }
});

//-- template events
Template.avHome.events({ 
});