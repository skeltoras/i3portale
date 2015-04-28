CustomersSelection = new Mongo.Collection('customersSelection');

/*
var Schema = {};

Schema.Customer = new SimpleSchema({
  customerId: {
    type: String,
    label: "KundenNr",
    optional: true  
  }
});

CustomersSelection.attachSchema(Schema.Customer);
*/

Pages = new Meteor.Pagination(CustomersSelection, {
  perPage: 1,
  sort: {
    customerId: 1
  },
  //routerTemplate: 'acpCustomerMultiEdit',
  templateName: 'acpCustomerMultiEditSelection',
  itemTemplate: 'acpCustomerMultiEditEdit',
  //pageTemplate: 'noticesPage',
  //router: 'iron-router',
  //route: '/acp/kd/medit/'  
});

CustomersSelection.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});