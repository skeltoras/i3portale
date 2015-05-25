//-- template onCreated functions
Template.acpEditRPTours.onCreated(function () {
  var self = this;
  var customerId = Session.get('customerId');
  var toursId = Session.get('toursId');
  self.autorun(function () {
    self.subscribe('acp_getSingleRPCustomer', customerId);
    self.subscribe('acp_getSingleRPToursData', toursId); 
    self.subscribe('acp_getAllCountries');
  });
  Meteor.call('createTours', toursId, customerId);
});

//-- template onDestroyed functions
Template.acpEditRPTours.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpEditRPToursData.onRendered(function () {
  $('#countryData').select2();
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
  textOneSImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneSImgTop'});
  },
  textOneSImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneSImgMid'});
  },
  textOneSImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneSImgBot'});
  },
  textOneMImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneMImgTop'});
  },
  textOneMImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneMImgMid'});
  },
  textOneMImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneMImgBot'});
  },
  textTwoMImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoMImgTop'});
  },
  textTwoMImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoMImgMid'});
  },
  textTwoMImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoMImgBot'});
  },
  textOneLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneLImgTop'});
  },
  textOneLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneLImgMid'});
  },
  textOneLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneLImgBot'});
  },
  textTwoLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoLImgTop'});
  },
  textTwoLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoLImgMid'});
  },
  textTwoLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoLImgBot'});
  },
  textThreeLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeLImgTop'});
  },
  textThreeLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeLImgMid'});
  },
  textThreeLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeLImgBot'});
  },
  textOneXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneXLImgTop'});
  },
  textOneXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneXLImgMid'});
  },
  textOneXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextOneXLImgBot'});
  },
  textTwoXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoXLImgTop'});
  },
  textTwoXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoXLImgMid'});
  },
  textTwoXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextTwoXLImgBot'});
  },
  textThreeXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeXLImgTop'});
  },
  textThreeXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeXLImgMid'});
  },
  textThreeXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextThreeXLImgBot'});
  },
  textFourXLImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextFourXLImgTop'});
  },
  textFourXLImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextFourXLImgMid'});
  },
  textFourXLImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextFourXLImgBot'});
  },
  textAddOneImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddOneImgTop'});
  },
  textAddOneImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddOneImgMid'});
  },
  textAddOneImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddOneImgBot'});
  },
  textAddTwoImgTop: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddTwoImgTop'});
  },
  textAddTwoImgMid: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddTwoImgMid'});
  },
  textAddTwoImgBot: function(){
    return rpImages.findOne({'metadata.rpToursId': this._id, 'metadata.assignedObject': 'toursTextAddTwoImgBot'});
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
      console.log(newFile);
      RpTours.update(rpToursId, {$addToSet: {images: {id: newFile._id, assignedObject: assignedObject}}});
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
        key: 'llhagF2G5oi=='
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
    var toursId = Session.get('toursId');    
    var imgId = this._id;
    console.log('DELETEIMG|toursId: ' + toursId);
    console.log('DELETEIMG|imgId: ' + imgId);
    Meteor.call('deleteImagerecord', toursId, imgId, function(error, result){
      if(error)
        toastr.error(error.reason);
    }); 
  },
  'keyup .caption': function(e){
    e.preventDefault();
    if (e.keyCode == 13) {
      var toursId = Session.get('toursId');
      var imgId = this._id;
      console.log('CAPTION|toursId: ' + toursId);
      console.log('CAPTION|imgId: ' + imgId);
      var caption = e.currentTarget.value;
      Meteor.call('setImageCaption', toursId, imgId, caption, function(error, result){
        if(error)
          toastr.error(error.reason);
      });    
    }
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
      toursVisibleBegin = new Date(toursVisibleBegin).getTime();
      toursVisibleEnd = new Date(toursVisibleEnd).getTime();
      
      rpTours = {
        _id: rpToursId,
        customerId: customerId,
        customerNo: getCustomerNo,
        toursNo: toursNo,
        toursName: toursName,
        toursSiteUrl: toursSiteUrl,
        toursVisibleBegin: toursVisibleBegin,
        toursVisibleEnd: toursVisibleEnd,
        toursDuration: $(e.target).find('[name=toursDuration]').val(),
        toursDeadline: $(e.target).find('[name=toursDeadline]').val(),
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
      if ($('toursTextOneSa').data('fa.editable')) {
        toursTextOneSa = $(e.target).find('toursTextOneSa').editable('getHTML');
      } else {
        toursTextOneSa = $(e.target).find('[name=toursTextOneSa]').val();
      }
      if ($('toursTextOneSb').data('fa.editable')) {
        toursTextOneSb = $(e.target).find('toursTextOneSb').editable('getHTML');
      } else {
        toursTextOneSb = $(e.target).find('[name=toursTextOneSb]').val();
      }
      if ($('toursTextOneMa').data('fa.editable')) {
        toursTextOneMa = $(e.target).find('toursTextOneMa').editable('getHTML');
      } else {
        toursTextOneMa = $(e.target).find('[name=toursTextOneMa]').val();
      }
      if ($('toursTextOneMb').data('fa.editable')) {
        toursTextOneMb = $(e.target).find('toursTextOneMb').editable('getHTML');
      } else {
        toursTextOneMb = $(e.target).find('[name=toursTextOneMb]').val();
      }
      if ($('toursTextTwoMa').data('fa.editable')) {
        toursTextTwoMa = $(e.target).find('toursTextTwoMa').editable('getHTML');
      } else {
        toursTextTwoMa = $(e.target).find('[name=toursTextTwoMa]').val();
      }
      if ($('toursTextTwoMb').data('fa.editable')) {
        toursTextTwoMb = $(e.target).find('toursTextTwoMb').editable('getHTML');
      } else {
        toursTextTwoMb = $(e.target).find('[name=toursTextTwoMb]').val();
      }
      if ($('toursTextOneLa').data('fa.editable')) {
        toursTextOneLa = $(e.target).find('toursTextOneLa').editable('getHTML');
      } else {
        toursTextOneLa = $(e.target).find('[name=toursTextOneLa]').val();
      }
      if ($('toursTextOneLb').data('fa.editable')) {
        toursTextOneLb = $(e.target).find('toursTextOneLb').editable('getHTML');
      } else {
        toursTextOneLb = $(e.target).find('[name=toursTextOneLb]').val();
      }
      if ($('toursTextTwoLa').data('fa.editable')) {
        toursTextTwoLa = $(e.target).find('toursTextTwoLa').editable('getHTML');
      } else {
        toursTextTwoLa = $(e.target).find('[name=toursTextTwoLa]').val();
      }
      if ($('toursTextTwoLb').data('fa.editable')) {
        toursTextTwoLb = $(e.target).find('toursTextTwoLb').editable('getHTML');
      } else {
        toursTextTwoLb = $(e.target).find('[name=toursTextTwoLb]').val();
      }
      if ($('toursTextThreeLa').data('fa.editable')) {
        toursTextThreeLa = $(e.target).find('toursTextThreeLa').editable('getHTML');
      } else {
        toursTextThreeLa = $(e.target).find('[name=toursTextThreeLa]').val();
      }
      if ($('toursTextThreeLb').data('fa.editable')) {
        toursTextThreeLb = $(e.target).find('toursTextThreeLb').editable('getHTML');
      } else {
        toursTextThreeLb = $(e.target).find('[name=toursTextThreeLb]').val();
      }
      if ($('toursTextOneXLa').data('fa.editable')) {
        toursTextOneXLa = $(e.target).find('toursTextOneXLa').editable('getHTML');
      } else {
        toursTextOneXLa = $(e.target).find('[name=toursTextOneXLa]').val();
      }
      if ($('toursTextOneXLb').data('fa.editable')) {
        toursTextOneXLb = $(e.target).find('toursTextOneXLb').editable('getHTML');
      } else {
        toursTextOneXLb = $(e.target).find('[name=toursTextOneXLb]').val();
      }
      if ($('toursTextTwoXLa').data('fa.editable')) {
        toursTextTwoXLa = $(e.target).find('toursTextTwoXLa').editable('getHTML');
      } else {
        toursTextTwoXLa = $(e.target).find('[name=toursTextTwoXLa]').val();
      }
      if ($('toursTextTwoXLb').data('fa.editable')) {
        toursTextTwoXLb = $(e.target).find('toursTextTwoXLb').editable('getHTML');
      } else {
        toursTextTwoXLb = $(e.target).find('[name=toursTextTwoXLb]').val();
      }
      if ($('toursTextThreeXLa').data('fa.editable')) {
        toursTextThreeXLa = $(e.target).find('toursTextThreeXLa').editable('getHTML');
      } else {
        toursTextThreeXLa = $(e.target).find('[name=toursTextThreeXLa]').val();
      }
      if ($('toursTextThreeXLb').data('fa.editable')) {
        toursTextThreeXLb = $(e.target).find('toursTextThreeXLb').editable('getHTML');
      } else {
        toursTextThreeXLb = $(e.target).find('[name=toursTextThreeXLb]').val();
      }
      if ($('toursTextFourXLa').data('fa.editable')) {
        toursTextFourXLa = $(e.target).find('toursTextFourXLa').editable('getHTML');
      } else {
        toursTextFourXLa = $(e.target).find('[name=toursTextFourXLa]').val();
      }
      if ($('toursTextFourXLb').data('fa.editable')) {
        toursTextFourXLb = $(e.target).find('toursTextFourXLb').editable('getHTML');
      } else {
        toursTextFourXLb = $(e.target).find('[name=toursTextFourXLb]').val();
      }
      if ($('toursAddTextOnea').data('fa.editable')) {
        toursAddTextOnea = $(e.target).find('toursAddTextOnea').editable('getHTML');
      } else {
        toursAddTextOnea = $(e.target).find('[name=toursAddTextOnea]').val();
      }
      if ($('toursAddTextOneb').data('fa.editable')) {
        toursAddTextOneb = $(e.target).find('toursAddTextOneb').editable('getHTML');
      } else {
        toursAddTextOneb = $(e.target).find('[name=toursAddTextOneb]').val();
      }
      if ($('toursAddTextTwoa').data('fa.editable')) {
        toursAddTextTwoa = $(e.target).find('toursAddTextTwoa').editable('getHTML');
      } else {
        toursAddTextTwoa = $(e.target).find('[name=toursAddTextTwoa]').val();
      }
      if ($('toursAddTextTwob').data('fa.editable')) {
        toursAddTextTwob = $(e.target).find('toursAddTextTwob').editable('getHTML');
      } else {
        toursAddTextTwob = $(e.target).find('[name=toursAddTextTwob]').val();
      }
      if ($('#toursNotes').data('fa.editable')) {
        toursNotes = $(e.target).find('#toursNotes').editable('getHTML');
      } else {
        toursNotes = $(e.target).find('[name=toursNotes]').val();
      }
      
      rpToursText = {
        toursTextOneSa: toursTextOneSa,
        toursTextOneSb: toursTextOneSb,
        toursTextOneMa: toursTextOneMa,
        toursTextOneMb: toursTextOneMb,
        toursTextTwoMa: toursTextTwoMa,
        toursTextTwoMb: toursTextTwoMb,
        toursTextOneLa: toursTextOneLa,
        toursTextOneLb: toursTextOneLb,
        toursTextTwoLa: toursTextTwoLa,
        toursTextTwoLb: toursTextTwoLb,
        toursTextThreeLa: toursTextThreeLa,
        toursTextThreeLb: toursTextThreeLb,
        toursTextOneXLa: toursTextOneXLa,
        toursTextOneXLb: toursTextOneXLb,
        toursTextTwoXLa: toursTextTwoXLa,
        toursTextTwoXLb: toursTextTwoXLb,
        toursTextThreeXLa: toursTextThreeXLa,
        toursTextThreeXLb: toursTextThreeXLb,
        toursTextFourXLa: toursTextFourXLa,
        toursTextFourXLb: toursTextFourXLb,
        toursAddTextOnea: toursAddTextOnea,
        toursAddTextOneb: toursAddTextOneb,
        toursAddTextTwoa: toursAddTextTwoa,
        toursAddTextTwob: toursAddTextTwob,
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