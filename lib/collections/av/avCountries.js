//@since v0.1.1
AvCountries = new Mongo.Collection('avCountries');

var Schema = {};

Schema.Country = new SimpleSchema({
  countryOldId: {
    type: String,
    label: "countryOldId",
    optional: true  
  },
  countryIndex: {
    type: String,
    label: "countryIndex",
    optional: true  
  },
  countryShort: {
    type: String,
    label: "countryShort",
    optional: true  
  },
  countryShortName: {
    type: String,
    label: "countryShortName",
    optional: true  
  },
  countryName: {
    type: String,
    label: "countryName",
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

AvCountries.attachSchema(Schema.Country);

AvCountries.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});