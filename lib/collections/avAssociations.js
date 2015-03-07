//@since v0.1.1
AvAssociations = new Mongo.Collection('avassociations');

var Schema = {};

Schema.Association = new SimpleSchema({
  associationOldId: {
    type: String,
    label: "associationOldId",
    optional: true  
  },
  associationShort: {
    type: String,
    label: "associationShort",
    optional: true  
  },
  associationName: {
    type: String,
    label: "associationName",
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

AvAssociations.attachSchema(Schema.Association);

AvAssociations.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});