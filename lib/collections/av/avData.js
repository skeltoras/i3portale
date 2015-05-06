//@since v1.1.3
AvData = new Mongo.Collection('avData');

var Schema = {};
    
Schema.AvData = new SimpleSchema({
  customerId: {
    type: String,
    label: "Kunde",
    optional: true                                                                                       
  },
  avDataDefaultImage: {
    type: String,
    label: "Default Image",
    optional: true
  },
  avDataSiteUrl: {
    type: String,
    label: "URL",
    optional: true
  },
  avDataIsActive: {
    type: Boolean,
    label: "Ist aktiv"  
  },
  avDataHasPackageS: {
    type: Boolean,
    label: "Paket S"  
  },
  avDataHasPackageM: {
    type: Boolean,
    label: "Paket S"  
  },
  avDataHasPackageL: {
    type: Boolean,
    label: "Paket S"  
  },
  avDataHasPackageXL: {
    type: Boolean,
    label: "Paket S"  
  }, 
  avDataHasAddTextOne: {
    type: Boolean,
    label: "hat Zusatztext 1"  
  },
  avDataHasAddTextTwo: {
    type: Boolean,
    label: "hat Zusatztext 2"  
  },
  avDataHasWebsite: {
    type: Boolean,
    label: "hat Website"  
  },
  avDataHasHeaderImg: {
    type: Boolean,
    label: "hat Headerbild"  
  },
  avDataHasGalleryS: {
    type: Boolean,
    label: "Galerie S"  
  },
  avDataHasGalleryM: {
    type: Boolean,
    label: "Galerie M"  
  },
  avDataHasVideo: {
    type: Boolean,
    label: "Video"  
  },
  avDataHasSocialMedia: {
    type: Boolean,
    label: "Social Media"  
  },
  avDataTabOneS: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  avDataTabOneM: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  avDataTabOneL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  avDataTabOneXL: {
    type: String,
    label: "Tab 1",
    optional: true
  },
  avDataTabTwoM: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  avDataTabTwoL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  avDataTabTwoXL: {
    type: String,
    label: "Tab 2",
    optional: true
  },
  avDataTabThreeL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  avDataTabThreeXL: {
    type: String,
    label: "Tab 3",
    optional: true
  },
  avDataTabFourXL: {
    type: String,
    label: "Tab 4",
    optional: true
  },
  avDataTextOneS: {
    type: String,
    label: "Text 1",
    optional: true
  },
  avDataTextOneM: {
    type: String,
    label: "Text 1",
    optional: true
  },
  avDataTextOneL: {
    type: String,
    label: "Text 1",
    optional: true
  },
  avDataTextOneXL: {
    type: String,
    label: "Text 1",
    optional: true
  },  
  avDataTextTwoM: {
    type: String,
    label: "Text 2",
    optional: true
  },
  avDataTextTwoL: {
    type: String,
    label: "Text 2",
    optional: true
  },
  avDataTextTwoXL: {
    type: String,
    label: "Text 2",
    optional: true
  },  
  avDataTextThreeL: {
    type: String,
    label: "Text 3",
    optional: true
  },
  avDataTextThreeXL: {
    type: String,
    label: "Text 3",
    optional: true
  },  
  avDataTextFourXL: {
    type: String,
    label: "Text 4",
    optional: true
  },
  avDataAddTextTabOne: {
    type: String,
    label: "Tab 1",
    optional: true  
  },
  avDataAddTextTabTwo: {
    type: String,
    label: "Tab 2",
    optional: true  
  },
  avDataAddTextOne: {
    type: String,
    label: "Zusatztext 1",
    optional: true  
  },
  avDataAddTextTwo: {
    type: String,
    label: "Zusatztext 2",
    optional: true  
  },
  avDataUrl: {
    type: String,
    label: "Website",
    optional: true  
  },  
  avDataHeaderImg: {
    type: String,
    label: "Headerbild",
    optional: true  
  },
  avDataVideoUrl: {
    type: String,
    label: "Video",
    optional: true  
  },  
  avDataFacebookData: {
    type: String,
    label: "Facebook",
    optional: true
  },
  avDataTwitterData: {
    type: String,
    label: "Twitter",
    optional: true
  },
  avDataGplusData: {
    type: String,
    label: "G+",
    optional: true
  },
  avDataYoutubeData: {
    type: String,
    label: "Youtube",
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
  avDataNotes: {
    type: String,
    label: "Notizen",
    optional: true
  },
  avDataCountImages: {
    type: String,
    label: "avDataCountImages",
    optional: true
  },
  avDataSubmitted: {
    type: Date,
    optional: true
  },
  avDataUpdatedAt: {
    type: Date,
    optional: true
  }
});

AvData.attachSchema(Schema.AvData);

//RpavData.initEasySearch(['customerName']);

AvData.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});
