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
  getAvCustomerCount: function() {
    return AvCustomers.find().count();
  },
  getCountriesCount: function(){
    return Countries.find().count();
  },
  getAdressChaptersCount: function() {
    return AddressChapters.find().count();
  },
  getAvAssociationsCount: function() {
    return AvAssociations.find().count();  
  },
  getAvBlockIndicatorsCount: function() {
    return avBlockIndicators.find().count();  
  }
});

//-- template events
Template.acpUploads.events({
  'submit #uploadAvCustomers': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAvCustomers]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
        Meteor.call('uploadAVData', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
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
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadCountriesData', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uploadAdressChapters': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAdressChapters]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadChaptersData', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uploadAdressSections': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAdressSections]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadChaptersSections', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uploadAdressChaptersIds': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAdressChaptersIds]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadChaptersIds', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uploadAvAssociations': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAvAssociations]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadAvAssociations', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uploadAvAssociationsIds': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAvAssociationsIds]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadAvAssociationsIds', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uploadAvBlockIndicators': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAvBlockIndicators]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadAvBlockIndicators', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  },
  'submit #uploadAvBlockIndicatorsIds': function(e, tpl){
    e.preventDefault();
    
    var input = tpl.find('input[name=fileUploadAvBlockIndicatorsIds]').files;
    var file = input[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e){
      var csv = e.target.result;
      var data = $.csv.toObjects(csv);
      for (var i = 0; i < data.length; ++i) {  
      //for (var i = 0; i < 10; ++i) {  
        //console.log(data[i]);
        Meteor.call('uploadAvBlockIndicatorsIds', data[i], function(error, result){
          if(error)
            console.log(error);
          if(result)
            console.log(result);
        });
      }
    }
  } 
});