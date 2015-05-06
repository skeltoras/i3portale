//-- template onCreated functions
Template.acpListAV.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getAllApprovedAVCustomers');     
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
    return Customers.find().fetch();
  }
});

//-- template events
Template.acpListAV.events({ 
});