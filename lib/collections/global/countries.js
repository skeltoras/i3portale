Countries = new Mongo.Collection('countries');

var Schema = {};

Schema.Country = new SimpleSchema({
  countryId: {
    type: Number,
    label: "Land ID",
    optional: true  
  },
  countryShortName: {
    type: String,
    label: "Kürzel",
    optional: true  
  },
  countryName: {
    type: String,
    label: "Landname",
    optional: true  
  },
  nLandnummer: {
    type: Number,
    label: "Landnummer",
    optional: true  
  },
  tKuerzel: {
    type: String,
    label: "tKuerzel",
    optional: true  
  },
  tInfo: {
    type: String,
    label: "tGeographie",
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