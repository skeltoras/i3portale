//since v0.1.1

//-- template created functions
Template.acpUploads.created = function(){
};

//-- template destroyed functions
Template.acpUploads.destroyed = function(){
};

//-- template rendered functions
Template.acpUploads.rendered = function(){
};

//-- template helpers                            
Template.acpUploads.helpers({
  uplAvCustomersCount: function() {
    Meteor.subscribe('uplAvCustomersCount');
    return AvCustomers.find().count();
  },
  uplAvCountriesCount: function() {
    Meteor.subscribe('uplAvCountriesCount');
    return AvCountries.find().count();
  },
  uplAvChaptersCount: function() {
    Meteor.subscribe('uplAvChaptersCount');
    return AvChapters.find().count();
  },
  uplAvAssociationsCount: function() {
    Meteor.subscribe('uplAvAssociationsCount');
    return AvAssociations.find().count();
  },
  uplAvBlockIndicatorsCount: function() {
    Meteor.subscribe('uplAvBlockIndicatorsCount');
    return AvBlockIndicators.find().count();
  },
  uplAvCampaignsCount: function() {
    Meteor.subscribe('uplAvCampaignsCount');
    return AvCampaigns.find().count();
  },
  uplAvEducationsCount: function() {
    Meteor.subscribe('uplAvEducationsCount');
    return AvEducations.find().count();
  }
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
      for (var i = 0; i < data.length; ++i) {  
        Meteor.call('uplAvCustomers', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
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
        Meteor.call('uplAvCountries', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
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