//@since v0.1.1
Meteor.startup(function () {
  if(Meteor.isClient) {
    SimpleSchema.debug = true
    Session.set('acpCustomersSearch', '');
  }
  
  if(Meteor.isServer){
    //setCounter('counters', 'customerId', 11931); //DEBUG
    //setCounter('counters', 'logId', 11931); //DEBUG
  }
}); 