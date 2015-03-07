Meteor.methods({
  newCustomer: function(customer) {
    var newCustomerId = Customers.insert(customer);
    return newCustomerId;
  },
  updateCustomer: function(customerId, customer) {
    Customers.update(customerId, {$set: customer});
  }
})