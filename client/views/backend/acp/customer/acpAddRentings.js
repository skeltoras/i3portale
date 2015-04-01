//-- template created functions
Template.acpAddRentings.created = function(){
  Session.set('rpRentingsHasPackageS', false);
  Session.set('rpRentingsHasPackageM', false);
  Session.set('rpRentingsHasPackageL', false);
  Session.set('rpRentingsHasPackageXL', false);
  Session.set('rpRentingsHasAddTextOne', false);
  Session.set('rpRentingsHasAddTextTwo', false);
  Session.set('rpRentingsHasHeaderImg', false);
  Session.set('rpRentingsHasHeaderSlider', false);
  Session.set('rpRentingsHasGalleryS', false);
  Session.set('rpRentingsHasGalleryM', false);
  Session.set('rpRentingsHasVideo', false);
  Session.set('rpRentingsHasSocialMedia', false);
};

//-- template destroyed functions
Template.acpAddRentings.destroyed = function(){
};

//-- template rendered functions
Template.acpAddRentings.rendered = function(){
  $('#countryData').select2();
  $('#regionData').select2();
  $('#regionNewData').select2({
    tags : true,
    tokenSeparators : [',']
  });
  $('.summernote').summernote();
  //Dropzone.autoDiscover = false;
  //var dropzone = new Dropzone('.dropzone');
};

//-- template helpers
Template.acpAddRentings.helpers({
  rpRentingsHasPackageS: function() {
    return Session.get('rpRentingsHasPackageS');
  },
  rpRentingsHasPackageM: function() {
    return Session.get('rpRentingsHasPackageM'); 
  },
  rpRentingsHasPackageL: function() {
    return Session.get('rpRentingsHasPackageL'); 
  },
  rpRentingsHasPackageXL: function() {
    return Session.get('rpRentingsHasPackageXL'); 
  },
  rpRentingsHasAddTextOne: function() {
    return Session.get('rpRentingsHasAddTextOne'); 
  },
  rpRentingsHasAddTextTwo: function() {
    return Session.get('rpRentingsHasAddTextTwo'); 
  },
  rpRentingsHasHeaderImg: function() {
    return Session.get('rpRentingsHasHeaderImg'); 
  },
  rpRentingsHasHeaderSlider: function() {
    return Session.get('rpRentingsHasHeaderSlider'); 
  },
  rpRentingsHasGalleryS: function() {
    return Session.get('rpRentingsHasGalleryS'); 
  },
  rpRentingsHasGalleryM: function() {
    return Session.get('rpRentingsHasGalleryM'); 
  },
  rpRentingsHasVideo: function() {
    return Session.get('rpRentingsHasVideo'); 
  },
  rpRentingsHasSocialMedia: function() {
    return Session.get('rpRentingsHasSocialMedia'); 
  }
});

//-- template events
Template.acpAddRentings.events({
  'change #rpRentingsHasPackageS': function(e) {
    e.preventDefault();    
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasPackageS', true);
      Session.set('rpRentingsHasPackageM', false);
      Session.set('rpRentingsHasPackageL', false);
      Session.set('rpRentingsHasPackageXL', false);     
    } else {
      Session.set('rpRentingsHasPackageS', false);
    }
    template.tplReload.set(template.tplReload.get() + 1);
  },
  'change #rpRentingsHasPackageM': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasPackageS', false);
      Session.set('rpRentingsHasPackageM', true);
      Session.set('rpRentingsHasPackageL', false);
      Session.set('rpRentingsHasPackageXL', false);
    } else {
      Session.set('rpRentingsHasPackageM', false);
    }
  },
  'change #rpRentingsHasPackageL': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasPackageS', false);
      Session.set('rpRentingsHasPackageM', false);
      Session.set('rpRentingsHasPackageL', true);
      Session.set('rpRentingsHasPackageXL', false);
    } else {
      Session.set('rpRentingsHasPackageL', false);
    }
  },
  'change #rpRentingsHasPackageXL': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasPackageS', false);
      Session.set('rpRentingsHasPackageM', false);
      Session.set('rpRentingsHasPackageL', false);
      Session.set('rpRentingsHasPackageXL', true);
    } else {
      Session.set('rpRentingsHasPackageXL', false);
    }
  },
  'change #rpRentingsHasAddTextOne': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasAddTextOne', true);
    } else {
      Session.set('rpRentingsHasAddTextOne', false);
    }
  },
  'change #rpRentingsHasAddTextTwo': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasAddTextTwo', true);
    } else {
      Session.set('rpRentingsHasAddTextTwo', false);
    }
  },
  'change #rpRentingsHasHeaderImg': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasHeaderImg', true);
      Session.set('rpRentingsHasHeaderSlider', false);
    } else {
      Session.set('rpRentingsHasHeaderImg', false);
    }
  },
  'change #rpRentingsHasHeaderSlider': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasHeaderSlider', true);
      Session.set('rpRentingsHasHeaderImg', false);
    } else {
      Session.set('rpRentingsHasHeaderSlider', false);
    }
  },
  'change #rpRentingsHasGalleryS': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasGalleryS', true);
      Session.set('rpRentingsHasGalleryM', false);
    } else {
      Session.set('rpRentingsHasGalleryS', false);
    }
  },
  'change #rpRentingsHasGalleryM': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasGalleryM', true);
      Session.set('rpRentingsHasGalleryS', false);
    } else {
      Session.set('rpRentingsHasGalleryM', false);
    }
  },
  'change #rpRentingsHasVideo': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasVideo', true);
    } else {
      Session.set('rpRentingsHasVideo', false);
    }
  },
  'change #rpRentingsHasSocialMedia': function(e) {
    if(e.currentTarget.checked == true) {
      Session.set('rpRentingsHasSocialMedia', true);
    } else {
      Session.set('rpRentingsHasSocialMedia', false);
    }
  },
  /** file upload **/
  /*
  'change #rpRentingsHeaderImg': function(e, tpl) {
    FS.Utility.eachFile(e, function(file) {
      rpHeaderImages.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
  */
  'submit #addRentings': function(e) {
    e.preventDefault();
    var customerId = this.customerId;
    var rentingsData = [];
    
    // get select data
    var regionData = [];
    var countryData = [];    
    
    $('#regionData :selected').each(function(i, selected){
      regionData[i] = {
        id: $(selected).val(),
        name: $(selected).text()
      };
    });    
    
    if($(e.target).find('[name=regionNewData]').val()) {
      var data = $(e.target).find('[name=regionNewData]').val();
      data = data.split(',');
      var cnt = regionData.length - 1;
      data.forEach(function(region){
        ++cnt;
        var regionNewData = [];
        regionNewData = {
          regionName: region,
          submitted: new Date().getTime(),
          updatedAt: new Date().getTime()
        };
        Meteor.call('addRegion', regionNewData, function(error, result){
          if(error)
            toastr.warning('Region ' + region + ' schon vorhanden');
          if(result)
            toastr.success('Region ' + region + ' erfolgreich hinzugefügt');
            regionId = result;
            regionData[cnt] = {
              id: regionId,
              name: region
            };
        });           
      });  
    }

    $('#countryData :selected').each(function(i, selected){
      countryData[i] = {
        id: $(selected).val(),
        name: $(selected).text()
      };
    });
    
    // get checkbox data
    var rpRentingsHasPackageS = false;
    var rpRentingsHasPackageM = false;
    var rpRentingsHasPackageL = false;
    var rpRentingsHasPackageXL = false;
    var rpRentingsHasAddTextOne = false;
    var rpRentingsHasAddTextTwo = false;
    var rpRentingsHasHeaderImg = false;
    var rpRentingsHasHeaderSlider = false;
    var rpRentingsHasGalleryS = false;
    var rpRentingsHasGalleryM = false;
    var rpRentingsHasVideo = false;
    var rpRentingsHasSocialMedia = false;
    var rpRentingsTabOneS = '';
    var rpRentingsTextOneS = '';
    var rpRentingsTabOneM = '';
    var rpRentingsTextOneM = '';
    var rpRentingsTabTwoM = '';
    var rpRentingsTextTwoM = '';
    var rpRentingsTabOneL = '';
    var rpRentingsTextOneL = '';
    var rpRentingsTabTwoL = '';
    var rpRentingsTextTwoL = '';
    var rpRentingsTabThreeL = '';
    var rpRentingsTextThreeL = '';
    var rpRentingsTabOneXL = '';
    var rpRentingsTextOneXL = '';
    var rpRentingsTabTwoXL = '';
    var rpRentingsTextTwoXL = '';
    var rpRentingsTabThreeXL = '';
    var rpRentingsTextThreeXL = '';
    var rpRentingsTabFourXL = '';
    var rpRentingsTextFourXL = '';
    if($(e.target).find('[name=rpRentingsHasPackageS]').is(':checked')) {
      rpRentingsHasPackageS = true;
      rpRentingsTabOneS = $(e.target).find('[name=rpRentingsTabOneS]').val();
      rpRentingsTextOneS = $(e.target).find('[name=rpRentingsTextOneS]').val();   
    }
    if($(e.target).find('[name=rpRentingsHasPackageM]').is(':checked')) {
      rpRentingsHasPackageM = true;
      rpRentingsTabOneM = $(e.target).find('[name=rpRentingsTabOneM]').val();
      rpRentingsTextOneM = $(e.target).find('[name=rpRentingsTextOneM]').val();
      rpRentingsTabTwoM = $(e.target).find('[name=rpRentingsTabTwoM]').val();
      rpRentingsTextTwoM = $(e.target).find('[name=rpRentingsTextTwoM]').val();   
    }
    if($(e.target).find('[name=rpRentingsHasPackageL]').is(':checked')) {
      rpRentingsHasPackageL = true;
      rpRentingsTabOneL = $(e.target).find('[name=rpRentingsTabOneL]').val();
      rpRentingsTextOneL = $(e.target).find('[name=rpRentingsTextOneL]').val();
      rpRentingsTabTwoL = $(e.target).find('[name=rpRentingsTabTwoL]').val();
      rpRentingsTextTwoL = $(e.target).find('[name=rpRentingsTextTwoL]').val();
      rpRentingsTabThreeL = $(e.target).find('[name=rpRentingsTabThreeL]').val();
      rpRentingsTextThreeL = $(e.target).find('[name=rpRentingsTextThreeL]').val();   
    }
    if($(e.target).find('[name=rpRentingsHasPackageXL]').is(':checked')) {
      rpRentingsHasPackageXL = true; 
      rpRentingsTabOneXL = $(e.target).find('[name=rpRentingsTabOneXL]').val();
      rpRentingsTextOneXL = $(e.target).find('[name=rpRentingsTextOneXL]').val();
      rpRentingsTabTwoXL = $(e.target).find('[name=rpRentingsTabTwoXL]').val();
      rpRentingsTextTwoXL = $(e.target).find('[name=rpRentingsTextTwoXL]').val();
      rpRentingsTabThreeXL = $(e.target).find('[name=rpRentingsTabThreeXL]').val();
      rpRentingsTextThreeXL = $(e.target).find('[name=rpRentingsTextThreeXL]').val();
      rpRentingsTabFourXL = $(e.target).find('[name=rpRentingsTabFourXL]').val();
      rpRentingsTextFourXL = $(e.target).find('[name=rpRentingsTextFourXL]').val();
    }
    if($(e.target).find('[name=rpRentingsHasAddTextOne]').is(':checked')) {
      rpRentingsHasAddTextOne = true;   
    }
    if($(e.target).find('[name=rpRentingsHasAddTextTwo]').is(':checked')) {
      rpRentingsHasAddTextTwo = true;   
    }
    if($(e.target).find('[name=rpRentingsHasHeaderImg]').is(':checked')) {
      rpRentingsHasHeaderImg = true;   
    }
    if($(e.target).find('[name=rpRentingsHasHeaderSlider]').is(':checked')) {
      rpRentingsHasHeaderSlider = true;   
    }
    if($(e.target).find('[name=rpRentingsHasGalleryS]').is(':checked')) {
      rpRentingsHasGalleryS = true;   
    }
    if($(e.target).find('[name=rpRentingsHasGalleryM]').is(':checked')) {
      rpRentingsHasGalleryM = true;   
    }
    if($(e.target).find('[name=rpRentingsHasVideo]').is(':checked')) {
      rpRentingsHasVideo = true;   
    }
    if($(e.target).find('[name=rpRentingsHasSocialMedia]').is(':checked')) {
      rpRentingsHasSocialMedia = true;   
    }
      
    /* zu beachten:
    rpRentingsDefaultImage
    rpRentingsHeaderImg
    rpRentingsHeaderSliderOne
    rpRentingsHeaderSliderTwo
    rpRentingsHeaderSliderThree
    rpRentingsHeaderSliderFour
    */
    
    var rpRentingsName = $(e.target).find('[name=rpRentingsName]').val(); 
    var rpRentingsSiteUrl = rpRentingsName.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();
    rpRentingsSiteUrl = rpRentingsSiteUrl.toLowerCase();
    
    
    rentingsData = {
      customerId: customerId,
      rpRentingsName: rpRentingsName,
      rpRentingsSiteUrl: rpRentingsSiteUrl,
      rpRentingsStreet: $(e.target).find('[name=rpRentingsStreet]').val(),
      rpRentingsAdditional: $(e.target).find('[name=rpRentingsAdditional]').val(),
      rpRentingsPlz: $(e.target).find('[name=rpRentingsPlz]').val(),
      rpRentingsCity: $(e.target).find('[name=rpRentingsCity]').val(),
      rpRentingsRegions: regionData,
      rpRentingsCountries: countryData,
      rpRentingsBegin: $(e.target).find('[name=rpRentingsBegin]').val(),
      rpRentingsEnd: $(e.target).find('[name=rpRentingsEnd]').val(),
      rpRentingsUrl: $(e.target).find('[name=rpRentingsUrl]').val(),
      // Zusatzdaten
      rpRentingsHasPackageS: rpRentingsHasPackageS,
      rpRentingsHasPackageM: rpRentingsHasPackageM,
      rpRentingsHasPackageL: rpRentingsHasPackageL,
      rpRentingsHasPackageXL: rpRentingsHasPackageXL,
      rpRentingsHasAddTextOne: rpRentingsHasAddTextOne,
      rpRentingsHasAddTextTwo: rpRentingsHasAddTextTwo,
      rpRentingsHasHeaderImg: rpRentingsHasHeaderImg,
      rpRentingsHasHeaderSlider: rpRentingsHasHeaderSlider,
      rpRentingsHasGalleryS: rpRentingsHasGalleryS,
      rpRentingsHasGalleryM: rpRentingsHasGalleryM,
      rpRentingsHasVideo: rpRentingsHasVideo,
      rpRentingsHasSocialMedia: rpRentingsHasSocialMedia,
      rpRentingsTabOneS: rpRentingsTabOneS,
      rpRentingsTextOneS: rpRentingsTabOneS,
      rpRentingsTabOneM: rpRentingsTabOneM,
      rpRentingsTextOneM: rpRentingsTextOneM,
      rpRentingsTabTwoM: rpRentingsTabTwoM,
      rpRentingsTextTwoM: rpRentingsTextTwoM,
      rpRentingsTabOneL: rpRentingsTabOneL,
      rpRentingsTextOneL: rpRentingsTextOneL,
      rpRentingsTabTwoL: rpRentingsTabTwoL,
      rpRentingsTextTwoL: rpRentingsTextTwoL,
      rpRentingsTabThreeL: rpRentingsTabThreeL,
      rpRentingsTextThreeL: rpRentingsTextThreeL,
      rpRentingsTabOneXL: $(e.target).find('[name=rpRentingsTabOneXL]').val(),
      rpRentingsTextOneXL: $(e.target).find('[name=rpRentingsTextOneXL]').val(),
      rpRentingsTabTwoXL: $(e.target).find('[name=rpRentingsTabTwoXL]').val(),
      rpRentingsTextTwoXL: $(e.target).find('[name=rpRentingsTextTwoXL]').val(),
      rpRentingsTabThreeXL: $(e.target).find('[name=rpRentingsTabThreeXL]').val(),
      rpRentingsTextThreeXL: $(e.target).find('[name=rpRentingsTextThreeXL]').val(),
      rpRentingsTabFourXL: $(e.target).find('[name=rpRentingsTabFourXL]').val(),
      rpRentingsTextFourXL: $(e.target).find('[name=rpRentingsTextFourXL]').val(),
      rpRentingsAddTextTabOne: $(e.target).find('[name=rpRentingsAddTextTabOne]').val(),
      rpRentingsAddTextOne: $(e.target).find('[name=rpRentingsAddTextOne]').val(),
      rpRentingsAddTextTabTwo: $(e.target).find('[name=rpRentingsAddTextTabTwo]').val(),
      rpRentingsAddTextTwo: $(e.target).find('[name=rpRentingsAddTextTwo]').val(),
      rpSubmitted: new Date().getTime(),
      rpUpdatedAt: new Date().getTime()
    }
    console.log(rentingsData); //debug
    
    Meteor.call('addRentings', rentingsData, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Vermietung ' + rpRentingsName + ' erfolgreich hinzugefügt');
    });
  }
});