avBlockIndicators = new Mongo.Collection('avblockindicators');

var Schema = {};

Schema.BlockIndicator = new SimpleSchema({
  blocksOldId: {
    type: String,
    label: "blocksOldId",
    optional: true  
  },
  blocksShort: {
    type: String,
    label: "blocksShort",
    optional: true  
  },
  blocksName: {
    type: String,
    label: "blocksName",
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

avBlockIndicators.attachSchema(Schema.BlockIndicator);

avBlockIndicators.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});