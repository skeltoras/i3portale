Countries = new Mongo.Collection('countries');

var Schema = {};

Schema.Country = new SimpleSchema({
  countryId: {
    type: String,
    label: "countryId",
    optional: true  
  },
  countryOldId: {
    type: String,
    label: "countryOldId",
    optional: true  
  },
  countryName: {
    type: String,
    label: "Suchname",
    optional: true  
  },
  countryShortName: {
    type: String,
    label: "off. Kurzname",
    optional: true  
  },
  countryLongName: {
    type: String,
    label: "off. Langname",
    optional: true  
  },
  countryNationality: {
    type: String,
    label: "Staatsangehörigkeit",
    optional: true  
  },
  countryContinent: {
    type: String,
    label: "Kontinent",
    optional: true  
  },
  countryISO2: {
    type: String,
    label: "ISO2 Kürzel",
    optional: true  
  },
  countryISO3: {
    type: String,
    label: "ISO3 Kürzel",
    optional: true  
  },
  countryDesc: {
    type: String,
    label: "Beschreibung",
    optional: true  
  },
  countryNo: {
    type: Number,
    label: "Land Nummer",
    optional: true  
  },
  countryPriority: {
    type: Number,
    label: "Sortierreihenfolge",
    optional: true  
  },
  countryHasRP: {
    type: Boolean,
    label: "Reiseportal Boolean"             
  },
  images: {
    type: [Object],
    optional: true,
  },
  'images.$.id': {
    type: String,
    optional: true
  },
  'images.$.assignedObject': {
    type: String,
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

Countries.attachSchema(Schema.Country);

Countries.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});