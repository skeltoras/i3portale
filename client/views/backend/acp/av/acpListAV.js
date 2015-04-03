//-- template onCreated functions
Template.acpListAV.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_av_getAllCustomers');     
  });
});

//-- template onDestroyed functions
Template.acpListAV.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpListAV.onRendered(function () {
});

//-- template helpers                            
Template.acpListAV.helpers({
  getList: function() {
    return AvCustomers.find().fetch();
  }
});

//-- template events
Template.acpListAV.events({ 
});