//@since v0.1.1
AvCampaigns = new Mongo.Collection('avCampaigns');

var Schema = {};

Schema.Campaign = new SimpleSchema({
  campaignOldId: {
    type: String,
    label: "campaignOldId",
    optional: true  
  },
  campaignName: {
    type: String,
    label: "campaignName",
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

AvCampaigns.attachSchema(Schema.Campaign);

AvCampaigns.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});