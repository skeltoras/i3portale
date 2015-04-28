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
  'submit #uplAvCustomers': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvCustomers]').files;
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
          //if(error)
          //  console.log(error);
          //if(result)
          //  console.log(result);
        });
      }
    }
  },
  'submit #uplAvCountries': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvCountries]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
        Meteor.call('uploadCountries', data[i], function(error, result){
          //if(error)
          //  console.log(error);
          //if(result)
          //  console.log(result);
        });
      }
    }
  },
  'submit #uplAvChapters': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvChapters]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvChapters', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  }, 
  'submit #uplAvChaptersSections': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvChaptersSections]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvChaptersSections', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvAssociations': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvAssociations]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvAssociations', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvBlockIndicators': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvBlockIndicators]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvBlockIndicators', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvCustomersLog': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvCustomersLog]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvCustomersLog', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvCampaigns': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvCampaigns]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvCampaigns', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvEducations': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvEducations]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvEducations', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvChaptersAssign': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvChaptersAssign]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvChaptersAssign', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvAssociationsAssign': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvAssociationsAssign]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvAssociationsAssign', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvBlockIndicatorsAssign': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvBlockIndicatorsAssign]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvBlockIndicatorsAssign', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvCampaignsAssign': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvCampaignsAssign]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvCampaignsAssign', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uplAvEducationsAssign': function(e, tpl){
    e.preventDefault();    
    var input = tpl.find('input[name=fileUplAvEducationsAssign]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {
        Meteor.call('uplAvEducationsAssign', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  }
});