//since v0.1.1

//-- template created functions
Template.rnHome.created = function(){
};

//-- template destroyed functions
Template.rnHome.destroyed = function(){
};

//-- template rendered functions
Template.rnHome.rendered = function(){
};

//-- template helpers                            
Template.rnHome.helpers({
  getRentings: function() {
    return Rentings.find({});
  }
});

//-- template events
Template.rnHome.events({ 
});