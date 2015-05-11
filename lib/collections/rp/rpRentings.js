//@since v0.1.1             
RpRentings = new Mongo.Collection('rpRentings');

var Schema = {};

Schema.Renting = new SimpleSchema({
  //Numbers
  customerNo: {
    type: Number,
    label: "Kunden-Nr",
    optional: true                                                                                       
  },
  rentingsNo: {
    type: Number,
    label: "Reisen-Nr",
    optional: true
  },
  //Strings
  customerId: {
    type: String,
    label: "KundenId",
    optional: true                                                                                       
  },
  rentingsName: {
    type: String,
    label: "Name",
    optional: true
  },
  rentingsSiteUrl: {
    type: String,
    label: "URL",
    optional: true
  },
  rentingsHighlightOne: {
    type: String,
    label: "Highlight 1",
    optional: true
  },
  rentingsHighlightTwo: {
    type: String,
    label: "Highlight 2",
    optional: true
  },
  rentingsHighlightThree: {
    type: String,
    label: "Highlight 3",
    optional: true
  },
  rentingsDuration: {
    type: String,
    label: "Dauer",
    optional: true
  },
  rentingsCategory: {
    type: String,
    label: "Kategorie",
    optional: true
  },
  rentingsCustom: {
    type: String,
    label: "Besonderes",
    optional: true
  },
  rentingsUrl: {
    type: String,
    label: "URL",
    optional: true
  },
  rentingsTabOneS: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rentingsTabOneM: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rentingsTabOneL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rentingsTabOneXL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rentingsTabTwoM: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  rentingsTabTwoL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  rentingsTabTwoXL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  rentingsTabThreeL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  rentingsTabThreeXL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  rentingsTabFourXL: {
    type: String,
    label: "Tab 4",
    optional: true
  },
  rentingsTextOneS: {
    type: String,
    label: "Text 1",
    optional: true
  },
  rentingsTextOneM: {
    type: String,
    label: "Text 1",
    optional: true
  },
  rentingsTextOneL: {
    type: String,
    label: "Text 1",
    optional: true
  },
  rentingsTextOneXL: {
    type: String,
    label: "Text 1",
    optional: true
  },  
  rentingsTextTwoM: {
    type: String,
    label: "Text 2",
    optional: true
  },
  rentingsTextTwoL: {
    type: String,
    label: "Text 2",
    optional: true
  },
  rentingsTextTwoXL: {
    type: String,
    label: "Text 2",
    optional: true
  },  
  rentingsTextThreeL: {
    type: String,
    label: "Text 3",
    optional: true
  },
  rentingsTextThreeXL: {
    type: String,
    label: "Text 3",
    optional: true
  },  
  rentingsTextFourXL: {
    type: String,
    label: "Text 4",
    optional: true
  },
  rentingsAddTextTabOne: {
    type: String,
    label: "Tab 1",
    optional: true  
  },
  rentingsAddTextTabTwo: {
    type: String,
    label: "Tab 2",
    optional: true  
  },
  rentingsAddTextOne: {
    type: String,
    label: "Zusatztext 1",
    optional: true 
  },
  rentingsAddTextTwo: {
    type: String,
    label: "Zusatztext 2",
    optional: true  
  },
  rentingsHeaderImg: {
    type: String,
    label: "Headerbild",
    optional: true  
  },
  rentingsVideoUrl: {
    type: String,
    label: "Video",
    optional: true  
  },
  rentingsFacebookData: {
    type: String,
    label: "Facebook",
    optional: true
  },
  rentingsTwitterData: {
    type: String,
    label: "Twitter",
    optional: true
  },
  rentingsGplusData: {
    type: String,
    label: "G+",
    optional: true
  },
  rentingsYoutubeData: {
    type: String,
    label: "Youtube",
    optional: true
  },    
  //Dates
  rentingsVisibleBegin: {
    type: Date,
    optional: true
  },
  rentingsVisibleEnd: {
    type: Date,
    optional: true
  },
  //Booleans
  rentingsIsActive: {
    type: Boolean,
    label: "Ist aktiv"  
  },
  rentingsHasPackageS: {
    type: Boolean,
    label: "Paket S"  
  },
  rentingsHasPackageM: {
    type: Boolean,
    label: "Paket S"  
  },
  rentingsHasPackageL: {
    type: Boolean,
    label: "Paket S"  
  },
  rentingsHasPackageXL: {
    type: Boolean,
    label: "Paket S"  
  }, 
  rentingsHasAddTextOne: {
    type: Boolean,
    label: "hat Zusatztext 1"  
  },
  rentingsHasAddTextTwo: {
    type: Boolean,
    label: "hat Zusatztext 2"  
  },
  rentingsHasHeaderImg: {
    type: Boolean,
    label: "hat Headerbild"  
  },
  rentingsHasGalleryS: {
    type: Boolean,
    label: "Galerie S"  
  },
  rentingsHasGalleryM: {
    type: Boolean,
    label: "Galerie M"  
  },
  rentingsHasVideo: {
    type: Boolean,
    label: "Video"  
  },
  rentingsHasSocialMedia: {
    type: Boolean,
    label: "Social Media"  
  },       
  rentingsHasHighlights: {
    type: Boolean,
    label: "Hat Highlights"  
  },       
  //Objects
  rentingsCountries: {
    type: [Object],
    optional: true,
  },
  'rentingsCountries.$.id': {
    type: String,
    optional: true
  },
  'rentingsCountries.$.code': {
    type: String,
    optional: true
  },
  'rentingsCountries.$.name': {
    type: String,
    optional: true
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
  rentingsNotes: {
    type: String,
    label: "Notizen",
    optional: true
  },
  rentingsCountImages: {
    type: String,
    label: "rentingsCountImages",
    optional: true
  },
  //submit
  submitted: {
    type: Date,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

RpRentings.attachSchema(Schema.Renting);

//RpRentings.initEasySearch(['customerName']);

RpRentings.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});