//-- template onCreated functions
Template.acpCustomersSelect.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_getSelectionAvChapters'); 
    self.subscribe('acp_getSelectedCustomers');
    self.subscribe('acp_countCustomersSelection');
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
    chapterDesc = 'Keine Kategorie';
    return chapterDesc;
  }
});

//-- template events
Template.acpCustomersSelect.events({
  'submit form': function(e) {
    e.preventDefault();
    var chapterData = [];
    
    $('#chapterData :selected').each(function(i, selected){
      chapterData[i] = {
        chapterId: $(selected).val(),
        chapterName: $(selected).text()
      };
    });
    //console.log(chapterData);
    Meteor.call('setCustomerSelection', chapterData, function(error, result){
        if(error)
          toastr.warning('Selektion konnte nicht erstellt werden');
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