//-- template onCreated functions
Template.acpUploads.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('uploadCounts');   
  });
});

//-- template onDestroyed functions
Template.acpUploads.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpUploads.onRendered(function () {
});

//-- template helpers                            
Template.acpUploads.helpers({
});

//-- template events
Template.acpUploads.events({
  'submit #uploadNewCustomers': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUploadNewCustomers]').files;
    var file = input[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      //for (var i = 0; i < 1000; ++i) {
      for (var i = 0; i < data.length; ++i) {  
        Meteor.call('uploadNewCustomers', data[i], function(error, result){
        });
      }
    }
  },
  'submit #uploadCountries': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUploadCountries]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
        Meteor.call('uploadCountries', data[i], function(error, result){
        });
      }
    }
  },
  'submit #uploadCustomersChapters': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUploadCustomersChapters]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uploadCustomersChapters', data[i], function(error, result){
        });
      }
    }
  }, 
  'submit #uploadChaptersSections': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUploadChaptersSections]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uploadChaptersSections', data[i], function(error, result){
        });
      }
    }
  },
  'submit #uploadCustomersLock': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUploadCustomersLock]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uploadCustomersLock', data[i], function(error, result){
        });
      }
    }
  },
  'submit #uploadCustomersChaptersAssign': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUploadCustomersChaptersAssign]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uploadCustomersChaptersAssign', data[i], function(error, result){
        });
      }
    }
  },
  'submit #uploadCustomersLockAssign': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUploadCustomersLockAssign]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uploadCustomersLockAssign', data[i], function(error, result){
        });
      }
    }
  }
});