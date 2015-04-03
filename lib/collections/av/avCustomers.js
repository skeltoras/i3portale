AvCustomers = new Mongo.Collection('avCustomers');

var Schema = {};

Schema.Customer = new SimpleSchema({
  // old fields
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
  avRandomSort: {
    type: Number,
    label: "Sortiernummer",
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
  avAlpha1Old: {
    type: String,
    label: "avAlpha1Old",
    optional: true  
  },
  avAlpha2Old: {
    type: String,
    label: "avAlpha2Old",
    optional: true  
  },
  avAlpha3Old: {
    type: String,
    label: "avAlpha2Old",
    optional: true  
  },
  avLegalForm: {
    type: String,
    label: "Rechtsform",
    optional: true  
  },
  avCityPartOld: {
    type: String,
    label: "avCityPartOld",
    optional: true  
  },
  avKantonOld: {
    type: String,
    label: "avKantonOld",
    optional: true  
  },
  avCountryOldId: {
    type: String,
    label: "alte Landkennung",
    optional: true  
  },
  avQuestionToCustomerOld: {
    type: String,
    label: "avQuestionToCustomerOld",
    optional: true  
  },
  avAnswerFromCustomerOld: {
    type: String,
    label: "avAnswerFromCustomerOld",
    optional: true  
  },
  avbMultiplikatorOld: {
    type: String,
    label: "avbMultiplikatorOld",
    optional: true  
  },
  avbProbeaboOld: {
    type: String,
    label: "avbProbeaboOld",
    optional: true  
  },
  avbInteresseAnzeigenOld: {
    type: String,
    label: "avbInteresseAnzeigenOld",
    optional: true  
  },
  avbInteressePrintausgabeOld: {
    type: String,
    label: "avbInteressePrintausgabeOld",
    optional: true  
  },
  avbKeinBelegexemplarOld: {
    type: String,
    label: "avbKeinBelegexemplarOld",
    optional: true  
  }, 
  avmNotizenOld: {
    type: String,
    label: "avmNotizenOld",
    optional: true  
  },
  avShortinfo2Old: {
    type: String,
    label: "Kurzinformation 2",
    optional: true
  },
  avSelfinfoOld: {
    type: String,
    label: "Selbstdarstellung",
    optional: true
  },
  avCountEmployeesOld: {
    type: String,
    label: "Mitarbeiter",
    optional: true
  },      
  // actual fields
  avId: {
    type: Number,
    label: "Aktuelle ID",
    optional: true  
  },  
  avCustomerName: {
    type: String,
    label: "Name",
    max: 45,
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
  avNotes: {
    type: String,
    label: "Notizen",
    optional: true
  },
  // booleans
  avIsApproved: {
    type: Boolean,
    label: "Ist freigegeben"  
  },
  avIsFeatured: {
    type: Boolean,
    label: "Is Featured"  
  },
  avHasAV: {
    type: Boolean,
    label: "avHasAV"             
  },
  avHasRP: {
    type: Boolean,
    label: "avHasRP"  
  },
  avHasKG: {
    type: Boolean,
    label: "avHasKG"  
  },
  // objects
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
  'avBlockIndicators.$.reason': {     // TODO 
    type: String,
    optional: true
  },
  avCampaigns: {                      // TODO
    type: [Object],
    optional: true,
  },
  'avCampaigns.$.id': {               // TODO
    type: String,
    optional: true
  },
  'avCampaigns.$.name': {             // TODO
    type: String,
    optional: true
  },
  'avCampaigns.$.isFinished': {       // TODO
    type: Boolean
  },
  'avCampaigns.$.date': {             // TODO
    type: Date,
    optional: true
  },
  avEducations: {                     // TODO
    type: [Object],
    optional: true,
  },
  'avEducations.$.id': {              // TODO
    type: String,
    optional: true
  },
  'avEducations.$.oldId': {           // TODO
    type: String,
    optional: true
  },
  'avEducations.$.quantity': {        // TODO
    type: String,
    optional: true
  },
  'avEducations.$.name': {            // TODO
    type: String,
    optional: true
  },
  'avEducations.$.category': {        // TODO
    type: String,
    optional: true
  },
  'avEducations.$.open': {            // TODO
    type: String,
    optional: true
  },
  'avEducations.$.notes': {           // TODO
    type: String,
    optional: true
  },
  'avEducations.$.isFinished': {      // TODO
    type: Boolean
  },  
  'avEducations.$.date': {            // TODO
    type: Date,
    optional: true
  },
  avChanges: {               // TODO
    type: [Object],
    optional: true,
  },
  'avChanges.$.date': {      // TODO
    type: Date,
    optional: true
  },
  'avChanges.$.content': {   // TODO
    type: String,
    optional: true
  },
  'avChanges.$.user': {      // TODO
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

AvCustomers.attachSchema(Schema.Customer);

AvCustomers.initEasySearch(['avIdOld', 'avName1Old', 'avName2Old', 'avCustomerName'], {
  'limit' : 15,
  'use' : 'mongo-db'
});

AvCustomers.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});