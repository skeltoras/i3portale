//@since v0.1.1
AvSections = new Mongo.Collection('avSections');

var Schema = {};

Schema.Section = new SimpleSchema({
  sectionOldId: {
    type: String,
    label: "sectionOldId",
    optional: true  
  },
  sectionName: {
    type: String,
    label: "sectionName",
    optional: true  
  },
  sectionDescription: {
    type: String,
    label: "sectionDescription",
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

AvSections.attachSchema(Schema.Section);

AvSections.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});