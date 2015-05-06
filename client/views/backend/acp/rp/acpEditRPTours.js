//-- template onCreated functions
Template.acpEditRPTours.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var customerId = Session.get('customerId');
    var toursId = Session.get('toursId');
    self.subscribe('acp_getSingleRPCustomer', customerId);
    self.subscribe('acp_getSingleRPToursData', toursId); 
    self.subscribe('acp_getAllCountries');
  });
});

//-- template onDestroyed functions
Template.acpEditRPTours.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpEditRPToursData.onRendered(function () {
  $('#countryData').select2();
  $('.editableFroala').on('editable.beforeImageUpload', function (e, editor, images) {
    console.log(e); //DEBUG
    console.log('---'); //DEBUG
    console.log(editor); //DEBUG
    console.log('---'); //DEBUG
    console.log(images); //DEBUG
    console.log('======'); //DEBUG
  });
  $('.selector').on('editable.afterUploadPastedImage', function (e, editor, img) {
    console.log(img); //DEBUG
    console.log('======'); //DEBUG
  });
  $('.selector').on('editable.imageInserted', function (e, editor, img) {
    console.log(img); //DEBUG
    console.log('======'); //DEBUG
  });
});

//-- template helpers                            
Template.acpEditRPTours.helpers({
  getCustomerData: function(){
    return Customers.findOne();  
  }
});

//-- template helpers                            
Template.acpEditRPToursData.helpers({
  getLogo: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursLogo'});
  },
  getDefaultImage: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursDefaultImage'});
  },
  getHeaderImg: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursHeaderImg'});
  },
  getGS1: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGS1'});
  },
  getGS2: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGS2'});
  },
  getGS3: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGS3'});
  },
  getGS4: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGS4'});
  },
  getGS5: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGS5'});
  },
  getGS6: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGS6'});
  },
  getGM1: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM1'});
  },
  getGM2: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM2'});
  },
  getGM3: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM3'});
  },
  getGM4: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM4'});
  },
  getGM5: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM5'});
  },
  getGM6: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM6'});
  },
  getGM7: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM7'});
  },
  getGM8: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM8'});
  },
  getGM9: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM9'});
  },
  getGM10: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM10'});
  },
  getGM11: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM11'});
  },
  getGM12: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursGM12'});
  }
});

//-- template events
Template.acpEditRPTours.events({ 
  'change input[type=file]': function(e, tpl){
    e.preventDefault();
    var rpToursId = Session.get('toursId');
    var customerId = Session.get('customerId');
    var assignedObject = e.currentTarget.id;
    var target = e.currentTarget.classList[1];
    var gallery = e.currentTarget.classList[2];
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {customerId: customerId, rpToursId: rpToursId, assignedObject: assignedObject, target: target, gallery: gallery};
      rpImages.insert(newFile, function (err, fileObj) {
      });
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
        imageResize: true,
        key: 'yD2D1gB-7sB-22lpiE-11nkH-8mC7eg=='
      });
    }
  },
  'click .checkbox': function(e) {
    //e.preventDefault();
    var settings = false;
    var rpToursId = Session.get('toursId');
    var pack = e.currentTarget.id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setRPToursPackages', pack, rpToursId, settings, function(error, result){
      if(error)
        toastr.error('Portaleinstellung konnte nicht geändert werden: ' + error.reason);
      if(result)
        toastr.success('Portaleinstellung erfolgreich geändert');
    });
  },
  'click a.delImage': function(e){
    e.preventDefault();
    var customerId = this._id;
    var imgId = e.currentTarget.id;
    rpImages.remove(imgId);
  },
  'submit form': function(e) {
    e.preventDefault();
    var toursName = $(e.target).find('[name=toursName]').val();   
    // check required field
    if(!toursName) {
      toastr.warning('Es muss mindestens ein Name eingegeben werden, um den Datensatz zu speichern!');
    } else {
      var rpTours = [];
      var rpToursId = Session.get('toursId');
      var customerId = Session.get('customerId');
      var getCustomerNo = Customers.findOne({_id: customerId}).customerId;
      getCustomerNo = Number(getCustomerNo);
      var toursNo = getCustomerNo + _.random(0, 100);
      var toursSiteUrl = $(e.target).find('[name=toursSiteUrl]').val();
      if(!toursSiteUrl) {
        toursSiteUrl = toursName.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();      
        toursSiteUrl = toursSiteUrl.toLowerCase();            
      }
      toursHasPackageS = false;
      toursHasPackageM = false;
      toursHasPackageL = false;
      toursHasPackageXL = false;
      toursHasAddTextOne = false;
      toursHasAddTextTwo = false;
      toursHasHeaderImg = false;
      toursHasGalleryS = false;
      toursHasGalleryM = false;
      toursHasVideo = false;
      toursHasSocialMedia = false;
      toursHasHighlights = false;
      if($(e.target).find('[name=toursHasPackageS]').is(':checked')) {
        toursHasPackageS = true;   
      }
      if($(e.target).find('[name=toursHasPackageM]').is(':checked')) {
        toursHasPackageM = true;   
      }
      if($(e.target).find('[name=toursHasPackageL]').is(':checked')) {
        toursHasPackageL = true;   
      }
      if($(e.target).find('[name=toursHasPackageXL]').is(':checked')) {
        toursHasPackageXL = true;   
      }
      if($(e.target).find('[name=toursHasAddTextOne]').is(':checked')) {
        toursHasAddTextOne = true;   
      }
      if($(e.target).find('[name=toursHasAddTextTwo]').is(':checked')) {
        toursHasAddTextTwo = true;   
      }
      if($(e.target).find('[name=toursHasHeaderImg]').is(':checked')) {
        toursHasHeaderImg = true;   
      }
      if($(e.target).find('[name=toursHasGalleryS]').is(':checked')) {
        toursHasGalleryS = true;   
      }
      if($(e.target).find('[name=toursHasGalleryM]').is(':checked')) {
        toursHasGalleryM = true;   
      }
      if($(e.target).find('[name=toursHasVideo]').is(':checked')) {
        toursHasVideo = true;   
      }
      if($(e.target).find('[name=toursHasSocialMedia]').is(':checked')) {
        toursHasSocialMedia = true;   
      }
      if($(e.target).find('[name=toursHasHighlights]').is(':checked')) {
        toursHasHighlights = true;   
      }
      
      var toursCountries = [];
      $('#countryData :selected').each(function(i, selected){
        toursCountries[i] = {
          id: $(selected).val(),
          name: $(selected).text()
        };
      });
      var toursVisibleBegin = $(e.target).find('[name=toursVisibleBegin]').val();
      var toursVisibleEnd = $(e.target).find('[name=toursVisibleEnd]').val();
      var toursBegin = $(e.target).find('[name=toursBegin]').val();
      var toursEnd = $(e.target).find('[name=toursEnd]').val();
      var toursDeadline = $(e.target).find('[name=toursDeadline]').val();
      toursVisibleBegin = new Date(toursVisibleBegin).getTime();
      toursVisibleEnd = new Date(toursVisibleEnd).getTime();
      toursBegin = new Date(toursBegin).getTime();
      toursEnd = new Date(toursEnd).getTime();
      toursDeadline = new Date(toursDeadline).getTime();
      
      rpTours = {
        _id: rpToursId,
        customerId: customerId,
        customerNo: getCustomerNo,
        toursNo: toursNo,
        toursName: toursName,
        toursSiteUrl: toursSiteUrl,
        toursVisibleBegin: toursVisibleBegin,
        toursVisibleEnd: toursVisibleEnd,
        toursBegin: toursBegin,
        toursEnd: toursEnd,
        toursDeadline: toursDeadline,
        toursUrl: $(e.target).find('[name=toursUrl]').val(),
        toursHighlightOne: $(e.target).find('[name=toursHighlightOne]').val(),
        toursHighlightTwo: $(e.target).find('[name=toursHighlightTwo]').val(),
        toursHighlightThree: $(e.target).find('[name=toursHighlightThree]').val(),
        toursCategory: $(e.target).find('[name=toursCategory]').val(),
        toursCustom: $(e.target).find('[name=toursCustom]').val(), 
        toursCountries: toursCountries,
        toursIsActive: true,
        toursHasPackageS: toursHasPackageS,
        toursHasPackageM: toursHasPackageM,
        toursHasPackageL: toursHasPackageL,
        toursHasPackageXL: toursHasPackageXL,
        toursHasAddTextOne: toursHasAddTextOne,
        toursHasAddTextTwo: toursHasAddTextTwo,
        toursHasHeaderImg: toursHasHeaderImg,
        toursHasGalleryS: toursHasGalleryS,
        toursHasGalleryM: toursHasGalleryM,
        toursHasVideo: toursHasVideo,
        toursHasSocialMedia: toursHasSocialMedia,
        toursHasHighlights: toursHasHighlights,
        toursTabOneS: $(e.target).find('[name=toursTabOneS]').val(),
        toursTabOneM: $(e.target).find('[name=toursTabOneM]').val(),
        toursTabOneL: $(e.target).find('[name=toursTabOneL]').val(),
        toursTabOneXL: $(e.target).find('[name=toursTabOneXL]').val(),
        toursTabTwoM: $(e.target).find('[name=toursTabTwoM]').val(),
        toursTabTwoL: $(e.target).find('[name=toursTabTwoL]').val(),
        toursTabTwoXL: $(e.target).find('[name=toursTabTwoXL]').val(),
        toursTabThreeL: $(e.target).find('[name=toursTabThreeL]').val(),
        toursTabThreeXL: $(e.target).find('[name=toursTabThreeXL]').val(),
        toursTabFourXL: $(e.target).find('[name=toursTabFourXL]').val(),
        toursAddTextTabOne: $(e.target).find('[name=toursAddTextTabOne]').val(),
        toursAddTextTabTwo: $(e.target).find('[name=toursAddTextTabTwo]').val(),
        toursUrl: $(e.target).find('[name=toursUrl]').val(),
        toursVideoUrl: $(e.target).find('[name=toursVideoUrl]').val(),
        toursFacebookData: $(e.target).find('[name=toursFacebookData]').val(),
        toursTwitterData: $(e.target).find('[name=toursTwitterData]').val(),
        toursGplusData: $(e.target).find('[name=toursGplusData]').val(),
        toursYoutubeData: $(e.target).find('[name=toursYoutubeData]').val(), 
        toursCountImages: $(e.target).find('[name=toursCountImages]').val(),    
        updatedAt: new Date().getTime()
      };
      Meteor.call('updateRpTours', rpToursId, rpTours, function(error, result){
        if(error)
          toastr.error(error.reason);
        if(result)
          toastr.success('Portaleinstellung erfolgreich geändert');
      });
      
      rpTours = '';
      
      // Froala Editor
      if ($('#toursTextOneS').data('fa.editable')) {
        toursTextOneS = $(e.target).find('#toursTextOneS').editable('getHTML');
      } else {
        toursTextOneS = $(e.target).find('[name=toursTextOneS]').val();
      }
      if ($('#toursTextOneM').data('fa.editable')) {
        toursTextOneM = $(e.target).find('#toursTextOneM').editable('getHTML');
      } else {
        toursTextOneM = $(e.target).find('[name=toursTextOneM]').val();
      }
      if ($('#toursTextOneL').data('fa.editable')) {
        toursTextOneL = $(e.target).find('#toursTextOneL').editable('getHTML');
      } else {
        toursTextOneL = $(e.target).find('[name=toursTextOneL]').val();
      }
      if ($('#toursTextOneXL').data('fa.editable')) {
        toursTextOneXL = $(e.target).find('#toursTextOneXL').editable('getHTML');
      } else {
        toursTextOneXL = $(e.target).find('[name=toursTextOneXL]').val();
      }
      if ($('#toursTextTwoM').data('fa.editable')) {
        toursTextTwoM = $(e.target).find('#toursTextTwoM').editable('getHTML');
      } else {
        toursTextTwoM = $(e.target).find('[name=toursTextTwoM]').val();
      }
      if ($('#toursTextTwoL').data('fa.editable')) {
        toursTextTwoL = $(e.target).find('#toursTextTwoL').editable('getHTML');
      } else {
        toursTextTwoL = $(e.target).find('[name=toursTextTwoL]').val();
      }
      if ($('#toursTextTwoXL').data('fa.editable')) {
        toursTextTwoXL = $(e.target).find('#toursTextTwoXL').editable('getHTML');
      } else {
        toursTextTwoXL = $(e.target).find('[name=toursTextTwoXL]').val();
      }
      if ($('#toursTextThreeL').data('fa.editable')) {
        toursTextThreeL = $(e.target).find('#toursTextThreeL').editable('getHTML');
      } else {
        toursTextThreeL = $(e.target).find('[name=toursTextThreeL]').val();
      }
      if ($('#toursTextThreeXL').data('fa.editable')) {
        toursTextThreeXL = $(e.target).find('#toursTextThreeXL').editable('getHTML');
      } else {
        toursTextThreeXL = $(e.target).find('[name=toursTextThreeXL]').val();
      }
      if ($('#toursTextFourXL').data('fa.editable')) {
        toursTextFourXL = $(e.target).find('#toursTextFourXL').editable('getHTML');
      } else {
        toursTextFourXL = $(e.target).find('[name=toursTextFourXL]').val();
      }
      if ($('#toursAddTextOne').data('fa.editable')) {
        toursAddTextOne = $(e.target).find('#toursAddTextOne').editable('getHTML');
      } else {
        toursAddTextOne = $(e.target).find('[name=toursAddTextOne]').val();
      }
      if ($('#toursAddTextTwo').data('fa.editable')) {
        toursAddTextTwo = $(e.target).find('#toursAddTextTwo').editable('getHTML');
      } else {
        toursAddTextTwo = $(e.target).find('[name=toursAddTextTwo]').val();
      }
      if ($('#toursNotes').data('fa.editable')) {
        toursNotes = $(e.target).find('#toursNotes').editable('getHTML');
      } else {
        toursNotes = $(e.target).find('[name=toursNotes]').val();
      }
      
      rpToursText = {
        toursTextOneS: toursTextOneS,
        toursTextOneM: toursTextOneM,
        toursTextOneL: toursTextOneL,
        toursTextOneXL: toursTextOneXL,
        toursTextTwoM: toursTextTwoM,
        toursTextTwoL: toursTextTwoL,
        toursTextTwoXL: toursTextTwoXL,
        toursTextThreeL: toursTextThreeL,
        toursTextThreeXL: toursTextThreeXL,
        toursTextFourXL: toursTextFourXL,
        toursAddTextOne: toursAddTextOne,
        toursAddTextTwo: toursAddTextTwo,
        toursNotes: toursNotes 
      };      
      Meteor.call('updateRpToursText', rpToursId, rpToursText, function(error, result){
        if(error)
          toastr.error(error.reason);
        if(result)
          toastr.success('Texte erfolgreich geändert');
      });
    }
  }
});