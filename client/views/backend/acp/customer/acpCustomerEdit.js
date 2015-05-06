//-- template onCreated functions
Template.acpCustomerEdit.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getCustomerSingle', Session.get('customerId'));
    self.subscribe('acp_getCustomerPendingSingle', Session.get('customerId'));
    self.subscribe('acp_getCustomerDetailSingle', Session.get('customerId'));
    self.subscribe('acp_getAllCountries');
  });
  Session.set('editMode', false);
  Session.set('detailMode', false);
  $('.detailModeContainer').hide();
  $('.editModeContainer').show();    
});

//-- template onDestroyed functions
Template.acpCustomerEdit.onDestroyed(function () {
  $('.detailModeContainer').hide();
});

//-- template onRendered functions
Template.acpCustomerEdit.onRendered(function () {
  $('.detailModeContainer').fadeOut(100);
});

//-- template helpers
Template.acpCustomerEdit.helpers({
  editMode: function() {
    return Session.get('editMode');
  },
  detailMode: function() {
    return Session.get('detailMode');
  },
  getCustomer: function() {
    var checkPending = CustomersPending.find().count();
    if(checkPending > 0) {
      return CustomersPending.findOne();
    } else {
      return Customers.findOne();
    } 
  },
  getCustomerDetails: function() {
    return CustomersDetail.findOne();
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
  'click #changeDetailMode': function(e, tpl) {
    e.preventDefault();
    if(e.currentTarget.className == "btn btn-default pull-right out"){
      e.currentTarget.className = 'btn btn-default pull-right in';
      e.currentTarget.innerText = 'Detailmodus ist an';
      $('.editModeContainer')
        .fadeOut(400)
        .animate({"left":"-155px"}, "slow")  
        .animate({"left":"-165px"}, "slow");
        //.delay(5000)
        //.fadeOut(1000);       
      $('.detailModeContainer')
        .delay(400)
        .fadeIn(400)
        .animate({"left":"-155px"}, "slow")  
        .animate({"left":"-165px"}, "slow");
      Session.set('detailMode', true);
    } else if(e.currentTarget.className == "btn btn-default pull-right in"){
      e.currentTarget.className = 'btn btn-default pull-right out';
      e.currentTarget.innerText = 'Detailmodus ist aus';
      $('.detailModeContainer')
        .fadeOut(400)
        .animate({"left":"-155px"}, "slow")  
        .animate({"left":"-165px"}, "slow");
        //.delay(5000)
        //.fadeOut(1000);       
      $('.editModeContainer')
        .delay(400)
        .fadeIn(400)
        .animate({"left":"-155px"}, "slow")  
        .animate({"left":"-165px"}, "slow");
      Session.set('detailMode', false);
    }
  },
  'click #customerIsApproved': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setCustomersApproved', customerId, settings, function(error, result){
      if(error)
        toastr.error('Einstellung konnte nicht geändert werden');
      if(result)
        toastr.success('Einstellung erfolgreich geändert');
    });
  },
  'click #customerHasAv': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setCustomersPortalsAV', customerId, settings, function(error, result){
      if(error)
        toastr.error('Einstellung konnte nicht geändert werden');
      if(result)
        toastr.success('Einstellung erfolgreich geändert');
    });
  },
  'click #customerHasRP': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setCustomersPortalsRP', customerId, settings, function(error, result){
      if(error)
        toastr.error('Einstellung konnte nicht geändert werden');
      if(result)
        toastr.success('Einstellung erfolgreich geändert');
    });
  },
  'click #customerHasKG': function(e) {
    //e.preventDefault();
    var settings = false;
    var customerId = this._id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setCustomersPortalsKG', customerId, settings, function(error, result){
      if(error)
        toastr.error('Einstellung konnte nicht geändert werden');
      if(result)
        toastr.success('Einstellung erfolgreich geändert');
    });
  },
  'submit #editCustomerData': function(e) {
    e.preventDefault();
    var customerName = $(e.target).find('[name=customerName]').val();
    
    // check required field
    if(!customerName) {
      toastr.warning('Es muss mindestens ein Name eingegeben werden, um den Datensatz zu speichern!');
    } else {
      var customerData = [];
      var id = this._id;
      customerData = {
        customerName: customerName,
        customerLongName: $(e.target).find('[name=customerLongName]').val(),
        customerDepartment: $(e.target).find('[name=customerDepartment]').val(),
        customerPostAddition: $(e.target).find('[name=customerPostAddition]').val(),
        customerStreet: $(e.target).find('[name=customerStreet]').val(),
        customerPlz: $(e.target).find('[name=customerPlz]').val(),
        customerCity: $(e.target).find('[name=customerCity]').val(),
        customerCountry: $(e.target).find('[name=countryData] :selected').text(),
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
        customerChanges: [{date: new Date().getTime(), content: 'Kunde aktualisiert', user: Meteor.user().profile.nickname}],
        customerUpdatedAt: new Date().getTime()
      }
      Meteor.call('updateCustomer', id, customerData, function(error, result){
        if(error)
          toastr.error('Fehler: ' + error);
        if(result)
          toastr.success('Kunde ' + customerName + ' erfolgreich geändert');
          //Router.go('acp.home');
      });
    }
  } 
});