Meteor.methods({
// --- ACP new customer --- //
  setNewNo: function() {
    //increment customerId for new customers to unique human reading IDs
    var result = incrementCounter('counters', 'customerId', 1);
    return result;
  },
  newCustomer: function(customerData) {
    //check if new customer is approved or not
    if(customerData.customerIsApproved == true){
      var id = Customers.insert(customerData);
    } else {
      var id = CustomersPending.insert(customerData);
    }
    //set customerData
    var customersDetail = [];
    customersDetail = {
      _id: id,
      customerId: customerData.customerId,
      bLehrstellen: false,
      bPraktikum: false,
      bFreiwilligendienste: false,
      bMultiplikator: false,
      bProbeabo: false,
      bInteresseAnzeigen: false,
      bInteressePrintausgabe: false,
      bKeinBelegexemplar: false,
      changes: [{date: new Date().getTime(), content: 'Kundendaten angelegt', user: Meteor.user().profile.nickname}],
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()  
    }
    CustomersDetail.insert(customersDetail);
    //set avData
    if(customerData.customerHasAv == true){
      var AvDetails = [];
      AvDetails = {
        _id: id,
        customerId: customerData.customerId,
        avDataSiteUrl: customerData.customerSiteUrl,
        avDataIsActive: true,
        avDataHasPackageS: false,
        avDataHasPackageM: false,
        avDataHasPackageL: false,
        avDataHasPackageXL: false,
        avDataHasAddTextOne: false,
        avDataHasAddTextTwo: false,
        avDataHasWebsite: false,
        avDataHasHeaderImg: false,
        avDataHasGalleryS: false,
        avDataHasGalleryM: false,
        avDataHasVideo: false,
        avDataHasSocialMedia: false,
        changes: [{date: new Date().getTime(), content: 'Kunde in AV importiert', user: Meteor.user().profile.nickname}],
        avDataSubmitted: new Date().getTime(),
        avDataUpdatedAt: new Date().getTime()  
      }
      AvData.insert(AvDetails);
    }
    return true;
  },
// --- ACP edit customer --- //
  setCustomersApproved: function(customerId, settings) {
    //check if true or not
    if(settings == true){
      //set changes
      CustomersPending.update(customerId, {$set: {customerIsApproved: true}});
      //get data
      var customerData = CustomersPending.findOne({_id: customerId})
      //set data
      if(Customers.find({_id: customerId}).count()==0){
        Customers.insert(customerData);
      } else {
        Customers.update(customerData);
      }
      //check and set avData
      if(customerData.customerHasAv == true){
        if(AvData.find({_id: customerId}).count()>0){
          AvData.update(customerId, {$set: {avDataIsActive: true}});
        }     
      }
      //delete pending record
      CustomersPending.remove({_id: customerId});  
    } else {
      //set changes
      Customers.update(customerId, {$set: {customerIsApproved: false}});
      //get data
      var customerData = Customers.findOne({_id: customerId})
      //set data
      if(CustomersPending.find({_id: customerId}).count()==0){
        CustomersPending.insert(customerData);
      } else {
        CustomersPending.update(customerData);
      }
      //check and set avData
      if(AvData.find({_id: customerId}).count()>0){
        AvData.update(customerId, {$set: {avDataIsActive: false}});
      }
      //delete approved record
      Customers.remove({_id: customerId});  
    }
    return true;
  },
  setCustomersPortalsAV: function(customerId, settings) {
    if(settings == true){
      if(Customers.find({_id: customerId}).count() > 0) {
        Customers.update(customerId, {$set: {customerHasAv: true}});
        var data = Customers.findOne({_id: customerId});
      } else if(CustomersPending.find({_id: customerId}).count() > 0) {
        CustomersPending.update(customerId, {$set: {customerHasAv: true}});
        var data = CustomersPending.findOne({_id: customerId});      
      }
      if(AvData.find({_id: customerId}).count() == 0) {
        var avData = [];
        avData = {
          _id: customerId,
          customerId: data.customerId,
          avDataSiteUrl: data.customerSiteUrl,
          avDataIsActive: true,
          avDataHasPackageS: false,
          avDataHasPackageM: false,
          avDataHasPackageL: false,
          avDataHasPackageXL: false,
          avDataHasAddTextOne: false,
          avDataHasAddTextTwo: false,
          avDataHasWebsite: false,
          avDataHasHeaderImg: false,
          avDataHasGalleryS: false,
          avDataHasGalleryM: false,
          avDataHasVideo: false,
          avDataHasSocialMedia: false,
          changes: [{date: new Date().getTime(), content: 'Kunde in AV importiert', user: Meteor.user().profile.nickname}],
          avDataSubmitted: new Date().getTime(),
          avDataUpdatedAt: new Date().getTime()  
        }
        AvData.insert(avData);
      } else {
        AvData.update(customerId, {$set: {avDataUpdatedAt: new Date().getTime()}, $addToSet: {changes: {date: new Date().getTime(), content: 'AV-Daten aktualisiert', user: Meteor.user().profile.nickname}}});
      }
    } else {
      if(Customers.find({_id: customerId}).count() > 0) {
        Customers.update(customerId, {$set: {customerHasAv: false}});
      } else if(CustomersPending.find({_id: customerId}).count() > 0) {
        CustomersPending.update(customerId, {$set: {customerHasAv: false}});
      }
    }
    return true;
  },
  setCustomersPortalsRP: function(customerId, settings) {
    if(settings == true){
      if(Customers.find({_id: customerId}).count() > 0) {
        Customers.update(customerId, {$set: {customerHasRP: true}});
      } else if(CustomersPending.find({_id: customerId}).count() > 0) {
        CustomersPending.update(customerId, {$set: {customerHasRP: true}});
      }
    } else {
      if(Customers.find({_id: customerId}).count() > 0) {
        Customers.update(customerId, {$set: {customerHasRP: false}});
      } else if(CustomersPending.find({_id: customerId}).count() > 0) {
        CustomersPending.update(customerId, {$set: {customerHasRP: false}});
      }
    }
    return true;
  },
  setCustomersPortalsKG: function(customerId, settings) {
    if(settings == true){
      if(Customers.find({_id: customerId}).count() > 0) {
        Customers.update(customerId, {$set: {customerHasKG: true}});
      } else if(CustomersPending.find({_id: customerId}).count() > 0) {
        CustomersPending.update(customerId, {$set: {customerHasKG: true}});
      }
    } else {
      if(Customers.find({_id: customerId}).count() > 0) {
        Customers.update(customerId, {$set: {customerHasKG: false}});
      } else if(CustomersPending.find({_id: customerId}).count() > 0) {
        CustomersPending.update(customerId, {$set: {customerHasKG: false}});
      }
    }
    return true;
  },
  updateCustomer: function(customerId, customerData) {
    //check if updated customer is approved or not
    if(Customers.find({_id: customerId}).count()>0) {
      var id = Customers.update(customerId, {$set: customerData});      
    } else {
      var id = CustomersPending.update(customerId, {$set: customerData});      
    }
    return id;
  },
// --- TODO --- //
  setCustomerSelection: function(chapter) {
    var settingsData = [];
    settingsData = {
      chapterNameSelektion: chapter
    }
    var getCustomerIds = CustomersDetail.find({'addressChapters.name': chapter});
    getCustomerIds.forEach(function(customer){
      var customerData = CustomersPending.findOne({customerId: customer.customerId});
      customerData = _.extend(customerData, customer) 
      CustomersSelection.insert(customerData);
    });
    Settings.insert(settingsData);
    if(CustomersSelection.find().count() > 0){
      return true;
    }
  },
  resetCustomerSelection: function() {
    CustomersSelection.remove({});
    Settings.remove({});
    if(CustomersSelection.find().count() == 0){
      return true;
    }
  },
  archiveCustomer: function(selectionId) {
    selectionId = selectionId;
    var getInfo = CustomersSelection.findOne({_id: selectionId}); 
    var customerId = getInfo.customerId;
    
    if(Customers.findOne({customerId: customerId})) {
      var data = Customers.findOne({customerId: customerId});     
    } else if(CustomersPending.findOne({customerId: customerId})) {
      var data = CustomersPending.findOne({customerId: customerId});      
    }
    CustomersArchive.insert(data);
    CustomersSelection.remove({customerId: customerId});
    Customers.remove({customerId: customerId}); 
    CustomersPending.remove({customerId: customerId});
    
    if(CustomersArchive.find({customerId: customerId}).count()>0) {
      return true;
    }
  },
  approveCustomer: function(customerId, customerData) {
    //check if customer or customerPending
    if(Customers.findOne({customerId: customerId})){
      Customers.update({customerId: customerId}, {$set: customerData});
      var locks = CustomersDetail.findOne({customerId: customerId}).locks; 
      var check = false;
      if(locks){
        locks.forEach(function(lock){
          for(var shortname in lock) {
            if(lock.hasOwnProperty(shortname)) {
              if(lock[shortname] === "S") {
                check = true;
              }
              if(lock[shortname] === "I") {
                check = true;
              }
              if(lock[shortname] === "Z") {
                check = true;
              }
              if(lock[shortname] === "V") {
                check = true;
              }
              if(lock[shortname] === "X") {
                check = true;
              }
            }
          }
        });
      }     
      if(check == false){
        var avData = [];
        avData = {
          customerId: customerId,
          avDataSiteUrl: data.customerSiteUrl,
          avDataHasPackageS: false,
          avDataHasPackageM: false,
          avDataHasPackageL: false,
          avDataHasPackageXL: false,
          avDataHasAddTextOne: false,
          avDataHasAddTextTwo: false,
          avDataHasWebsite: false,
          avDataHasHeaderImg: false,
          avDataHasGalleryS: false,
          avDataHasGalleryM: false,
          avDataHasVideo: false,
          avDataHasSocialMedia: false,
          changes: [{date: new Date().getTime(), content: 'Kunde in AV importiert', user: Meteor.user().profile.nickname}],
          avDataSubmitted: new Date().getTime(),
          avDataUpdatedAt: new Date().getTime()
        };          
        AvData.insert(avData);
      }
      CustomersSelection.remove({customerId: customerId});
    } else if(CustomersPending.findOne({customerId: customerId})) {
      CustomersPending.update({customerId: customerId}, {$set: customerData});
      var data = CustomersPending.findOne({customerId: customerId});
      var locks = CustomersDetail.findOne({customerId: customerId}).locks;
      var check = false;
      if(locks){
        locks.forEach(function(lock){
          for(var shortname in lock) {
            if(lock.hasOwnProperty(shortname)) {
              if(lock[shortname] === "S") {
                check = true;
              }
              if(lock[shortname] === "I") {
                check = true;
              }
              if(lock[shortname] === "Z") {
                check = true;
              }
              if(lock[shortname] === "V") {
                check = true;
              }
              if(lock[shortname] === "X") {
                check = true;
              }
            }
          }
        });
      }     
      if(check == false){
        var avData = [];
        avData = {
          customerId: customerId,
          avDataSiteUrl: data.customerSiteUrl,
          avDataHasPackageS: false,
          avDataHasPackageM: false,
          avDataHasPackageL: false,
          avDataHasPackageXL: false,
          avDataHasAddTextOne: false,
          avDataHasAddTextTwo: false,
          avDataHasWebsite: false,
          avDataHasHeaderImg: false,
          avDataHasGalleryS: false,
          avDataHasGalleryM: false,
          avDataHasVideo: false,
          avDataHasSocialMedia: false,
          changes: [{date: new Date().getTime(), content: 'Kunde in AV importiert', user: Meteor.user().profile.nickname}],
          avDataSubmitted: new Date().getTime(),
          avDataUpdatedAt: new Date().getTime()
        };          
        AvData.insert(avData);
      }
      Customers.insert(data);       
      CustomersPending.remove({customerId: customerId});
      CustomersSelection.remove({customerId: customerId}); 
    }  
    if(Customers.findOne({customerId: customerId})){
      return true;
    }
  }
})