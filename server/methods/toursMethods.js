Meteor.methods({
  newTour: function(renting) {
    var newTourId = Tours.insert(tour);
    return newTourId;
  },
  updateTour: function(customerId, tour) {
    Tours.update({customerId: customerId}, {$set: tour});
  }
})