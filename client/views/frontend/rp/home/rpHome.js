//since v0.1.1

//-- template created functions
Template.rpHome.created = function(){
};

//-- template destroyed functions
Template.rpHome.destroyed = function(){
};

//-- template rendered functions
Template.rpHome.rendered = function(){
};

//-- template helpers                            
Template.rpHome.helpers({
  getRentings: function() {
    return Rentings.find({});
  },
  getTours: function(){
    return Tours.find({},{ fields: { toursName: 1, toursSiteUrl: 1, toursDefaultImage: 1} });
  }
});

//-- template events
Template.rpHome.events({ 
});