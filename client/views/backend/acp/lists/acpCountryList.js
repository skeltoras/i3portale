//-- template onCreated functions
Template.acpCountryList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_allCountries');
  });
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
    return AvCountries.find();
  }
});

//-- template events
Template.acpCountryList.events({ 
});