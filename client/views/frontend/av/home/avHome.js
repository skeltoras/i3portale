//-- template onCreated functions
Template.avHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('av_getHomeAVCustomers');     
  });
});

//-- template onDestroyed functions
Template.avHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.avHome.onRendered(function () {
});

//-- template helpers                            
Template.avHome.helpers({
  getFeaturedCustomer: function() {
    var customersPool = Customers.find().fetch();
    customersPool = _.shuffle(customersPool);
    //var data = [];
    //for(var i = 0; i < 15; i++){
    
    //}
    console.log(customersPool); //DEBUG
    return customersPool;
  }
});

//-- template events
Template.avHome.events({ 
});