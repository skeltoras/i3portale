//-- template created functions
Template.acpCountryList.created = function(){
};

//-- template destroyed functions
Template.acpCountryList.destroyed = function(){
};

//-- template rendered functions
Template.acpCountryList.rendered = function(){
};

//-- template helpers                            
Template.acpCountryList.helpers({
  getList: function() {
    return Countries.find();
  }
});

//-- template events
Template.acpCountryList.events({ 
});