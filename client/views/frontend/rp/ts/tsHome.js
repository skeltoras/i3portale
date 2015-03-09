//since v0.1.1

//-- template created functions
Template.tsHome.created = function(){
};

//-- template destroyed functions
Template.tsHome.destroyed = function(){
};

//-- template rendered functions
Template.tsHome.rendered = function(){
};

//-- template helpers                            
Template.tsHome.helpers({
  getTours: function(){
    return Tours.find({});
  }
});

//-- template events
Template.tsHome.events({ 
});