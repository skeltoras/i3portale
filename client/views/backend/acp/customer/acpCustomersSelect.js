//-- template onCreated functions
Template.acpCustomersSelect.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getAllCustomersChapters'); 
    self.subscribe('acp_getSelectedCustomers');
    self.subscribe('acp_countCustomersSelection');
    self.subscribe('acp_customersSettings');
  });
});

//-- template onDestroyed functions
Template.acpCustomersSelect.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpCustomersSelect.onRendered(function () {
});

//-- template helpers                            
Template.acpCustomersSelect.helpers({
  getChapter: function(){
    if(Settings.findOne({chapterNameSelektion: {$exists: true}})){
      return Settings.findOne({chapterNameSelektion: {$exists: true}}).chapterNameSelektion;
    }
  }
});

//-- template events
Template.acpCustomersSelect.events({
  'submit form': function(e) {
    e.preventDefault();
    var chapterData = [];
    
    var chapter = $(e.target).find('[name=chapterData] :selected').text();
    console.log(chapter);
    Meteor.call('setCustomerSelection', chapter, function(error, result){
      if(error)
        toastr.warning('Selektion konnte nicht erstellt werden: ' + error.reason);
      if(result)
        toastr.success('Selektion wurde erstellt');
    });  
  },
  'reset form': function(e) {
    e.preventDefault();
    Meteor.call('resetCustomerSelection', function(error, result){
        if(error)
          toastr.warning('Selektion konnte nicht gelöscht werden');
        if(result)
          toastr.success('Selektion wurde gelöscht');
    }); 
  }
});