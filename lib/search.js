// --- ACP Customer Search --- //
/* NOT ACTICE ATM
EasySearch.createSearchIndex('searchCustomers', {
  'collection' : [Customers, CustomersPending],
  'fields' : ['customerId', 'customerName', 'customerContact'],
  'use': 'mongo-db',
  'limit' : 15
});
*/

EasySearch.createSearchIndex('searchCustomers', {
  'collection': Customers,
  'field': ['customerIdNumber', 'customerName', 'customerContact'],
  'returnFields': ['customerId', 'customerName'],
  'use': 'mongo-db',
  'convertNumbers': true,
  'limit': 15,
  'sort': function() {
    return { 'customerId': 1 };
  },
  'query': function(searchString, opts) {
    // Default query that will be used for the mongo-db selector
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    //console.log(opts); //DEBUG
    return query;
  }
});

EasySearch.createSearchIndex('searchCustomersPending', {
  'collection': CustomersPending,
  'field': ['customerIdNumber', 'customerName', 'customerContact'],
  'returnFields': ['customerId', 'customerName'],
  'use': 'mongo-db',
  'convertNumbers': true,
  'limit': 15,
  'sort': function() {
    return { 'customerId': 1 };
  },
  'query': function(searchString, opts) {
    // Default query that will be used for the mongo-db selector
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    //console.log(opts); //DEBUG
    return query;
  }
});

EasySearch.createSearchIndex('searchTours', {
  'collection': RpTours,
  'field': ['customerNo', 'toursNo', 'toursName'],
  //'returnFields': ['customerId', 'customerName'],
  'use': 'mongo-db',
  'convertNumbers': true,
  'limit': 15,
  'sort': function() {
    return { 'customerId': 1 };
  },
  'query': function(searchString, opts) {
    // Default query that will be used for the mongo-db selector
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    //console.log(opts); //DEBUG
    return query;
  }
});

EasySearch.createSearchIndex('searchRentings', {
  'collection': RpRentings,
  'field': ['customerNo', 'rentingsNo', 'rentingsName'],
  //'returnFields': ['customerId', 'customerName'],
  'use': 'mongo-db',
  'convertNumbers': true,
  'limit': 15,
  'sort': function() {
    return { 'customerId': 1 };
  },
  'query': function(searchString, opts) {
    // Default query that will be used for the mongo-db selector
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    //console.log(opts); //DEBUG
    return query;
  }
});