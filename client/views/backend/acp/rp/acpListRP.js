//-- template onCreated functions
Template.acpListRP.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getAllApprovedRPCustomers');     
  });
});

//-- template onDestroyed functions
Template.acpListRP.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpListRP.onRendered(function () {
  EasySearch
    .getComponentInstance({ index: 'searchTours' })
    .search(Session.get('acpRPSearch'))
  ;
  EasySearch
    .getComponentInstance({ index: 'searchRentings' })
    .search(Session.get('acpRPSearch'))
  ;  
});

//-- template helpers                            
Template.acpListRP.helpers({
  getList: function() {
    return Customers.find().fetch();
  },
  getSessionSearch: function(){
    return Session.get('acpRPSearch');
  }
});

//-- template events
Template.acpListRP.events({ 
  'keyup #acpRPSearch': function(e) {
    Session.set('acpRPSearch', e.currentTarget.value);
    EasySearch
      .getComponentInstance({ index: 'searchTours' })
      .search(Session.get('acpRPSearch'))
    ;  
    EasySearch
      .getComponentInstance({ index: 'searchRentings' })
      .search(Session.get('acpRPSearch'))
    ;  
  },
  'click #resetSearch': function(e) {
    e.preventDefault();
    Session.set('acpRPSearch', '');
    EasySearch
      .getComponentInstance({ index: 'searchTours' })
      .clear()
    ;
    EasySearch
      .getComponentInstance({ index: 'searchRentings' })
      .clear()
    ;
  },
  'click #newRpTours': function(e){
    e.preventDefault();
    $('#modalNewRpTours').modal('toggle');
    $('#customerTours').select2();
  },
  'click #newRpRentings': function(e){
    e.preventDefault();
    $('#modalNewRpRentings').modal('toggle');
    $('#customerRentings').select2();
  },  
  'submit #createTours': function(e){
    e.preventDefault();
    var customerId = $(e.target).find('[name=customerTours]').val(); 
    $('#modalNewRpTours')
      .on('hidden.bs.modal', function() {
        Router.go('acp.rp.tours.edit', {customerId: customerId, _id: Random.id()});
      })
      .modal('hide');
  },
  'submit #createRentings': function(e){
    e.preventDefault();
    var customerId = $(e.target).find('[name=customerRentings]').val(); 
    $('#modalNewRpRentings')
      .on('hidden.bs.modal', function() {
        Router.go('acp.rp.rent.edit', {customerId: customerId, _id: Random.id()});
      })
      .modal('hide');
  }
});