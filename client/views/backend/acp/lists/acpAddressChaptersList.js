//-- template created functions
Template.acpAddressChaptersList.created = function(){
};

//-- template destroyed functions
Template.acpAddressChaptersList.destroyed = function(){
};

//-- template rendered functions
Template.acpAddressChaptersList.rendered = function(){
};

//-- template helpers                            
Template.acpAddressChaptersList.helpers({
  getList: function() {
    return AddressChapters.find();
  }
});

//-- template events
Template.acpAddressChaptersList.events({ 
});