//-- template onCreated functions
Template.acpHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_countAvCustomers');   
    self.subscribe('acp_getNewestAvCustomers');
    self.subscribe('acp_getLastEditedAvCustomers');
    //self.subscribe('acp_AllAvCustomers');    
  });
});

//-- template onDestroyed functions
Template.acpHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpHome.onRendered(function () {
});

//-- template helpers                            
Template.acpHome.helpers({
  getLastCustomer: function(){
    return AvCustomers.findOne({}, {sort: {avSubmitted: -1}});
  },
  getLastEditedCustomer: function(){
    return AvCustomers.findOne({}, {sort: {avUpdatedAt: -1}});
  }
});

//-- template events
Template.acpHome.events({ 
});