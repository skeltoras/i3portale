//@since v0.1.1
RpRegions = new Mongo.Collection('rpRegions');

var Schema = {};

Schema.Region = new SimpleSchema({
  regionName: {
    type: String,
    label: "regionName",
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

RpRegions.attachSchema(Schema.Region);

RpRegions.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});