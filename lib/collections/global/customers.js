Customers = new Mongo.Collection('customers');

var Schema = {};

Schema.Customer = new SimpleSchema({
  customerId: {
    type: Number,
    label: "KundenNr",
    optional: true  
  },  
  customerName: {
    type: String,
    label: "Name",
    max: 45,
    optional: true  
  },
  customerLongName: {
    type: String,
    label: "Langname",
    //max: 45,
    optional: true  
  },
  customerDepartment: {
    type: String,
    label: "Abteilung / Zusatz",
    optional: true  
  },
  customerPostAddition: {
    type: String,
    label: "Adresszusatz / c/o",
    optional: true  
  },
  customerStreet: {
    type: String,
    label: "Strasse",
    optional: true  
  },
  customerPlz: {
    type: String,
    label: "PLZ",
    optional: true  
  },
  customerCity: {
    type: String,
    label: "Ort",
    optional: true  
  },      
  customerCountry: {
    type: String,
    label: "Land",
    optional: true  
  },
  customerTelephoneFormal: {
    type: String,
    label: "Telefon öffentlich",
    optional: true
  },
  customerTelephoneInternal: {
    type: String,
    label: "Telefon intern",
    optional: true
  },
  customerTelefax: {
    type: String,
    label: "Fax",
    optional: true
  },
  customerMobil: {
    type: String,
    label: "Mobilnummer",
    optional: true
  },
  customerMailFormal: {
    type: String,
    label: "E-Mail öffentlich",
    optional: true
  },
  customerMailInternal: {
    type: String,
    label: "E-Mail Ansprechpartner",
    optional: true
  },
  customerUrl: {
    type: String,
    label: "Website",
    optional: true
  },
  customerContact: {
    type: String,
    label: "Ansprechpartner",
    optional: true
  },
  customerInfo: {
    type: String,
    label: "Kurzinformation",
    optional: true
  },
  customerSiteUrl: {
    type: String,
    label: "PageURL",
    optional: true  
  },
  customerNotes: {
    type: String,
    label: "Notizen",
    optional: true
  },
  // BOOLEAN
  customerIsApproved: {
    type: Boolean,
    label: "Ist freigegeben"  
  },
  customerHasAv: {
    type: Boolean,
    label: "customerHasAv"             
  },
  customerHasRP: {
    type: Boolean,
    label: "customerHasRP"  
  },
  customerHasKG: {
    type: Boolean,
    label: "customerHasKG"  
  },
  // OBJECTS
  customerBlockIndicators: {
    type: [Object],
    optional: true,
  },
  'customerBlockIndicators.$.id': {
    type: String,
    optional: true
  },
  'customerBlockIndicators.$.short': {      
    type: String,
    optional: true
  },
  'customerBlockIndicators.$.name': {       
    type: String,
    optional: true
  },
  customerCampaigns: {                      // TODO
    type: [Object],
    optional: true,
  },
  'customerCampaigns.$.id': {               // TODO
    type: String,
    optional: true
  },
  'customerCampaigns.$.name': {             // TODO
    type: String,
    optional: true
  },
  'customerCampaigns.$.isFinished': {       // TODO
    type: Boolean
  },
  'customerCampaigns.$.date': {             // TODO
    type: Date,
    optional: true
  },
  customerChanges: {               // TODO
    type: [Object],
    optional: true,
  },
  'customerChanges.$.date': {      // TODO
    type: Date,
    optional: true
  },
  'customerChanges.$.content': {   // TODO
    type: String,
    optional: true
  },
  'customerChanges.$.user': {      // TODO
    type: String,
    optional: true
  },
  customerSubmitted: {
    type: Date,
    optional: true
  },
  customerApproved: {
    type: Date,
    optional: true
  },
  customerUpdatedAt: {
    type: Date,
    optional: true
  }
});

Customers.attachSchema(Schema.Customer);

Customers.initEasySearch(['customerId', 'customerName'], {
  'limit' : 15,
  'use' : 'mongo-db'
});

Customers.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});