//-- template onCreated functions
Template.acpHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_countAllCustomersHome');   
    self.subscribe('acp_getNewestCustomerHome');
    self.subscribe('acp_getLastEditedCustomerHome');
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
  getAllCustomers: function() {
    var cntCustomers = Counts.get('cnt_CustomersHome');
    var cntCustomersPending = Counts.get('cnt_CustomersPendingHome');
    var cntSum = cntCustomers + cntCustomersPending;
    return cntSum;  
  },
  getNotMailCustomers: function() {
    var cntCustomers = Counts.get('cnt_CustomersNotMailHome');
    var cntCustomersPending = Counts.get('cnt_CustomersPendingNotMailHome');
    var cntSum = cntCustomers + cntCustomersPending;
    return cntSum;
  },
  getLastCustomer: function(){
    return Customers.findOne({}, {sort: {customerSubmitted: -1}});
  },
  getLastEditedCustomer: function(){
    return Customers.findOne({}, {sort: {customerUpdatedAt: -1}});
  }
});

//-- template events
Template.acpHome.events({ 
});