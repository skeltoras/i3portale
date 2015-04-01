//-- template onCreated functions
Template.acpAvAssociationsList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_allAvAssociations');
  });
});

//-- template onDestroyed functions
Template.acpAvAssociationsList.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpAvAssociationsList.onRendered(function () {
});

//-- template helpers                            
Template.acpAvAssociationsList.helpers({
  getList: function() {
    return AvAssociations.find({}, {sort: {associationOldId: 1}});
  }
});

//-- template events
Template.acpAvAssociationsList.events({ 
});