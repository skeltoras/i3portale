//-- template onCreated functions
Template.acpCustomerMultiEdit.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getSelectedCustomers');
    self.subscribe('acp_countCustomersSelection');
    self.subscribe('acp_getAllCountries');
    self.subscribe('acp_customersSettings');
//    self.subscribe('debug_allCustomers'); //debug
//    self.subscribe('debug_allCustomersPending'); //debug
//    self.subscribe('debug_allCustomersArchive'); //debug
//    self.subscribe('debug_allCustomersDetail'); //debug
//    self.subscribe('debug_allAvData'); //debug
  });
});

//-- template onDestroyed functions
Template.acpCustomerMultiEdit.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpCustomerMultiEdit.onRendered(function () {
});

//-- template helpers
Template.acpCustomerMultiEdit.helpers({
  getChapter: function(){
    if(Settings.findOne({chapterNameSelektion: {$exists: true}})){
      return Settings.findOne({chapterNameSelektion: {$exists: true}}).chapterNameSelektion;
    }
  }
});

//-- template events
Template.acpCustomerMultiEdit.events({ 
  'submit form': function(e){
    e.preventDefault();    
    var customerName = $(e.target).find('[name=customerName]').val();
    
    // check required field
    if(!customerName) {
      toastr.warning('Es muss mindestens ein Name eingegeben werden, um den Datensatz zu speichern!');
    } else {
      var customerId = $(e.target).find('[name=customerId]').val();
      var customerData = [];
      var countryData = [];
      $('#countryData :selected').each(function(i, selected){
        countryData[i] = {
          countryId: $(selected).val(),
          countryName: $(selected).text()
        };
      });
      if(_.isEmpty(countryData)){
        countryData[0] = {
          countryId: '56',
          countryName: 'Deutschland'
        };
      }
      
      customerData = {
        //customerId: $(e.target).find('[name=customerName]').val(),
        customerName: customerName,
        customerLongName: $(e.target).find('[name=customerLongName]').val(),
        customerDepartment: $(e.target).find('[name=customerDepartment]').val(),
        customerPostAddition: $(e.target).find('[name=customerPostAddition]').val(),
        customerStreet: $(e.target).find('[name=customerStreet]').val(),
        customerPlz: $(e.target).find('[name=customerPlz]').val(),
        customerCity: $(e.target).find('[name=customerCity]').val(),
        customerCountry: countryData[0].countryName,
        customerTelephoneFormal: $(e.target).find('[name=customerTelephoneFormal]').val(),
        customerTelefax: $(e.target).find('[name=customerTelefax]').val(),
        customerMailFormal: $(e.target).find('[name=customerMailFormal]').val(),
        customerUrl: $(e.target).find('[name=customerUrl]').val(),
        customerInfo: $(e.target).find('[name=customerInfo]').val(),
        customerSiteUrl: $(e.target).find('[name=customerSiteUrl]').val(),        
        customerContact: $(e.target).find('[name=customerContact]').val(),
        customerTelephoneInternal: $(e.target).find('[name=customerTelephoneInternal]').val(),
        customerMobil: $(e.target).find('[name=customerMobil]').val(),
        customerMailInternal: $(e.target).find('[name=customerMailInternal]').val(),       
        customerNotes: $(e.target).find('[name=customerNotes]').val(),
        customerIsApproved: true,
        customerHasAv: true,
        customerHasRP: false,
        customerHasKG: false,
        customerChanges: [{date: new Date().getTime(), content: 'Kunde aktualisiert und freigegeben', user: Meteor.user().profile.nickname}],
        customerApproved: new Date().getTime(),
        customerUpdatedAt: new Date().getTime()
      }
      Meteor.call('approveCustomer', customerId, customerData, function(error, result){
        if(error)
          toastr.error('Kunde ' + customerName + ' konnte nicht aktualisiert werden.');
        if(result)
          toastr.success('Kunde ' + customerName + ' wurde aktualisiert und freigegeben.');
      });
    }
  },
  'click #delete': function(e) {
    e.preventDefault();
  },
  'click #deleteOK': function(e) {
    e.preventDefault();
    $('#deleteModal').modal('toggle');
    customerId = this._id;
    Meteor.call('archiveCustomer', customerId, function(error, result){
      if(error)
        toastr.error('Datensatz konnte nicht gelöscht werden.');
      if(result)
        toastr.success('Datensatz erfolgreich gelöscht.');
    });  
  },
  'click #deleteAbort': function(e) {
    e.preventDefault();
    $('#deleteModal').modal('toggle');
  }
});