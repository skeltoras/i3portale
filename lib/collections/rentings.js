//@since v0.1.1
Rentings = new Mongo.Collection('rentings');

var Schema = {};
    
Schema.Renting = new SimpleSchema({
  customerId: {
    type: String,
    label: "Kunde",
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
  rentingsDefaultImage: {
    type: String,
    label: "Default Image",
    optional: true
  },
  rentingsStreet: {
    type: String,
    label: "Strasse",
    optional: true
  },
  rentingsAdditional: {
    type: String,
    label: "Zusatz",
    optional: true
  },
  rentingsPlz: {
    type: String,
    label: "PLZ",
    optional: true
  },
  rentingsCity: {
    type: String,
    label: "Ort",
    optional: true
  },  
  rentingsCountries: {
    type: [Object],
    optional: true,
  },
  'rentingsCountries.$.code': {
    type: String,
    optional: true
  },
  'rentingsCountries.$.name': {
    type: String,
    optional: true
  },
  rentingsRegions: {
    type: [Object],
    optional: true,
  },
  'rentingsRegions.$.id': {
    type: String,
    optional: true
  },
  'rentingsRegions.$.name': {
    type: String,
    optional: true
  },
  rentingsBegin: {
    type: Date,
    optional: true
  },
  rentingsEnd: {
    type: Date,
    optional: true
  },
  rentingsUrl: {
    type: String,
    label: "URL",
    optional: true
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
  rentingsHasAddTextOne: {
    type: Boolean,
    label: "hat Zusatztext 1"  
  },
  rentingsHasAddTextTwo: {
    type: Boolean,
    label: "hat Zusatztext 2"  
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
  rentingsHasHeaderImg: {
    type: Boolean,
    label: "hat Headerbild"  
  },
  rentingsHeaderImg: {
    type: String,
    label: "Headerbild",
    optional: true  
  },
  rentingsHasHeaderSlider: {
    type: Boolean,
    label: "hat Header-Slider"  
  },
  rentingsHeaderSliderOne: {
    type: String,
    label: "Slider1",
    optional: true  
  },
  rentingsHeaderSliderTwo: {
    type: String,
    label: "Slider2",
    optional: true  
  },
  rentingsHeaderSliderThree: {
    type: String,
    label: "Slider3",
    optional: true  
  },
  rentingsHeaderSliderFour: {
    type: String,
    label: "Slider4",
    optional: true  
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
  rentingsVideoUrl: {
    type: String,
    label: "Video",
    optional: true  
  },  
  rentingsHasSocialMedia: {
    type: Boolean,
    label: "Social Media"  
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

Rentings.attachSchema(Schema.Renting);

Rentings.initEasySearch(['customerName']);

Rentings.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});
