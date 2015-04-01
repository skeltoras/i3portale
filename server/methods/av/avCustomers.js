Meteor.methods({
  setAvCustomersApproved: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avIsApproved: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avIsApproved: false}});
    }
  },
  setAvCustomersPortalsAV: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avHasAV: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avHasAV: false}});
    }
  },
  setAvCustomersPortalsRP: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avHasRP: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avHasRP: false}});
    }
  },
  setAvCustomersPortalsKG: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avHasKG: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avHasKG: false}});
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