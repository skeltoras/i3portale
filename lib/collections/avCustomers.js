AvCustomers = new Mongo.Collection('avcustomers');

var Schema = {};

Schema.AvCustomer = new SimpleSchema({
  avRandomSort: {
    type: Number,
    label: "Sortiernummer",
    optional: true  
  },
  avIdOld: {
    type: String,
    label: "Alte ID",
    optional: true  
  },
  avKDNr: {
    type: String,
    label: "Kundennummer MS-Adam",
    optional: true  
  },
  avCreatedOld: {
    type: Date,
    label: "Altes Erstellungsdatum",
    optional: true  
  },
  avChangedOld: {
    type: Date,
    label: "Altes Änderungsdatum",
    optional: true  
  },  
  avName1Old: {
    type: String,
    label: "Name alt",
    optional: true  
  },
  avName2Old: {
    type: String,
    label: "Name 2 alt",
    optional: true  
  },
  avRegisterNameOld: {
    type: String,
    label: "Registername alt",
    optional: true  
  },
  avCustomerName: {
    type: String,
    label: "Name",
    max: 45,
    optional: true  
  },  
  avLegalForm: {
    type: String,
    label: "Rechtsform",
    optional: true  
  },
  avDepartment: {
    type: String,
    label: "Abteilung / Zusatz",
    optional: true  
  },
  avPostAddition: {
    type: String,
    label: "Adresszusatz / c/o",
    optional: true  
  },
  avStreet: {
    type: String,
    label: "Strasse",
    optional: true  
  },
  avPostBox: {
    type: String,
    label: "Postfach",
    optional: true  
  },
  avPlz: {
    type: String,
    label: "PLZ",
    optional: true  
  },
  avCity: {
    type: String,
    label: "Ort",
    optional: true  
  },
  avRegion: {
    type: String,
    label: "Region",
    optional: true  
  },
  avCountryOldId: {
    type: String,
    label: "alte Landkennung",
    optional: true  
  },
  avCountry: {
    type: String,
    label: "Land",
    optional: true  
  },
  avTelephoneFormal: {
    type: String,
    label: "Telefon öffentlich",
    optional: true
  },
  avTelephoneInternal: {
    type: String,
    label: "Telefon intern",
    optional: true
  },
  avTelefax: {
    type: String,
    label: "Fax",
    optional: true
  },
  avMobil: {
    type: String,
    label: "Mobilnummer",
    optional: true
  },
  avMailInternal: {
    type: String,
    label: "E-Mail Ansprechpartner",
    optional: true
  },
  avMailContact: {
    type: String,
    label: "E-Mail Kontaktformular",
    optional: true
  },
  avMailFormal: {
    type: String,
    label: "E-Mail öffentlich",
    optional: true
  },
  avMailNewsletter: {
    type: String,
    label: "E-Mail für Newsletter",
    optional: true
  }, 
  avUrl: {
    type: String,
    label: "Website",
    optional: true
  },
  avShortinfo: {
    type: String,
    label: "Kurzinformation",
    optional: true
  },
  avShortinfo2: {
    type: String,
    label: "Kurzinformation 2",
    optional: true
  },
  avSelfinfoOld: {
    type: String,
    label: "Selbstdarstellung",
    optional: true
  },
  avCountEmployees: {
    type: String,
    label: "Mitarbeiter",
    optional: true
  },
  avContactPerson: {
    type: String,
    label: "Ansprechpartner",
    optional: true
  },
  avSiteUrl: {
    type: String,
    label: "PageURL",
    optional: true  
  },
  avFacebookData: {
    type: String,
    label: "Facebook",
    optional: true
  },
  avTwitterData: {
    type: String,
    label: "Twitter",
    optional: true
  },
  avGplusData: {
    type: String,
    label: "G+",
    optional: true
  },
  avYoutubeData: {
    type: String,
    label: "Youtube",
    optional: true
  },
  avIsApproved: {
    type: Boolean,
    label: "Ist freigegeben"  
  },
  avIsFeatured: {
    type: Boolean,
    label: "Is Featured"  
  },
  avNotes: {
    type: String,
    label: "Notizen",
    optional: true
  },
  avAddressChapters: {
    type: [Object],
    optional: true,
  },
  'avAddressChapters.$.id': {
    type: String,
    optional: true
  },
  'avAddressChapters.$.short': {
    type: String,
    optional: true
  },
  'avAddressChapters.$.name': {
    type: String,
    optional: true
  },
  'avAddressChapters.$.isPrimary': {
    type: Boolean
  },
  avAssociations: {
    type: [Object],
    optional: true,
  },
  'avAssociations.$.id': {
    type: String,
    optional: true
  },
  'avAssociations.$.short': {
    type: String,
    optional: true
  },
  'avAssociations.$.name': {
    type: String,
    optional: true
  },
  avBlockIndicators: {
    type: [Object],
    optional: true,
  },
  'avBlockIndicators.$.id': {
    type: String,
    optional: true
  },
  'avBlockIndicators.$.short': {
    type: String,
    optional: true
  },
  'avBlockIndicators.$.name': {
    type: String,
    optional: true
  },
  'avBlockIndicators.$.reason': {
    type: String,
    optional: true
  },
  'avCustomerPortals.$.blockDate': {
    type: Date,
    optional: true
  },
  avCustomerPortals: {
    type: [Object],
    optional: true,
  },
  'avCustomerPortals.$.id': {
    type: String,
    optional: true
  },
  'avCustomerPortals.$.name': {
    type: String,
    optional: true
  },
  'avCustomerPortals.$.date': {
    type: Date,
    optional: true
  },
  avChanges: {
    type: [Object],
    optional: true,
  },
  'avChanges.$.date': {
    type: Date,
    optional: true
  },
  'avChanges.$.content': {
    type: String,
    optional: true
  },
  'avChanges.$.user': {
    type: String,
    optional: true
  },
  avSubmitted: {
    type: Date,
    optional: true
  },
  avUpdatedAt: {
    type: Date,
    optional: true
  }
});

AvCustomers.attachSchema(Schema.AvCustomer);

AvCustomers.initEasySearch(['avIdOld', 'avName1Old', 'avName2Old'], {
  'limit' : 15,
  'use' : 'mongo-db'
});

AvCustomers.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});