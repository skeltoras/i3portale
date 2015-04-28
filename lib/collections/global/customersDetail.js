CustomersDetail = new Mongo.Collection('customersDetail');

var Schema = {};

Schema.CustomerDetail = new SimpleSchema({
  customerId: {
    type: String,
    label: "KundenNr",
    optional: true  
  },
  idAdresse: {
    type: Number,
    label: "Alte ID",
    optional: true  
  },
  nKundennummer: {
    type: String,
    label: "Kundennummer MS-Adam",
    optional: true  
  },
  dErfassung: {
    type: Date,
    optional: true
  },
  dAenderung: {
    type: Date,
    optional: true
  },
  dRuecklauf: {
    type: Date,
    optional: true
  },
  tName: {
    type: String,
    label: "Name alt",
    optional: true  
  },
  tName2: {
    type: String,
    label: "Name 2 alt",
    optional: true  
  },
  tRechtsform: {
    type: String,
    label: "Rechtsform",
    optional: true  
  },
  tZusatz: {
    type: String,
    label: "Zusatz",
    optional: true  
  },
  tCoPost: {
    type: String,
    label: "c/o",
    optional: true  
  },
  tOrtsteil: {
    type: String,
    label: "Ortsteil",
    optional: true  
  },
  tKanton: {
    type: String,
    label: "Kanton",
    optional: true  
  },
  tTelefon: {
    type: String,
    label: "Telefon",
    optional: true  
  },
  tTelefon2: {
    type: String,
    label: "Telefon 2",
    optional: true  
  },
  tEmail2: {
    type: String,
    label: "Email Kontaktformular",
    optional: true  
  },
  tEmail4: {
    type: String,
    label: "Email Newsletter",
    optional: true  
  },
  tFragenAnKunde: {
    type: String,
    label: "Fragen an Kunde",
    optional: true  
  },
  tMitteilung: {
    type: String,
    label: "Mitteilung",
    optional: true  
  },
  nAnzahlMitarbeiter: {
    type: Number,
    label: "Anzahl Mitarbeiter",
    optional: true  
  },
  bLehrstellen: {
    type: Boolean,
    label: "Lehrstellen"  
  },
  nAnzahlLehrstellen: {
    type: Number,
    label: "Anzahl Mitarbeiter",
    optional: true  
  },
  tLehrberuf: {
    type: String,
    label: "Lehrberuf",
    optional: true  
  },
  tLsOffenAb: {
    type: String,
    label: "Offen ab",
    optional: true  
  },
  nAnzahlZivi: {
    type: Number,
    label: "Anzahl Zivi",
    optional: true  
  },
  tBereichZivi: {
    type: String,
    label: " Bereich Zivi",
    optional: true  
  },
  tZsOffenAb: {
    type: String,
    label: "Offen ab",
    optional: true  
  },
  bPraktikum: {
    type: Boolean,
    label: "Praktikum"  
  },
  nAnzahlPraktikum: {
    type: Number,
    label: "Anzahl Praktikum",
    optional: true  
  },
  tBereichPraktikum: {
    type: String,
    label: "Bereich Praktikum",
    optional: true  
  },
  dPsOffenAb: {
    type: String,
    label: "Offen ab",
    optional: true  
  },
  bFreiwilligendienste: {
    type: Boolean,
    label: "Freiwilligendienste"  
  },
  nAnzahlFsj: {
    type: Number,
    label: "Anzahl Fsj",
    optional: true  
  },
  tBereichFsj: {
    type: String,
    label: "Bereich Fsj",
    optional: true  
  },
  tFsOffenAb: {
    type: String,
    label: "Offen ab",
    optional: true  
  },
  nAnzahlStudenten: {
    type: Number,
    label: "Anzahl Fsj",
    optional: true  
  },
  tSelektion: {
    type: String,
    label: "tSelektion",
    optional: true  
  },
  xAdresskapitel: {
    type: String,
    label: "xAdresskapitel",
    optional: true  
  },
  xSperre: {
    type: String,
    label: "xSperre",
    optional: true  
  },
  tSperrgrund: {
    type: String,
    label: "tSperrgrund",
    optional: true  
  },
  dSperrdatum: {
    type: Date,
    optional: true
  },
  bVerband: {
    type: String,
    label: "bVerband",
    optional: true  
  },  
  tVerband: {
    type: String,
    label: "tVerband",
    optional: true  
  },
  bMultiplikator: {
    type: Boolean,
    label: "bMultiplikator"  
  },  
  bProbeabo: {
    type: Boolean,
    label: "bProbeabo"  
  },  
  bInteresseAnzeigen: {
    type: Boolean,
    label: "bInteresseAnzeigen"  
  },  
  bInteressePrintausgabe: {
    type: Boolean,
    label: "bInteressePrintausgabe"  
  },  
  bKeinBelegexemplar: {
    type: Boolean,
    label: "bKeinBelegexemplar"  
  },
  tGeorderteAnzeigen: {
    type: String,
    label: "tVerband",
    optional: true  
  },
  nAnzahlProspekte: {
    type: Number,
    label: "nAnzahlProspekte",
    optional: true  
  },
  tRegistername: {
    type: String,
    label: "tRegistername",
    optional: true  
  },
  tAlpha1: {
    type: String,
    label: "tAlpha1",
    optional: true  
  },
  tAlpha2: {
    type: String,
    label: "tAlpha2",
    optional: true  
  },
  tAlpha3: {
    type: String,
    label: "tAlpha3",
    optional: true  
  },
  nPrioritaet: {
    type: String,
    label: "nPrioritaet",
    optional: true  
  },
  nSeitennummer: {
    type: String,
    label: "nSeitennummer",
    optional: true  
  },
  bGeprueft: {
    type: String,
    label: "bGeprueft",
    optional: true  
  },
  tAnmerkungen1: {
    type: String,
    label: "tAnmerkungen1",
    optional: true  
  },
  tAnmerkungen2: {
    type: String,
    label: "tAnmerkungen2",
    optional: true  
  },
  bFreigabeSelbstdarstellung: {
    type: String,
    label: "bFreigabeSelbstdarstellung",
    optional: true  
  },
  bKurseFreizeitbereich: {
    type: String,
    label: "bKurseFreizeitbereich",
    optional: true  
  },
  bBerufsbildungslehrgaenge: {
    type: String,
    label: "bBerufsbildungslehrgänge",
    optional: true  
  },
  mKursbeschreibung: {
    type: String,
    label: "mKursbeschreibung",
    optional: true  
  },
  bFreigabeKursbeschreibung: {
    type: String,
    label: "bFreigabeKursbeschreibung",
    optional: true  
  },
  mKursthema: {
    type: String,
    label: "mKursthema",
    optional: true  
  },
  tAnmerkungen3: {
    type: String,
    label: "tAnmerkungen3",
    optional: true  
  },
  tAnmerkungen4: {
    type: String,
    label: "tAnmerkungen4",
    optional: true  
  },
  tAnmerkungen5: {
    type: String,
    label: "tAnmerkungen5",
    optional: true  
  },
  tAnmerkungen6: {
    type: String,
    label: "tAnmerkungen6",
    optional: true  
  },
  xLand: {
    type: Number,
    label: "xLand",
    optional: true  
  },
  tKInfo2: {
    type: String,
    label: "tKInfo2",
    optional: true  
  },
  tZusatztext: {
    type: String,
    label: "tZusatztext",
    optional: true  
  },
  bSonderanzeige: {
    type: String,
    label: "bSonderanzeige",
    optional: true  
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
  avAddressChapters: {
    type: [Object],
    optional: true,
  },
  'avAddressChapters.$.id': {
    type: String,
    optional: true
  },
  'avAddressChapters.$.shortname': {
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

CustomersDetail.attachSchema(Schema.CustomerDetail);

CustomersDetail.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});