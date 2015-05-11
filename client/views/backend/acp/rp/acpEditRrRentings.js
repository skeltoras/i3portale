//-- template onCreated functions
Template.acpEditRpRentings.onCreated(function () {
  var self = this;
  var customerId = Session.get('customerId');
  var rentingsId = Session.get('rentingsId');
  self.autorun(function () {
    self.subscribe('acp_getSingleRPCustomer', customerId);
    self.subscribe('acp_getSingleRpRentingsData', rentingsId); 
    self.subscribe('acp_getAllCountries');
  });
  Meteor.call('createRentings', rentingsId, customerId);
});

//-- template onDestroyed functions
Template.acpEditRpRentings.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpEditRpRentingsData.onRendered(function () {
  $('#countryData').select2();
});

//-- template helpers                            
Template.acpEditRpRentings.helpers({
  getCustomerData: function(){
    return Customers.findOne();  
  }
});

//-- template helpers                            
Template.acpEditRpRentingsData.helpers({
  getLogo: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsLogo'});
  },
  getDefaultImage: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsDefaultImage'});
  },
  getHeaderImg: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsHeaderImg'});
  },
  getGS1: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGS1'});
  },
  getGS2: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGS2'});
  },
  getGS3: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGS3'});
  },
  getGS4: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGS4'});
  },
  getGS5: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGS5'});
  },
  getGS6: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGS6'});
  },
  getGM1: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM1'});
  },
  getGM2: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM2'});
  },
  getGM3: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM3'});
  },
  getGM4: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM4'});
  },
  getGM5: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM5'});
  },
  getGM6: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM6'});
  },
  getGM7: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM7'});
  },
  getGM8: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM8'});
  },
  getGM9: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM9'});
  },
  getGM10: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM10'});
  },
  getGM11: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM11'});
  },
  getGM12: function(){
    return rpImages.findOne({'metadata.rpRentingsId': this._id, 'metadata.assignedObject': 'rentingsGM12'});
  }
});

//-- template events
Template.acpEditRpRentings.events({ 
  'change input[type=file]': function(e, tpl){
    e.preventDefault();
    var rpRentingsId = Session.get('rentingsId');
    var customerId = Session.get('customerId');
    var assignedObject = e.currentTarget.id;
    var target = e.currentTarget.classList[1];
    var gallery = e.currentTarget.classList[2];
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {customerId: customerId, rpRentingsId: rpRentingsId, assignedObject: assignedObject, target: target, gallery: gallery};
      rpImages.insert(newFile, function (err, fileObj) {
      });
      RpRentings.update(rpRentingsId, {$addToSet: {images: {id: newFile._id, assignedObject: assignedObject}}});
    });
  },
  'click .editableFroala': function(e) {
    e.preventDefault();
    var editId = '#' + e.currentTarget.id;
    
    if (!$(editId).data('fa.editable')) {
      $(editId).editable({
        inlineMode: false,
        language: 'de',
        minHeight: 100,
        defaultImageWidth: 500,
        imageResize: false,
        key: 'yD2D1gB-7sB-22lpiE-11nkH-8mC7eg=='
      });
    }
  },
  'click .checkbox': function(e) {
    //e.preventDefault();
    var settings = false;
    var rpRentingsId = Session.get('rentingsId');
    var pack = e.currentTarget.id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setRpRentingsPackages', pack, rpRentingsId, settings, function(error, result){
      if(error)
        toastr.error('Portaleinstellung konnte nicht geändert werden: ' + error.reason);
      if(result)
        toastr.success('Portaleinstellung erfolgreich geändert');
    });
  },
  'click a.delImage': function(e){
    e.preventDefault();
    var rentingsId = this._id;
    var imgId = e.currentTarget.id;
    rpImages.remove(imgId);
    RpRentings.update(rentingsId, {$pull: {images: {id: imgId}}});
  },
  'submit form': function(e) {
    e.preventDefault();
    var rentingsName = $(e.target).find('[name=rentingsName]').val();   
    // check required field
    if(!rentingsName) {
      toastr.warning('Es muss mindestens ein Name eingegeben werden, um den Datensatz zu speichern!');
    } else {
      var rpRentings = [];
      var rpRentingsId = Session.get('rentingsId');
      var customerId = Session.get('customerId');
      var getCustomerNo = Customers.findOne({_id: customerId}).customerId;
      getCustomerNo = Number(getCustomerNo);
      var rentingsNo = getCustomerNo + _.random(0, 100);
      var rentingsSiteUrl = $(e.target).find('[name=rentingsSiteUrl]').val();
      if(!rentingsSiteUrl) {
        rentingsSiteUrl = rentingsName.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();      
        rentingsSiteUrl = rentingsSiteUrl.toLowerCase();            
      }
      rentingsHasPackageS = false;
      rentingsHasPackageM = false;
      rentingsHasPackageL = false;
      rentingsHasPackageXL = false;
      rentingsHasAddTextOne = false;
      rentingsHasAddTextTwo = false;
      rentingsHasHeaderImg = false;
      rentingsHasGalleryS = false;
      rentingsHasGalleryM = false;
      rentingsHasVideo = false;
      rentingsHasSocialMedia = false;
      rentingsHasHighlights = false;
      if($(e.target).find('[name=rentingsHasPackageS]').is(':checked')) {
        rentingsHasPackageS = true;   
      }
      if($(e.target).find('[name=rentingsHasPackageM]').is(':checked')) {
        rentingsHasPackageM = true;   
      }
      if($(e.target).find('[name=rentingsHasPackageL]').is(':checked')) {
        rentingsHasPackageL = true;   
      }
      if($(e.target).find('[name=rentingsHasPackageXL]').is(':checked')) {
        rentingsHasPackageXL = true;   
      }
      if($(e.target).find('[name=rentingsHasAddTextOne]').is(':checked')) {
        rentingsHasAddTextOne = true;   
      }
      if($(e.target).find('[name=rentingsHasAddTextTwo]').is(':checked')) {
        rentingsHasAddTextTwo = true;   
      }
      if($(e.target).find('[name=rentingsHasHeaderImg]').is(':checked')) {
        rentingsHasHeaderImg = true;   
      }
      if($(e.target).find('[name=rentingsHasGalleryS]').is(':checked')) {
        rentingsHasGalleryS = true;   
      }
      if($(e.target).find('[name=rentingsHasGalleryM]').is(':checked')) {
        rentingsHasGalleryM = true;   
      }
      if($(e.target).find('[name=rentingsHasVideo]').is(':checked')) {
        rentingsHasVideo = true;   
      }
      if($(e.target).find('[name=rentingsHasSocialMedia]').is(':checked')) {
        rentingsHasSocialMedia = true;   
      }
      if($(e.target).find('[name=rentingsHasHighlights]').is(':checked')) {
        rentingsHasHighlights = true;   
      }
      
      var rentingsCountries = [];
      $('#countryData :selected').each(function(i, selected){
        rentingsCountries[i] = {
          id: $(selected).val(),
          name: $(selected).text()
        };
      });
      var rentingsVisibleBegin = $(e.target).find('[name=rentingsVisibleBegin]').val();
      var rentingsVisibleEnd = $(e.target).find('[name=rentingsVisibleEnd]').val();
      if(rentingsVisibleBegin)
        rentingsVisibleBegin = new Date(rentingsVisibleBegin).getTime();
      if(rentingsVisibleEnd)
        rentingsVisibleEnd = new Date(rentingsVisibleEnd).getTime();
      
      rpRentings = {
        _id: rpRentingsId,
        customerId: customerId,
        customerNo: getCustomerNo,
        rentingsNo: rentingsNo,
        rentingsName: rentingsName,
        rentingsSiteUrl: rentingsSiteUrl,
        rentingsVisibleBegin: rentingsVisibleBegin,
        rentingsVisibleEnd: rentingsVisibleEnd,
        rentingsDuration: $(e.target).find('[name=rentingsDuration]').val(),
        rentingsUrl: $(e.target).find('[name=rentingsUrl]').val(),
        rentingsHighlightOne: $(e.target).find('[name=rentingsHighlightOne]').val(),
        rentingsHighlightTwo: $(e.target).find('[name=rentingsHighlightTwo]').val(),
        rentingsHighlightThree: $(e.target).find('[name=rentingsHighlightThree]').val(),
        rentingsCategory: $(e.target).find('[name=rentingsCategory]').val(),
        rentingsCustom: $(e.target).find('[name=rentingsCustom]').val(), 
        rentingsCountries: rentingsCountries,
        rentingsIsActive: true,
        rentingsHasPackageS: rentingsHasPackageS,
        rentingsHasPackageM: rentingsHasPackageM,
        rentingsHasPackageL: rentingsHasPackageL,
        rentingsHasPackageXL: rentingsHasPackageXL,
        rentingsHasAddTextOne: rentingsHasAddTextOne,
        rentingsHasAddTextTwo: rentingsHasAddTextTwo,
        rentingsHasHeaderImg: rentingsHasHeaderImg,
        rentingsHasGalleryS: rentingsHasGalleryS,
        rentingsHasGalleryM: rentingsHasGalleryM,
        rentingsHasVideo: rentingsHasVideo,
        rentingsHasSocialMedia: rentingsHasSocialMedia,
        rentingsHasHighlights: rentingsHasHighlights,
        rentingsTabOneS: $(e.target).find('[name=rentingsTabOneS]').val(),
        rentingsTabOneM: $(e.target).find('[name=rentingsTabOneM]').val(),
        rentingsTabOneL: $(e.target).find('[name=rentingsTabOneL]').val(),
        rentingsTabOneXL: $(e.target).find('[name=rentingsTabOneXL]').val(),
        rentingsTabTwoM: $(e.target).find('[name=rentingsTabTwoM]').val(),
        rentingsTabTwoL: $(e.target).find('[name=rentingsTabTwoL]').val(),
        rentingsTabTwoXL: $(e.target).find('[name=rentingsTabTwoXL]').val(),
        rentingsTabThreeL: $(e.target).find('[name=rentingsTabThreeL]').val(),
        rentingsTabThreeXL: $(e.target).find('[name=rentingsTabThreeXL]').val(),
        rentingsTabFourXL: $(e.target).find('[name=rentingsTabFourXL]').val(),
        rentingsAddTextTabOne: $(e.target).find('[name=rentingsAddTextTabOne]').val(),
        rentingsAddTextTabTwo: $(e.target).find('[name=rentingsAddTextTabTwo]').val(),
        rentingsUrl: $(e.target).find('[name=rentingsUrl]').val(),
        rentingsVideoUrl: $(e.target).find('[name=rentingsVideoUrl]').val(),
        rentingsFacebookData: $(e.target).find('[name=rentingsFacebookData]').val(),
        rentingsTwitterData: $(e.target).find('[name=rentingsTwitterData]').val(),
        rentingsGplusData: $(e.target).find('[name=rentingsGplusData]').val(),
        rentingsYoutubeData: $(e.target).find('[name=rentingsYoutubeData]').val(), 
        rentingsCountImages: $(e.target).find('[name=rentingsCountImages]').val(),    
        updatedAt: new Date().getTime()
      };
      Meteor.call('updateRpRentings', rpRentingsId, rpRentings, function(error, result){
        if(error)
          toastr.error(error.reason);
        if(result)
          toastr.success('Portaleinstellung erfolgreich geändert');
      });
      
      rpRentings = '';
      
      // Froala Editor
      if ($('#rentingsTextOneS').data('fa.editable')) {
        rentingsTextOneS = $(e.target).find('#rentingsTextOneS').editable('getHTML');
      } else {
        rentingsTextOneS = $(e.target).find('[name=rentingsTextOneS]').val();
      }
      if ($('#rentingsTextOneM').data('fa.editable')) {
        rentingsTextOneM = $(e.target).find('#rentingsTextOneM').editable('getHTML');
      } else {
        rentingsTextOneM = $(e.target).find('[name=rentingsTextOneM]').val();
      }
      if ($('#rentingsTextOneL').data('fa.editable')) {
        rentingsTextOneL = $(e.target).find('#rentingsTextOneL').editable('getHTML');
      } else {
        rentingsTextOneL = $(e.target).find('[name=rentingsTextOneL]').val();
      }
      if ($('#rentingsTextOneXL').data('fa.editable')) {
        rentingsTextOneXL = $(e.target).find('#rentingsTextOneXL').editable('getHTML');
      } else {
        rentingsTextOneXL = $(e.target).find('[name=rentingsTextOneXL]').val();
      }
      if ($('#rentingsTextTwoM').data('fa.editable')) {
        rentingsTextTwoM = $(e.target).find('#rentingsTextTwoM').editable('getHTML');
      } else {
        rentingsTextTwoM = $(e.target).find('[name=rentingsTextTwoM]').val();
      }
      if ($('#rentingsTextTwoL').data('fa.editable')) {
        rentingsTextTwoL = $(e.target).find('#rentingsTextTwoL').editable('getHTML');
      } else {
        rentingsTextTwoL = $(e.target).find('[name=rentingsTextTwoL]').val();
      }
      if ($('#rentingsTextTwoXL').data('fa.editable')) {
        rentingsTextTwoXL = $(e.target).find('#rentingsTextTwoXL').editable('getHTML');
      } else {
        rentingsTextTwoXL = $(e.target).find('[name=rentingsTextTwoXL]').val();
      }
      if ($('#rentingsTextThreeL').data('fa.editable')) {
        rentingsTextThreeL = $(e.target).find('#rentingsTextThreeL').editable('getHTML');
      } else {
        rentingsTextThreeL = $(e.target).find('[name=rentingsTextThreeL]').val();
      }
      if ($('#rentingsTextThreeXL').data('fa.editable')) {
        rentingsTextThreeXL = $(e.target).find('#rentingsTextThreeXL').editable('getHTML');
      } else {
        rentingsTextThreeXL = $(e.target).find('[name=rentingsTextThreeXL]').val();
      }
      if ($('#rentingsTextFourXL').data('fa.editable')) {
        rentingsTextFourXL = $(e.target).find('#rentingsTextFourXL').editable('getHTML');
      } else {
        rentingsTextFourXL = $(e.target).find('[name=rentingsTextFourXL]').val();
      }
      if ($('#rentingsAddTextOne').data('fa.editable')) {
        rentingsAddTextOne = $(e.target).find('#rentingsAddTextOne').editable('getHTML');
      } else {
        rentingsAddTextOne = $(e.target).find('[name=rentingsAddTextOne]').val();
      }
      if ($('#rentingsAddTextTwo').data('fa.editable')) {
        rentingsAddTextTwo = $(e.target).find('#rentingsAddTextTwo').editable('getHTML');
      } else {
        rentingsAddTextTwo = $(e.target).find('[name=rentingsAddTextTwo]').val();
      }
      if ($('#rentingsNotes').data('fa.editable')) {
        rentingsNotes = $(e.target).find('#rentingsNotes').editable('getHTML');
      } else {
        rentingsNotes = $(e.target).find('[name=rentingsNotes]').val();
      }
      
      rpRentingsText = {
        rentingsTextOneS: rentingsTextOneS,
        rentingsTextOneM: rentingsTextOneM,
        rentingsTextOneL: rentingsTextOneL,
        rentingsTextOneXL: rentingsTextOneXL,
        rentingsTextTwoM: rentingsTextTwoM,
        rentingsTextTwoL: rentingsTextTwoL,
        rentingsTextTwoXL: rentingsTextTwoXL,
        rentingsTextThreeL: rentingsTextThreeL,
        rentingsTextThreeXL: rentingsTextThreeXL,
        rentingsTextFourXL: rentingsTextFourXL,
        rentingsAddTextOne: rentingsAddTextOne,
        rentingsAddTextTwo: rentingsAddTextTwo,
        rentingsNotes: rentingsNotes 
      };      
      Meteor.call('updateRpRentingsText', rpRentingsId, rpRentingsText, function(error, result){
        if(error)
          toastr.error(error.reason);
        if(result)
          toastr.success('Texte erfolgreich geändert');
      });
    }
  }
});