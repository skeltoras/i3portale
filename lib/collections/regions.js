//@since v0.1.1
Regions = new Mongo.Collection('regions');

Regions.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});