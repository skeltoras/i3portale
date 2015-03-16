Meteor.methods({
  addRentings: function(rentingsData) {
    RpRentings.insert(rentingsData);
  }
})