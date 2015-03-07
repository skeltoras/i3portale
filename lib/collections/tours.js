//@since v0.1.1
Tours = new Mongo.Collection('tours');

var Schema = {};

Schema.Tour = new SimpleSchema({
  customerId: {
    type: String,
    label: "Kunde",
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
  toursDefaultImage: {
    type: String,
    label: "Default Image",
    optional: true
  },
  toursCountries: {
    type: [Object],
    optional: true,
  },
  'toursCountries.$.code': {
    type: String,
    optional: true
  },
  'toursCountries.$.name': {
    type: String,
    optional: true
  },
  toursRegions: {
    type: [Object],
    optional: true,
  },
  'toursRegions.$.id': {
    type: String,
    optional: true
  },
  'toursRegions.$.name': {
    type: String,
    optional: true
  },
  toursBegin: {
    type: Date,
    optional: true
  },
  toursEnd: {
    type: Date,
    optional: true
  },
  toursUrl: {
    type: String,
    label: "URL",
    optional: true
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
  toursHasAddTextOne: {
    type: Boolean,
    label: "hat Zusatztext 1"  
  },
  toursHasAddTextTwo: {
    type: Boolean,
    label: "hat Zusatztext 2"  
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
  toursHasHeaderImg: {
    type: Boolean,
    label: "hat Headerbild"  
  },
  toursHeaderImg: {
    type: String,
    label: "Headerbild",
    optional: true  
  },
  toursHasHeaderSlider: {
    type: Boolean,
    label: "hat Header-Slider"  
  },
  toursHeaderSliderOne: {
    type: String,
    label: "Slider1",
    optional: true  
  },
  toursHeaderSliderTwo: {
    type: String,
    label: "Slider2",
    optional: true  
  },
  toursHeaderSliderThree: {
    type: String,
    label: "Slider3",
    optional: true  
  },
  toursHeaderSliderFour: {
    type: String,
    label: "Slider4",
    optional: true  
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
  toursVideoUrl: {
    type: String,
    label: "Video",
    optional: true  
  },  
  toursHasSocialMedia: {
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

Tours.attachSchema(Schema.Tour);

Tours.initEasySearch(['customerName']);

Tours.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});
