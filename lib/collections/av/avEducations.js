//@since v0.1.1
AvEducations = new Mongo.Collection('avEducations');

var Schema = {};

Schema.Education = new SimpleSchema({
  educationOldId: {
    type: String,
    label: "educationOldId",
    optional: true  
  },
  educationShortName: {
    type: String,
    label: "educationShortName",
    optional: true  
  },
  educationName: {
    type: String,
    label: "educationName",
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

AvEducations.attachSchema(Schema.Education);

AvEducations.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});