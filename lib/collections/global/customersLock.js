CustomersLock = new Mongo.Collection('customersLock');

var Schema = {};

Schema.Lock = new SimpleSchema({
  lockId: {
    type: String,
    label: "Sperr-ID",
    optional: true  
  },
  lockShortName: {
    type: String,
    label: "Kurzbezeichnung",
    optional: true  
  },
  lockName: {
    type: String,
    label: "Bezeichnung",
    optional: true  
  },
  changes: {             
    type: [Object],
    optional: true,
  },
  'changes.$.date': {      
    type: Date,
    optional: true
  },
  'changes.$.content': {   
    type: String,
    optional: true
  },
  'changes.$.user': {      
    type: String,
    optional: true
  },
  submitted: {
    type: Date,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

CustomersLock.attachSchema(Schema.Lock);

CustomersLock.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});