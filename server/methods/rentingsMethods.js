Meteor.methods({
  newRenting: function(renting) {
    var newRentingId = Rentings.insert(renting);
    return newCustomerId;
  },
  updateRenting: function(customerId, renting) {
    Rentings.update({customerId: customerId}, {$set: renting});
  }
})