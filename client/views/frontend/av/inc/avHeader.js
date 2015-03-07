//since v0.1.1

//-- template created functions
Template.avHeader.created = function(){
};

//-- template destroyed functions
Template.avHeader.destroyed = function(){
};

//-- template rendered functions
Template.avHeader.rendered = function(){
  $(document).ready(function(){
    $(".topnav").sticky({topSpacing:0});
  });
};

//-- template helpers                            
Template.avHeader.helpers({
});

//-- template events
Template.avHeader.events({ 
});