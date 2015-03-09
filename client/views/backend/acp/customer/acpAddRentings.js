//-- template created functions
Template.acpAddRentings.created = function(){ 
};

//-- template destroyed functions
Template.acpAddRentings.destroyed = function(){
};

//-- template rendered functions
Template.acpAddRentings.rendered = function(){
  $('#countryData').select2();
  $('#regionData').select2();
  $('#regionNewData').select2({
    tags : true,
    tokenSeparators : [',']
  });
};

//-- template helpers
Template.acpAddRentings.helpers({
});

//-- template events
Template.acpAddRentings.events({
});