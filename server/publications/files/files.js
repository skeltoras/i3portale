Meteor.publish('avImages', function(){ return avImages.find(); });
Meteor.publish('rpImages', function(){ return rpImages.find(); });
Meteor.publish('globalImages', function(){ return globalImages.find(); });