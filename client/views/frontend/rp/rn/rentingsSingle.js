//since v0.1.1

//-- template created functions
Template.rentingsSingle.created = function(){
};

//-- template destroyed functions
Template.rentingsSingle.destroyed = function(){
};

//-- template rendered functions
Template.rentingsSingle.rendered = function(){
};

//-- template helpers                            
Template.rentingsSingle.helpers({
  getCustomer: function() {
    customerId = this.customerId;
    return Customers.findOne({_id: customerId});
  }
});

//-- template events
Template.rentingsSingle.events({ 
});