Meteor.methods({
  setAvCustomersApproved: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avIsApproved: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avIsApproved: false}});
    }
  },
  setAvCustomersFeatured: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avIsFeatured: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avIsFeatured: false}});
    }
  },
  updateAvCustomers:  function(customerId, customerData) {
    return AvCustomers.update(customerId, {$set: customerData});
  },
  addAvCustomersBlockIndicators: function(avCustomersId, addData) {
    return AvCustomers.update(avCustomersId, {$addToSet: {avBlockIndicators: addData}});    
  },
  removeAvCustomersBlockIndicators: function(avCustomersId, removeData) {
    return AvCustomers.update(avCustomersId, {$pull: {avBlockIndicators: removeData}});    
  }
})