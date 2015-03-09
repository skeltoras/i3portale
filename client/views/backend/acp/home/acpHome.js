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
  getAvChapters: function() {
    Meteor.subscribe('getAllAvChapters');
  }
});

//-- template events
Template.acpHome.events({ 
});