//since v0.1.1

//-- template created functions
Template.acpHome.created = function(){
};

//-- template destroyed functions
Template.acpHome.destroyed = function(){
};

//-- template rendered functions
Template.acpHome.rendered = function(){
};

//-- template helpers                            
Template.acpHome.helpers({
  getRandomCustomer: function() {
    return AvCustomers.find({}, {limit: 15});
  }
});

//-- template events
Template.acpHome.events({ 
});