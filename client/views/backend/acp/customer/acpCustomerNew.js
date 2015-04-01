//-- template onCreated functions
Template.acpCustomerNew.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getLastInsertedCustomer');
    self.subscribe('getAllAvCountries');
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
});

//-- template events
Template.acpCustomerNew.events({ 
  'submit #addCustomerData': function(e) {
    e.preventDefault();
    var customerData = [];
    var customerName = $(e.target).find('[name=avCustomerName]').val();
    
    //Meteor.subscribe('getLastInsertedCustomer');
    var getLastNo = AvCustomers.findOne();
    getLastNo = Number(getLastNo.avIdOld);
    var setNo = getLastNo + 1;
    var avRandomSort = _.random(100000, 999999);
    var avSiteUrl = customerName.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();
    avSiteUrl = avSiteUrl.toLowerCase();
    
    customerData = {
      // old fields
      avIdOld: '',
      avKDNr: $(e.target).find('[name=avKDNr]').val(),
      avRandomSort: avRandomSort,
      avName1Old: $(e.target).find('[name=avName1Old]').val(),
      avName2Old: $(e.target).find('[name=avName2Old]').val(),
      //avRegisterNameOld: '',
      //avAlpha1Old: '',
      //avAlpha2Old: '',
      //avAlpha3Old: '',
      avLegalForm: $(e.target).find('[name=avLegalForm]').val(),
      //avCityPartOld: '',
      //avKantonOld: '',
      //avCountryOldId: '',
      //avQuestionToCustomerOld: '',
      //avAnswerFromCustomerOld: '',
      //avbMultiplikatorOld: '',
      //avbProbeaboOld: '',
      //avbInteresseAnzeigenOld: '',
      //avbInteressePrintausgabeOld: '',
      //avbKeinBelegexemplarOld: '',
      //avmNotizenOld: '',
      //avShortinfo2Old: '',
      //avbProbeaboOld: '',
      avShortinfo2Old: $(e.target).find('[name=avShortinfo2Old]').val(),
      avSelfinfoOld: $(e.target).find('[name=avSelfinfoOld]').val(),
      avCountEmployeesOld: $(e.target).find('[name=avCountEmployees]').val(),      
      // official fields
      avId: setNo,
      avCustomerName: $(e.target).find('[name=avCustomerName]').val(),
      avDepartment: $(e.target).find('[name=avDepartment]').val(),
      avPostAddition: $(e.target).find('[name=avPostAddition]').val(),
      avStreet: $(e.target).find('[name=avStreet]').val(),
      avPlz: $(e.target).find('[name=avPlz]').val(),
      avCity: $(e.target).find('[name=avCity]').val(),     
      avCountry: $(e.target).find('[name=avCountry]').val(), 
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
      avSiteUrl: avSiteUrl,
      avNotes: $(e.target).find('[name=avNotes]').val(),
      avIsApproved: false,
      avIsFeatured: false,
      //avPortalsCheck: [],
      //avAddressChapters: [],
      //avAssociations: [],
      //avBlockIndicators: [],
      //avCampaigns: [],
      //avEducations: [],
      //avChanges: [],
      avSubmitted: new Date().getTime(),
      avUpdatedAt: new Date().getTime()
    }
    
    console.log(customerData); //debug
    /*
    Meteor.call('insertAvCustomers', customerData, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Kunde ' + customerName + ' erfolgreich angelegt');
    });
    */
  } 
});