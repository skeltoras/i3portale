//-- template onCreated functions
Template.acpHome.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_countAllAvCustomers');
  });
});

//-- template onDestroyed functions
Template.acpHome.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpHome.onRendered(function () {
});

//-- template helpers                            
Template.acpHome.helpers({
  countAll: function(){
    return AvCustomers.find().count();
  },
  countApproved: function(){
    return AvCustomers.find({avIsApproved: true}).count();
  },
  countWithoutMail: function(){
    return AvCustomers.find({$and: [{avMailInternal: {$exists: false}},{avMailContact: {$exists: false}},{avMailFormal: {$exists: false}},{avMailNewsletter: {$exists: false}}]}).count();
  }
});

//-- template events
Template.acpHome.events({ 
});