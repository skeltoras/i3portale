//@since v0.1.1
Portals = new Mongo.Collection('portals');

Portals.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});