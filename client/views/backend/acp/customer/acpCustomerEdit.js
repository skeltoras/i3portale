//-- template onCreated functions
Template.acpCustomerEdit.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getCustomerSingle', Session.get('customerId'));
    self.subscribe('acp_getCustomerPendingSingle', Session.get('customerId'));
    self.subscribe('getAllAvCountries');
  });
  Session.set('editMode', false);
});

//-- template onDestroyed functions
Template.acpCustomerEdit.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpCustomerEdit.onRendered(function () {
});

//-- template helpers
Template.acpCustomerEdit.helpers({
  editMode: function() {
    return Session.get('editMode');
  },
  getData: function() {
    var checkPending = CustomersPending.find().count();
    if(checkPending > 0) {
      return CustomersPending.findOne();
    } else {
      return Customers.findOne();
    } 
  }
});

//-- template events
Template.acpCustomerEdit.events({
  'click #changeEditMode': function(e) {
    e.preventDefault();
    if(e.currentTarget.className == "btn btn-info"){
      e.currentTarget.className = 'btn btn-danger';
      e.currentTarget.innerText = 'Editiermodus ist an';
      Session.set('editMode', true);
    } else if(e.currentTarget.className == "btn btn-danger"){
      e.currentTarget.className = 'btn btn-info';
      e.currentTarget.innerText = 'Editiermodus ist aus';
      Session.set('editMode', false);
    }
  },
  'click #avIsApproved': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setAvCustomersApproved', customerId, settings, function(error, result){
      //if(error)
        //console.log(error); //debug
      //if(result)
        //console.log(result); //debug
    });
  },
  'click #avHasAV': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setAvCustomersPortalsAV', customerId, settings, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Portaleinstellung erfolgreich geändert');
    });
  },
  'click #avHasRP': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setAvCustomersPortalsRP', customerId, settings, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Portaleinstellung erfolgreich geändert');
    });
  },
  'click #avHasKG': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setAvCustomersPortalsKG', customerId, settings, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Portaleinstellung erfolgreich geändert');
    });
  },
  'submit #editCustomerData': function(e) {
    e.preventDefault();
    var customerName = $(e.target).find('[name=avCustomerName]').val();
    
    // check required field
    if(!customerName) {
      toastr.warning('Es muss mindestens ein Name eingegeben werden, um den Datensatz zu speichern!');
    } else {    
      var customerId = this._id;
      var customerData = [];
           
      var countryData = [];
      $('#countryData :selected').each(function(i, selected){
        countryData[i] = {
          avCountryOldId: $(selected).val(),
          avCountry: $(selected).text()
        };
      });
      if(_.isEmpty(countryData)){
        countryData[0] = {
          avCountryOldId: '56',
          avCountry: 'Deutschland'
        };
      }
      
      var avIsApproved = false;
      var avIsFeatured = false;
      var avHasAV = false;
      var avHasRP = false;
      var avHasKG = false;
      if($(e.target).find('[name=avIsApproved]').is(':checked')) {
        avIsApproved = true;   
      }      
      if($(e.target).find('[name=avIsFeatured]').is(':checked')) {
        avIsFeatured = true;   
      }
      if($(e.target).find('[name=avHasAV]').is(':checked')) {
        avHasAV = true;   
      }
      if($(e.target).find('[name=avHasRP]').is(':checked')) {
        avHasRP = true;   
      }
      if($(e.target).find('[name=avHasKG]').is(':checked')) {
        avHasKG = true;   
      }
      
      
      customerData = {
        // old fields
        //avIdOld: '',
        avKDNr: $(e.target).find('[name=avKDNr]').val(),
        avRandomSort: $(e.target).find('[name=avRandomSort]').val(),
        avName1Old: $(e.target).find('[name=avName1Old]').val(),
        avName2Old: $(e.target).find('[name=avName2Old]').val(),
        avRegisterNameOld: $(e.target).find('[name=avName2Old]').val(),
        avAlpha1Old: $(e.target).find('[name=avAlpha1Old]').val(),
        avAlpha2Old: $(e.target).find('[name=avAlpha2Old]').val(),
        avAlpha3Old: $(e.target).find('[name=avAlpha3Old]').val(),
        avLegalForm: $(e.target).find('[name=avLegalForm]').val(),
        avCityPartOld: $(e.target).find('[name=avCityPartOld]').val(),
        avKantonOld: $(e.target).find('[name=avKantonOld]').val(),
        avCountryOldId: countryData[0].avCountryOldId,
        avQuestionToCustomerOld: $(e.target).find('[name=avQuestionToCustomerOld]').val(),
        avAnswerFromCustomerOld: $(e.target).find('[name=avAnswerFromCustomerOld]').val(),
        //avbMultiplikatorOld: '',
        //avbProbeaboOld: '',
        //avbInteresseAnzeigenOld: '',
        //avbInteressePrintausgabeOld: '',
        //avbKeinBelegexemplarOld: '',
        avmNotizenOld: $(e.target).find('[name=avmNotizenOld]').val(),
        avbProbeaboOld: $(e.target).find('[name=avbProbeaboOld]').val(),
        avShortinfo2Old: $(e.target).find('[name=avShortinfo2Old]').val(),
        avSelfinfoOld: $(e.target).find('[name=avSelfinfoOld]').val(),
        avCountEmployeesOld: $(e.target).find('[name=avCountEmployees]').val(),      
        // official fields
        //avId: '',
        avCustomerName: $(e.target).find('[name=avCustomerName]').val(),
        avDepartment: $(e.target).find('[name=avDepartment]').val(),
        avPostAddition: $(e.target).find('[name=avPostAddition]').val(),
        avStreet: $(e.target).find('[name=avStreet]').val(),
        avPlz: $(e.target).find('[name=avPlz]').val(),
        avCity: $(e.target).find('[name=avCity]').val(),     
        avCountry: countryData[0].avCountry, 
        avTelephoneFormal: $(e.target).find('[name=avTelephoneFormal]').val(),
        avTelefax: $(e.target).find('[name=avTelefax]').val(),
        avMailFormal: $(e.target).find('[name=avMailFormal]').val(),
        avUrl: $(e.target).find('[name=avUrl]').val(),
        avShortinfo: $(e.target).find('[name=avShortinfo]').val(),
        // inofficial fields
        avRegion: $(e.target).find('[name=avRegion]').val(),
        avTelephoneInternal: $(e.target).find('[name=avTelephoneInternal]').val(),
        avMobil: $(e.target).find('[name=avMobil]').val(),
        avMailInternal: $(e.target).find('[name=avMailInternal]').val(),
        avMailNewsletter: $(e.target).find('[name=avMailNewsletter]').val(),
        avMailContact: $(e.target).find('[name=avMailContact]').val(),
        avContactPerson: $(e.target).find('[name=avContactPerson]').val(),
        avSiteUrl: $(e.target).find('[name=avSiteUrl]').val(),
        avNotes: $(e.target).find('[name=avNotes]').val(),
        //avIsApproved: avIsApproved,
        //avIsFeatured: avIsFeatured,
        //avHasAV: avHasAV,
        //avHasRP: avHasRP,
        //avHasKG: avHasKG,
        //avPortalsCheck: [],
        //avAddressChapters: [],
        //avAssociations: [],
        //avBlockIndicators: [],
        //avCampaigns: [],
        //avEducations: [],
        //avChanges: [],
        avUpdatedAt: new Date().getTime()
      }
      
      //console.log(customerData);
      Meteor.call('updateAvCustomers', customerId, customerData, function(error, result){
        if(error)
          toastr.warning(error);
        if(result)
          toastr.success('Kunde ' + customerName + ' erfolgreich geändert');
      });
    }
  } 
});