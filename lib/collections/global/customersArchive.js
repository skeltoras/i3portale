CustomersArchive = new Mongo.Collection('customersArchive');

CustomersArchive.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});