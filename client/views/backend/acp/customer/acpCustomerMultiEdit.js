//-- template onCreated functions
Template.acpCustomerMultiEdit.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getSelectedCustomers');
    self.subscribe('acp_countCustomersSelection');
    self.subscribe('acp_getAllCountries');
  });
});

//-- template onDestroyed functions
Template.acpCustomerMultiEdit.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpCustomerMultiEdit.onRendered(function () {
});

//-- template helpers
Template.acpCustomerMultiEdit.helpers({
});

//-- template events
Template.acpCustomerMultiEdit.events({ 
});