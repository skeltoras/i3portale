//since v0.1.1

//-- template created functions
Template.avHome.created = function(){
};

//-- template destroyed functions
Template.avHome.destroyed = function(){
};

//-- template rendered functions
Template.avHome.rendered = function(){
};

//-- template helpers                            
Template.avHome.helpers({
  getRandomCustomer: function() {
    return AvCustomers.find({}, {limit: 15});
  }
});

//-- template events
Template.avHome.events({ 
});