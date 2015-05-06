//-- template onCreated functions
Template.acpCustomerNew.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getAllCountries');
  });
  Meteor.call('setNewNo', function(error, result){ 
    Session.set('customerId', result); 
  });
});

//-- template onDestroyed functions
Template.acpCustomerNew.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpCustomerNew.onRendered(function () {
});


//-- template helpers
Template.acpCustomerNew.helpers({
  getCustomerId: function(){
    return Session.get('customerId');
  }
});

//-- template events
Template.acpCustomerNew.events({  
  'submit form': function(e) {
    e.preventDefault();
    var customerName = $(e.target).find('[name=customerName]').val();
    
    // check required field
    if(!customerName) {
      toastr.warning('Es muss mindestens ein Name eingegeben werden, um den Datensatz zu speichern!');
    } else {
      var customerData = [];
      var customerId = $(e.target).find('[name=customerId]').val();  
      var customerSiteUrl = customerName.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();      
      customerSiteUrl = customerSiteUrl.toLowerCase();
      var customerIsApproved = false;
      var customerApproved = ''; 
      var customerHasAv = false;
      var customerHasRP = false;
      var customerHasKG = false;
      if($(e.target).find('[name=customerIsApproved]').is(':checked')) {
        customerIsApproved = true; 
        customerApproved = new Date().getTime();  
      }      
      if($(e.target).find('[name=customerHasAv]').is(':checked')) {
        customerHasAv = true;   
      }
      if($(e.target).find('[name=customerHasRP]').is(':checked')) {
        customerHasRP = true;   
      }
      if($(e.target).find('[name=customerHasKG]').is(':checked')) {
        customerHasKG = true;   
      }
      customerData = {
        customerId: customerId,
        customerIdNumber: Number(customerId),
        customerName: customerName,
        customerLongName: $(e.target).find('[name=customerLongName]').val(),
        customerDepartment: $(e.target).find('[name=customerDepartment]').val(),
        customerPostAddition: $(e.target).find('[name=customerPostAddition]').val(),
        customerStreet: $(e.target).find('[name=customerStreet]').val(),
        customerPlz: $(e.target).find('[name=customerPlz]').val(),
        customerCity: $(e.target).find('[name=customerCity]').val(),
        customerCountry: $(e.target).find('[name=countryData]').val(),
        customerTelephoneFormal: $(e.target).find('[name=customerTelephoneFormal]').val(),
        customerTelefax: $(e.target).find('[name=customerTelefax]').val(),
        customerMailFormal: $(e.target).find('[name=customerMailFormal]').val(),
        customerUrl: $(e.target).find('[name=customerUrl]').val(),
        customerInfo: $(e.target).find('[name=customerInfo]').val(),
        customerContact: $(e.target).find('[name=customerContact]').val(),
        customerTelephoneInternal: $(e.target).find('[name=customerTelephoneInternal]').val(),
        customerMobil: $(e.target).find('[name=customerMobil]').val(),
        customerMailInternal: $(e.target).find('[name=customerMailInternal]').val(),
        customerNotes: $(e.target).find('[name=customerNotes]').val(),
        customerSiteUrl: customerSiteUrl,
        customerIsApproved: customerIsApproved,
        customerHasAv: customerHasAv,
        customerHasRP: customerHasRP,
        customerHasKG: customerHasKG,
        customerChanges: [{date: new Date().getTime(), content: 'Kunde angelegt', user: Meteor.user().profile.nickname}],
        customerSubmitted: new Date().getTime(), 
        customerApproved: customerApproved,
        customerUpdatedAt: new Date().getTime()
      }
      //console.log(customerData); //DEBUG
      Meteor.call('newCustomer', customerData, function(error, result){
        if(error)
          toastr.error('Fehler: ' + error);
        if(result)
          toastr.success('Kunde ' + customerName + ' erfolgreich angelegt');
          Router.go('acp.home');
      });
    }
  } 
});