//@since v0.1.1
Customers = new Mongo.Collection('customers');

var Schema = {};

Schema.Customer = new SimpleSchema({
  // offiziellen Felder 
  customerName: {
    type: String,
    label: "Name",
    optional: true  
  },
  customersSiteUrl: {
    type: String,
    label: "Name",
    optional: true  
  },
  
  street: {
    type: String,
    label: "Strasse",
    optional: true
  },
  additional: {
    type: String,
    label: "Zusatz",
    optional: true
  },
  plz: {
    type: String,
    label: "PLZ",
    optional: true
  },
  city: {
    type: String,
    label: "Ort",
    optional: true
  },
  country: {
    type: String,
    label: "Land",
    optional: true
  },
  telephone: {
    type: String,
    label: "Telefon",
    optional: true
  },
  telefax: {
    type: String,
    label: "Fax",
    optional: true
  },
  emailOff: {
    type: String,
    label: "E-Mail",
    optional: true
  },
  url: {
    type: String,
    label: "Website",
    optional: true
  },
  // inoffizielle Felder
  customerContact: {
    type: String,
    label: "Ansprechpartner",
    optional: true
  },
  contactTelephone: {
    type: String,
    label: "Telefon Kontakt",
    optional: true
  },
  contactMobil: {
    type: String,
    label: "Mobilnummer",
    optional: true
  },
  contactEmail: {
    type: String,
    label: "E-Mail Kontakt",
    optional: true
  },
  socialFacebook: {
    type: String,
    label: "Facebook",
    optional: true
  },
  socialTwitter: {
    type: String,
    label: "Twitter",
    optional: true
  },
  socialGplus: {
    type: String,
    label: "G+",
    optional: true
  },
  socialYoutube: {
    type: String,
    label: "Youtube",
    optional: true
  },
  notes: {
    type: String,
    label: "Notizen",
    optional: true
  },
  portals: {
    type: [Object],
    optional: true,
  },
  'portals.$.date': {
    type: Date,
    optional: true
  },
  'portals.$.id': {
    type: String,
    optional: true
  },
  'portals.$.name': {
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

Customers.attachSchema(Schema.Customer);

Customers.initEasySearch(['customerName']);

Customers.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});
