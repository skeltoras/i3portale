Meteor.methods({
  setCustomerSelection: function(chapterData) {
    var chapterName = chapterData[0].chapterName;
    var getCustomerIds = CustomersDetail.find({'avAddressChapters.name': chapterName});
    getCustomerIds.forEach(function(customer){
      var customerData = CustomersPending.findOne({customerId: customer.customerId});
      customerData = _.extend(customerData, customer) 
      CustomersSelection.insert(customerData);
    });
    if(CustomersSelection.find().count() > 0){
      return true;
    }
  },
  resetCustomerSelection: function() {
    CustomersSelection.remove({});
    if(CustomersSelection.find().count() == 0){
      return true;
    }
  }
})