//@since v0.1.1
Countries = new Mongo.Collection('countries');

var Schema = {};

Schema.Country = new SimpleSchema({
  countryOldId: {
    type: String,
    label: "countryOldId",
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

Countries.attachSchema(Schema.Country);

Countries.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});