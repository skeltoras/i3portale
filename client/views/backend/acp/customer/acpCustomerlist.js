//since v0.1.1

//-- template created functions
Template.acpCustomerlist.created = function(){
  return Meteor.subscribe('getAllAvCustomers');
};

//-- template destroyed functions
Template.acpCustomerlist.destroyed = function(){
};

//-- template rendered functions
Template.acpCustomerlist.rendered = function(){
};

//-- template helpers                            
Template.acpCustomerlist.helpers({
});

//-- template events
Template.acpCustomerlist.events({ 
});

//-- template helpers
Template.avCustomersAllList.helpers({
  avCustomers: function() {
    //return AvCustomers.find({}, {sort: { avIdOld: 1}, limit: 15});
  }
});