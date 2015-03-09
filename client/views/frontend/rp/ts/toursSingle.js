//since v0.1.1

//-- template created functions
Template.toursSingle.created = function(){
};

//-- template destroyed functions
Template.toursSingle.destroyed = function(){
};

//-- template rendered functions
Template.toursSingle.rendered = function(){
};

//-- template helpers                            
Template.toursSingle.helpers({
  getCustomer: function() {
    customerId = this.customerId;
    return Customers.findOne({_id: customerId});
  }
});

//-- template events
Template.toursSingle.events({ 
});