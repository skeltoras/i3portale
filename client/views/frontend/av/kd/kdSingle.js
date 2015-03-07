//since v0.1.1

//-- template created functions
Template.kdSingle.created = function(){
};

//-- template destroyed functions
Template.kdSingle.destroyed = function(){
};

//-- template rendered functions
Template.kdSingle.rendered = function(){
};

//-- template helpers                            
Template.kdSingle.helpers({
  getFullData: function() {
    return true;
  }
});

//-- template events
Template.kdSingle.events({
  'click .back': function(e) {
    e.preventDefault();
    window.history.back();
  } 
});