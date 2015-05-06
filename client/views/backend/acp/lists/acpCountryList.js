//-- template onCreated functions
Template.acpCountryList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getAllCountries');
  });
  Session.set('countryId', null);
});

//-- template onDestroyed functions
Template.acpCountryList.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpCountryList.onRendered(function () {
});

//-- template helpers                            
Template.acpCountryList.helpers({
  getList: function() {
    return Countries.find();
  },
  getHeaderImg: function(){
    var countryId = Session.get('countryId');
    return globalImages.findOne({'metadata.countryId': countryId, 'metadata.assignedObject': 'countryHeaderImage'});
  },
  getSingleCountry: function() {
    var countryId = Session.get('countryId');
    return Countries.findOne({_id: countryId});
  }                                                
});

//-- template events
Template.acpCountryList.events({ 
  'change input[type=file]': function(e, tpl){
    e.preventDefault();
    var countryId = Session.get('countryId');
    var assignedObject = e.currentTarget.id;
    var target = e.currentTarget.classList[1];
    var gallery = e.currentTarget.classList[2];
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {countryId: countryId, assignedObject: assignedObject, target: target, gallery: gallery};
      globalImages.insert(newFile, function (err, fileObj) {
      });
    });
  },
  'click i.edit': function(e) {
    e.preventDefault();
    Session.set('countryId', e.currentTarget.id);
    if(Session.get('countryId')){
      $("#editCountry").removeClass('hidden');  
    }
  }
  
});