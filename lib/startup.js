//@since v0.1.1
Meteor.startup(function () {
  if(Meteor.isClient) {
    SimpleSchema.debug = true
  }
  
  if(Meteor.isServer){
  }
}); 