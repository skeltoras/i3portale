//@since v0.1.1
AvBlockIndicators = new Mongo.Collection('avBlockIndicators');

var Schema = {};

Schema.BlockIndicator = new SimpleSchema({
  blocksId: {
    type: String,
    label: "blocksId",
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

AvBlockIndicators.attachSchema(Schema.BlockIndicator);

AvBlockIndicators.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});