//-- template onCreated functions
Template.acpCustomersList.onCreated(function () {
});

//-- template onDestroyed functions
Template.acpCustomersList.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpCustomersList.onRendered(function () {
  EasySearch
    .getComponentInstance({ index: 'searchCustomers' })
    .search(Session.get('acpCustomersSearch'))
  ;
  EasySearch
    .getComponentInstance({ index: 'searchCustomersPending' })
    .search(Session.get('acpCustomersSearch'))
  ;  
});

//-- template helpers                            
Template.acpCustomersList.helpers({
  indexes: function(){
    return indexes = ['searchCustomers', 'searchCustomersPending'];
  },
  getSessionSearch: function(){
    return Session.get('acpCustomersSearch');
  }
});

//-- template events
Template.acpCustomersList.events({
  'keyup #acpCustomersSearch': function(e) {
    Session.set('acpCustomersSearch', e.currentTarget.value);
    var indexes = ['searchCustomers', 'searchCustomersPending'];
    EasySearch
      .getComponentInstance({ index: 'searchCustomers' })
      .search(Session.get('acpCustomersSearch'))
    ;
    EasySearch
      .getComponentInstance({ index: 'searchCustomersPending' })
      .search(Session.get('acpCustomersSearch'))
    ;  
  },
  'click #resetSearch': function(e) {
    e.preventDefault();
    Session.set('acpCustomersSearch', '');
    EasySearch
      .getComponentInstance({ index: 'searchCustomers' })
      .clear()
    ;
    EasySearch
      .getComponentInstance({ index: 'searchCustomersPending' })
      .clear()
    ;
  }
});

//-- template custom vars
//Template.acpCustomersList.indexes = ['customers', 'customersPending'];