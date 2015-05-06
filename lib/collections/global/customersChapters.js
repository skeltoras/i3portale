CustomersChapters = new Mongo.Collection('customersChapters');

var Schema = {};

Schema.Chapter = new SimpleSchema({
  chapterId: {
    type: String,
    label: "chapterId",
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
  chapterSection: {
    type: String,
    label: "chapterSection",
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

CustomersChapters.attachSchema(Schema.Chapter);

CustomersChapters.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});