//since v0.1.1

//-- template created functions
Template.avChapters.created = function(){
};

//-- template destroyed functions
Template.avChapters.destroyed = function(){
};

//-- template rendered functions
Template.avChapters.rendered = function(){
};

//-- template helpers                            
Template.avChapters.helpers({
  getCustomer: function() {
    Meteor.subscribe('getChaptersAvCustomers', this.chapterIndex);
    return AvCustomers.find({});
  },
  getChapterName: function() {
    Meteor.subscribe('getAvChaptersName', this.chapterIndex);
    var test = AvChapters.findOne({});
    console.log(test);
    return test;
  }
});

//-- template events
Template.avChapters.events({ 
});