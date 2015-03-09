//since v0.1.1

//-- template created functions
Template.rpHeader.created = function(){
};

//-- template destroyed functions
Template.rpHeader.destroyed = function(){
};

//-- template rendered functions
Template.rpHeader.rendered = function(){
  $(document).ready(function(){
    $(".topnav").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.rpHeader.helpers({
});

//-- template events
Template.rpHeader.events({ 
});