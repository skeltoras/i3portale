//@since v0.1.1
RpTours = new Mongo.Collection('rpTours');

var Schema = {};

Schema.Tour = new SimpleSchema({
  //Numbers
  customerNo: {
    type: Number,
    label: "Kunden-Nr",
    optional: true                                                                                       
  },
  toursNo: {
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
  toursName: {
    type: String,
    label: "Name",
    optional: true
  },
  toursSiteUrl: {
    type: String,
    label: "URL",
    optional: true
  },
  toursHighlightOne: {
    type: String,
    label: "Highlight 1",
    optional: true
  },
  toursHighlightTwo: {
    type: String,
    label: "Highlight 2",
    optional: true
  },
  toursHighlightThree: {
    type: String,
    label: "Highlight 3",
    optional: true
  },
  toursDuration: {
    type: String,
    label: "Dauer",
    optional: true
  },
  toursDeadline: {
    type: String,
    label: "Deadline",
    optional: true
  },
  toursCategory: {
    type: String,
    label: "Kategorie",
    optional: true
  },
  toursCustom: {
    type: String,
    label: "Besonderes",
    optional: true
  },
  toursUrl: {
    type: String,
    label: "URL",
    optional: true
  },
  toursTabOneS: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  toursTabOneM: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  toursTabOneL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  toursTabOneXL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  toursTabTwoM: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  toursTabTwoL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  toursTabTwoXL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  toursTabThreeL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  toursTabThreeXL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  toursTabFourXL: {
    type: String,
    label: "Tab 4",
    optional: true
  },
  toursTextOneS: {
    type: String,
    label: "Text 1",
    optional: true
  },
  toursTextOneM: {
    type: String,
    label: "Text 1",
    optional: true
  },
  toursTextOneL: {
    type: String,
    label: "Text 1",
    optional: true
  },
  toursTextOneXL: {
    type: String,
    label: "Text 1",
    optional: true
  },  
  toursTextTwoM: {
    type: String,
    label: "Text 2",
    optional: true
  },
  toursTextTwoL: {
    type: String,
    label: "Text 2",
    optional: true
  },
  toursTextTwoXL: {
    type: String,
    label: "Text 2",
    optional: true
  },  
  toursTextThreeL: {
    type: String,
    label: "Text 3",
    optional: true
  },
  toursTextThreeXL: {
    type: String,
    label: "Text 3",
    optional: true
  },  
  toursTextFourXL: {
    type: String,
    label: "Text 4",
    optional: true
  },
  toursAddTextTabOne: {
    type: String,
    label: "Tab 1",
    optional: true  
  },
  toursAddTextTabTwo: {
    type: String,
    label: "Tab 2",
    optional: true  
  },
  toursAddTextOne: {
    type: String,
    label: "Zusatztext 1",
    optional: true 
  },
  toursAddTextTwo: {
    type: String,
    label: "Zusatztext 2",
    optional: true  
  },
  toursHeaderImg: {
    type: String,
    label: "Headerbild",
    optional: true  
  },
  toursVideoUrl: {
    type: String,
    label: "Video",
    optional: true  
  },
  toursFacebookData: {
    type: String,
    label: "Facebook",
    optional: true
  },
  toursTwitterData: {
    type: String,
    label: "Twitter",
    optional: true
  },
  toursGplusData: {
    type: String,
    label: "G+",
    optional: true
  },
  toursYoutubeData: {
    type: String,
    label: "Youtube",
    optional: true
  },    
  //Dates
  toursVisibleBegin: {
    type: Date,
    optional: true
  },
  toursVisibleEnd: {
    type: Date,
    optional: true
  },
  //Booleans
  toursIsActive: {
    type: Boolean,
    label: "Ist aktiv"  
  },
  toursHasPackageS: {
    type: Boolean,
    label: "Paket S"  
  },
  toursHasPackageM: {
    type: Boolean,
    label: "Paket S"  
  },
  toursHasPackageL: {
    type: Boolean,
    label: "Paket S"  
  },
  toursHasPackageXL: {
    type: Boolean,
    label: "Paket S"  
  }, 
  toursHasAddTextOne: {
    type: Boolean,
    label: "hat Zusatztext 1"  
  },
  toursHasAddTextTwo: {
    type: Boolean,
    label: "hat Zusatztext 2"  
  },
  toursHasHeaderImg: {
    type: Boolean,
    label: "hat Headerbild"  
  },
  toursHasGalleryS: {
    type: Boolean,
    label: "Galerie S"  
  },
  toursHasGalleryM: {
    type: Boolean,
    label: "Galerie M"  
  },
  toursHasVideo: {
    type: Boolean,
    label: "Video"  
  },
  toursHasSocialMedia: {
    type: Boolean,
    label: "Social Media"  
  },       
  toursHasHighlights: {
    type: Boolean,
    label: "Hat Highlights"  
  },       
  //Objects
  toursCountries: {
    type: [Object],
    optional: true,
  },
  'toursCountries.$.id': {
    type: String,
    optional: true
  },
  'toursCountries.$.code': {
    type: String,
    optional: true
  },
  'toursCountries.$.name': {
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
  toursNotes: {
    type: String,
    label: "Notizen",
    optional: true
  },
  toursCountImages: {
    type: String,
    label: "avDataCountImages",
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

RpTours.attachSchema(Schema.Tour);

//RpTours.initEasySearch(['customerName']);

RpTours.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});