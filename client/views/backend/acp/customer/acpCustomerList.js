function incrementLimit(inc){
  newLimit = Session.get('itemLimit') + inc;
  Session.set('itemLimit', newLimit);
};

//-- template onCreated functions
Template.acpAvCustomersList.onCreated(function () {
  //Session.set('itemLimit', 15);
});

//-- template onDestroyed functions
Template.acpAvCustomersList.onDestroyed(function () {
  //Session.set('itemLimit', 15);
});

//-- template onRendered functions
Template.acpAvCustomersList.onRendered(function () {
  //$(window).scroll(function() {
  //  if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
  //    incrementLimit(10);
  //  }
  //});
});

//-- template helpers                            
Template.acpAvCustomersList.helpers({
});

//-- template events
Template.acpAvCustomersList.events({
});

//-- template onCreated functions
Template.acpAvCustomersAllList.onCreated(function () {
  //var self = this;
  //self.autorun(function () {
  //  self.subscribe('acp_getAllAvCustomersWithLimit', Session.get('itemLimit'));
  //}); 
  //return Meteor.subscribe('getAllAvCustomers');
});

//-- template helpers
Template.acpAvCustomersAllList.helpers({
  //avCustomers: function() {
  //  return AvCustomers.find({}, { limit: Session.get('limit') });
  //}
});