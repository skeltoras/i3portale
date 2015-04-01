//-- template onCreated functions
Template.acpAvBlockIndicatorsList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_allBlockIndicators');
  });
});

//-- template onDestroyed functions
Template.acpAvBlockIndicatorsList.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpAvBlockIndicatorsList.onRendered(function () {
});

//-- template helpers                            
Template.acpAvBlockIndicatorsList.helpers({
  getList: function() {
    return AvBlockIndicators.find({});
  }
});

//-- template events
Template.acpAvBlockIndicatorsList.events({ 
});