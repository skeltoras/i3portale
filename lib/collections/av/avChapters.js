//@since v0.1.1
AvChapters = new Mongo.Collection('avChapters');

var Schema = {};

Schema.Chapter = new SimpleSchema({
  chapterOldId: {
    type: String,
    label: "ChapterOldId",
    optional: true  
  },
  chapterNo: {
    type: String,
    label: "chapterNo",
    optional: true  
  },
  chapterIndex: {
    type: String,
    label: "chapterIndex",
    optional: true  
  },
  sections: {
    type: [Object],
    optional: true,
  },
  'sections.$.id': {
    type: String,
    optional: true
  },
  'sections.$.name': {
    type: String,
    optional: true
  },
  chapterShort: {
    type: String,
    label: "chapterShort",
    optional: true  
  },
  chapterName: {
    type: String,
    label: "chapterName",
    optional: true  
  },
  chapterShortName: {
    type: String,
    label: "chapterShortName",
    optional: true  
  },
  chapterDescription: {
    type: String,
    label: "chapterDescription",
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

AvChapters.attachSchema(Schema.Chapter);

AvChapters.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});