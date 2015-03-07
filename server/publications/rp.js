Meteor.publish('rphomerentings', function() {
  return Rentings.find({},{ fields: { rentingsName: 1, rentingsRegions: 1, rentingsSiteUrl: 1, rentingsDefaultImage: 1} });
});

Meteor.publish('rphometours', function() {
  return Tours.find({},{ fields: { toursName: 1, toursSiteUrl: 1, toursDefaultImage: 1} });
});
