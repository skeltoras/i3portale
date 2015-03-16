//@since v0.1.1
RpRentings = new Mongo.Collection('rpRentings');

var Schema = {};
    
Schema.Renting = new SimpleSchema({
  customerId: {
    type: String,
    label: "Kunde",
    optional: true                                                                                       
  },
  rpRentingsName: {
    type: String,
    label: "Name",
    optional: true
  },
  rpRentingsSiteUrl: {
    type: String,
    label: "URL",
    optional: true
  },
  rpRentingsDefaultImage: {
    type: String,
    label: "Default Image",
    optional: true
  },
  rpRentingsStreet: {
    type: String,
    label: "Strasse",
    optional: true
  },
  rpRentingsAdditional: {
    type: String,
    label: "Zusatz",
    optional: true
  },
  rpRentingsPlz: {
    type: String,
    label: "PLZ",
    optional: true
  },
  rpRentingsCity: {
    type: String,
    label: "Ort",
    optional: true
  },  
  rpRentingsCountries: {
    type: [Object],
    optional: true,
  },
  'rpRentingsCountries.$.id': {
    type: String,
    optional: true
  },
  'rpRentingsCountries.$.code': {
    type: String,
    optional: true
  },
  'rpRentingsCountries.$.name': {
    type: String,
    optional: true
  },
  rpRentingsRegions: {
    type: [Object],
    optional: true,
  },
  'rpRentingsRegions.$.id': {
    type: String,
    optional: true
  },
  'rpRentingsRegions.$.name': {
    type: String,
    optional: true
  },
  rpRentingsBegin: {
    type: Date,
    optional: true
  },
  rpRentingsEnd: {
    type: Date,
    optional: true
  },
  rpRentingsUrl: {
    type: String,
    label: "URL",
    optional: true
  },
  rpRentingsHasPackageS: {
    type: Boolean,
    label: "Paket S"  
  },
  rpRentingsHasPackageM: {
    type: Boolean,
    label: "Paket S"  
  },
  rpRentingsHasPackageL: {
    type: Boolean,
    label: "Paket S"  
  },
  rpRentingsHasPackageXL: {
    type: Boolean,
    label: "Paket S"  
  }, 
  rpRentingsTabOneS: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rpRentingsTabOneM: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rpRentingsTabOneL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rpRentingsTabOneXL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  rpRentingsTabTwoM: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  rpRentingsTabTwoL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  rpRentingsTabTwoXL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  rpRentingsTabThreeL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  rpRentingsTabThreeXL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  rpRentingsTabFourXL: {
    type: String,
    label: "Tab 4",
    optional: true
  },
  rpRentingsTextOneS: {
    type: String,
    label: "Text 1",
    optional: true
  },
  rpRentingsTextOneM: {
    type: String,
    label: "Text 1",
    optional: true
  },
  rpRentingsTextOneL: {
    type: String,
    label: "Text 1",
    optional: true
  },
  rpRentingsTextOneXL: {
    type: String,
    label: "Text 1",
    optional: true
  },  
  rpRentingsTextTwoM: {
    type: String,
    label: "Text 2",
    optional: true
  },
  rpRentingsTextTwoL: {
    type: String,
    label: "Text 2",
    optional: true
  },
  rpRentingsTextTwoXL: {
    type: String,
    label: "Text 2",
    optional: true
  },  
  rpRentingsTextThreeL: {
    type: String,
    label: "Text 3",
    optional: true
  },
  rpRentingsTextThreeXL: {
    type: String,
    label: "Text 3",
    optional: true
  },  
  rpRentingsTextFourXL: {
    type: String,
    label: "Text 4",
    optional: true
  },
  rpRentingsHasAddTextOne: {
    type: Boolean,
    label: "hat Zusatztext 1"  
  },
  rpRentingsHasAddTextTwo: {
    type: Boolean,
    label: "hat Zusatztext 2"  
  },
  rpRentingsAddTextTabOne: {
    type: String,
    label: "Tab 1",
    optional: true  
  },
  rpRentingsAddTextTabTwo: {
    type: String,
    label: "Tab 2",
    optional: true  
  },
  rpRentingsAddTextOne: {
    type: String,
    label: "Zusatztext 1",
    optional: true  
  },
  rpRentingsAddTextTwo: {
    type: String,
    label: "Zusatztext 2",
    optional: true  
  },
  rpRentingsHasHeaderImg: {
    type: Boolean,
    label: "hat Headerbild"  
  },
  rpRentingsHeaderImg: {
    type: String,
    label: "Headerbild",
    optional: true  
  },
  rpRentingsHasHeaderSlider: {
    type: Boolean,
    label: "hat Header-Slider"  
  },
  rpRentingsHeaderSliderOne: {
    type: String,
    label: "Slider1",
    optional: true  
  },
  rpRentingsHeaderSliderTwo: {
    type: String,
    label: "Slider2",
    optional: true  
  },
  rpRentingsHeaderSliderThree: {
    type: String,
    label: "Slider3",
    optional: true  
  },
  rpRentingsHeaderSliderFour: {
    type: String,
    label: "Slider4",
    optional: true  
  },
  rpRentingsHasGalleryS: {
    type: Boolean,
    label: "Galerie S"  
  },
  rpRentingsHasGalleryM: {
    type: Boolean,
    label: "Galerie M"  
  },
  rpRentingsHasVideo: {
    type: Boolean,
    label: "Video"  
  },
  rpRentingsVideoUrl: {
    type: String,
    label: "Video",
    optional: true  
  },  
  rpRentingsHasSocialMedia: {
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
  rpSubmitted: {
    type: Date,
    optional: true
  },
  rpUpdatedAt: {
    type: Date,
    optional: true
  }
});

RpRentings.attachSchema(Schema.Renting);

//RprpRentings.initEasySearch(['customerName']);

RpRentings.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});
