// --- Home ---//

Meteor.publish('rp_getAllCountries', function() {
  Countries.update({}, {$set: {countryHasRP: false}});
  var dataRN = RpRentings.find().fetch();
  dataRN.forEach(function(rent){
    var rnCountries = rent.rentingsCountries;
    rnCountries.forEach(function(country){
      var countryId = Number(country.id);
      Countries.update({countryId: countryId}, {$set: {countryHasRP: true}});
    });
  });
  var dataTR = RpTours.find().fetch();
  dataTR.forEach(function(tour){
    var trCountries = tour.toursCountries;
    trCountries.forEach(function(country){
      var countryId = Number(country.id);
      Countries.update({countryId: countryId}, {$set: {countryHasRP: true}});
    });
  });
  return Countries.find({countryHasRP: true});
});

// --- single Country ---//

Meteor.publish('rp_getSingleCountry', function(countryNo) {
  countryNo = Number(countryNo);
  return Countries.find({countryId: countryNo});
});

Meteor.publish('rp_getCountryRentings', function(countryNo) {
  return RpRentings.find({'rentingsCountries.id': countryNo});
});

Meteor.publish('rp_getCountryTours', function(countryNo) {
  return RpTours.find({'toursCountries.id': countryNo});
});