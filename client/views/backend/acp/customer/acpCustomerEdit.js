//-- template created functions
Template.acpCustomerEdit.created = function(){ 
  Session.set('editMode', false);
};

//-- template destroyed functions
Template.acpCustomerEdit.destroyed = function(){
};

//-- template rendered functions
Template.acpCustomerEdit.rendered = function(){
};

//-- template helpers
Template.acpCustomerEdit.helpers({
  editMode: function() {
    return Session.get('editMode');
  }
});

//-- template events
Template.acpCustomerEdit.events({
  'click #changeEditMode': function(e) {
    e.preventDefault();
    if(e.currentTarget.className == "btn btn-danger"){
      e.currentTarget.className = 'btn btn-info';
      e.currentTarget.innerText = 'Editiermodus ist an';
      Session.set('editMode', true);
    } else if(e.currentTarget.className == "btn btn-info"){
      e.currentTarget.className = 'btn btn-danger';
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
      if(error)
        console.log(error);
      if(result)
        console.log(result);
    });
  },
  'click #avIsFeatured': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setAvCustomersFeatured', customerId, settings, function(error, result){
      if(error)
        console.log(error);
      if(result)
        console.log(result);
    });
  },
  'submit #editCustomerData': function(e) {
    e.preventDefault();
    var customerId = this._id;
    var customerData = [];
    var customerName = $(e.target).find('[name=avCustomerName]').val();
    
    customerData = {
      // official fields
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
      avFacebookData: $(e.target).find('[name=avFacebookData]').val(),
      avTwitterData: $(e.target).find('[name=avTwitterData]').val(),
      avGplusData: $(e.target).find('[name=avGplusData]').val(),
      avYoutubeData: $(e.target).find('[name=avYoutubeData]').val(),
      // inofficial fields
      avKDNr: $(e.target).find('[name=avKDNr]').val(),
      avSiteUrl: $(e.target).find('[name=avSiteUrl]').val(),
      avName1Old: $(e.target).find('[name=avName1Old]').val(),
      avName2Old: $(e.target).find('[name=avName2Old]').val(),
      avLegalForm: $(e.target).find('[name=avLegalForm]').val(),
      avRegion: $(e.target).find('[name=avRegion]').val(),
      avTelephoneInternal: $(e.target).find('[name=avTelephoneInternal]').val(),
      avMobil: $(e.target).find('[name=avMobil]').val(),
      avContactPerson: $(e.target).find('[name=avContactPerson]').val(),
      avMailInternal: $(e.target).find('[name=avMailInternal]').val(),
      avMailNewsletter: $(e.target).find('[name=avMailNewsletter]').val(),
      avMailContact: $(e.target).find('[name=avMailContact]').val(),
      avCountEmployees: $(e.target).find('[name=avCountEmployees]').val(),
      avShortinfo2: $(e.target).find('[name=avShortinfo2]').val(),
      avSelfinfoOld: $(e.target).find('[name=avSelfinfoOld]').val(),
      avNotes: $(e.target).find('[name=avNotes]').val(),
      avUpdatedAt: new Date().getTime()
    }
    
    Meteor.call('updateAvCustomers', customerId, customerData, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Kunde ' + customerName + ' erfolgreich geändert');
    });
  } 
});