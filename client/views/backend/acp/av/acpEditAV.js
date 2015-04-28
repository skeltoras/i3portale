//-- template onCreated functions
Template.acpEditAV.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var customerId = Session.get('customerId');
    self.subscribe('acp_av_getSingleCustomer', customerId);
    self.subscribe('getSingleAvData', customerId);     
  });
});

//-- template onDestroyed functions
Template.acpEditAV.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpEditAV.onRendered(function () {
  //$('.editableFroala').editable('destroy');
});

//-- template helpers                            
Template.acpEditAV.helpers({
  getCustomerData: function(){
    return AvCustomers.findOne();  
  }
});

//-- template helpers                            
Template.acpEditAVData.helpers({
  getLogo: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataLogo'});
  },
  getHeaderImg: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataHeaderImg'});
  },
  getGS1: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGS1'});
  },
  getGS2: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGS2'});
  },
  getGS3: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGS3'});
  },
  getGS4: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGS4'});
  },
  getGS5: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGS5'});
  },
  getGS6: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGS6'});
  },
  getGM1: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM1'});
  },
  getGM2: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM2'});
  },
  getGM3: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM3'});
  },
  getGM4: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM4'});
  },
  getGM5: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM5'});
  },
  getGM6: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM6'});
  },
  getGM7: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM7'});
  },
  getGM8: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM8'});
  },
  getGM9: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM9'});
  },
  getGM10: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM10'});
  },
  getGM11: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM11'});
  },
  getGM12: function(){
    return avImages.findOne({'metadata.avDataId': this._id, 'metadata.assignedObject': 'avDataGM12'});
  }
});

//-- template events
Template.acpEditAV.events({ 
  'change input[type=file]': function(e, tpl){
    e.preventDefault();
    var avDataId = this._id;
    var customerId = Session.get('customerId');
    var assignedObject = e.currentTarget.id;
    var target = e.currentTarget.classList[1];
    var gallery = e.currentTarget.classList[2];
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {customerId: customerId, avDataId: avDataId, assignedObject: assignedObject, target: target, gallery: gallery};
      avImages.insert(newFile, function (err, fileObj) {
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
        key: 'yD2D1gB-7sB-22lpiE-11nkH-8mC7eg=='
      });
    }
  },
  'click .checkbox': function(e) {
    //e.preventDefault();
    var settings = false;
    var avDataId = this._id;
    var pack = e.currentTarget.id;
    if(e.currentTarget.checked == true ){
      settings = true;  
    } else {
      settings = false;
    }
    Meteor.call('setAvPackages', pack, avDataId, settings, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Portaleinstellung erfolgreich geändert');
    });
  },
  'click a.delImage': function(e){
    e.preventDefault();
    var customerId = this._id;
    var imgId = e.currentTarget.id;
    avImages.remove(imgId);
  },
  'submit form': function(e) {
    e.preventDefault();
    
    var avDataId = this._id;
    var avData = [];
    avDataHasPackageS = false;
    avDataHasPackageM = false;
    avDataHasPackageL = false;
    avDataHasPackageXL = false;
    avDataHasAddTextOne = false;
    avDataHasAddTextTwo = false;
    avDataHasWebsite = false;
    avDataHasHeaderImg = false;
    avDataHasGalleryS = false;
    avDataHasGalleryM = false;
    avDataHasVideo = false;
    avDataHasSocialMedia = false;
    
    if($(e.target).find('[name=avDataHasPackageS]').is(':checked')) {
      avDataHasPackageS = true;   
    }
    if($(e.target).find('[name=avDataHasPackageM]').is(':checked')) {
      avDataHasPackageM = true;   
    }
    if($(e.target).find('[name=avDataHasPackageL]').is(':checked')) {
      avDataHasPackageL = true;   
    }
    if($(e.target).find('[name=avDataHasPackageXL]').is(':checked')) {
      avDataHasPackageXL = true;   
    }
    if($(e.target).find('[name=avDataHasAddTextOne]').is(':checked')) {
      avDataHasAddTextOne = true;   
    }
    if($(e.target).find('[name=avDataHasAddTextTwo]').is(':checked')) {
      avDataHasAddTextTwo = true;   
    }
    if($(e.target).find('[name=avDataHasWebsite]').is(':checked')) {
      avDataHasWebsite = true;   
    }
    if($(e.target).find('[name=avDataHasHeaderImg]').is(':checked')) {
      avDataHasHeaderImg = true;   
    }
    if($(e.target).find('[name=avDataHasGalleryS]').is(':checked')) {
      avDataHasGalleryS = true;   
    }
    if($(e.target).find('[name=avDataHasGalleryM]').is(':checked')) {
      avDataHasGalleryM = true;   
    }
    if($(e.target).find('[name=avDataHasVideo]').is(':checked')) {
      avDataHasVideo = true;   
    }
    if($(e.target).find('[name=avDataHasSocialMedia]').is(':checked')) {
      avDataHasSocialMedia = true;   
    }
    
    avData = {
      avDataHasPackageS: avDataHasPackageS,
      avDataHasPackageM: avDataHasPackageM,
      avDataHasPackageL: avDataHasPackageL,
      avDataHasPackageXL: avDataHasPackageXL,
      avDataHasAddTextOne: avDataHasAddTextOne,
      avDataHasAddTextTwo: avDataHasAddTextTwo,
      avDataHasWebsite: avDataHasWebsite,
      avDataHasHeaderImg: avDataHasHeaderImg,
      avDataHasGalleryS: avDataHasGalleryS,
      avDataHasGalleryM: avDataHasGalleryM,
      avDataHasVideo: avDataHasVideo,
      avDataHasSocialMedia: avDataHasSocialMedia,
      avDataTabOneS: $(e.target).find('[name=avDataTabOneS]').val(),
      avDataTabOneM: $(e.target).find('[name=avDataTabOneM]').val(),
      avDataTabOneL: $(e.target).find('[name=avDataTabOneL]').val(),
      avDataTabOneXL: $(e.target).find('[name=avDataTabOneXL]').val(),
      avDataTabTwoM: $(e.target).find('[name=avDataTabTwoM]').val(),
      avDataTabTwoL: $(e.target).find('[name=avDataTabTwoL]').val(),
      avDataTabTwoXL: $(e.target).find('[name=avDataTabTwoXL]').val(),
      avDataTabThreeL: $(e.target).find('[name=avDataTabThreeL]').val(),
      avDataTabThreeXL: $(e.target).find('[name=avDataTabThreeXL]').val(),
      avDataTabFourXL: $(e.target).find('[name=avDataTabFourXL]').val(),
      avDataAddTextTabOne: $(e.target).find('[name=avDataAddTextTabOne]').val(),
      avDataAddTextTabTwo: $(e.target).find('[name=avDataAddTextTabTwo]').val(),
      avDataUrl: $(e.target).find('[name=avDataUrl]').val(),
      avDataVideoUrl: $(e.target).find('[name=avDataVideoUrl]').val(),
      avDataFacebookData: $(e.target).find('[name=avDataFacebookData]').val(),
      avDataTwitterData: $(e.target).find('[name=avDataTwitterData]').val(),
      avDataGplusData: $(e.target).find('[name=avDataGplusData]').val(),
      avDataYoutubeData: $(e.target).find('[name=avDataYoutubeData]').val(), 
      avDataCountImages: $(e.target).find('[name=avDataCountImages]').val(),    
      avDataUpdatedAt: new Date().getTime()
    };
    
    Meteor.call('updateAvData', avDataId, avData, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Portaleinstellung erfolgreich geändert');
    });
    
    avData = '';
    
    // Froala Editor
    if ($('#avDataTextOneS').data('fa.editable')) {
      avDataTextOneS = $(e.target).find('#avDataTextOneS').editable('getHTML');
    } else {
      avDataTextOneS = $(e.target).find('[name=avDataTextOneS]').val();
    }
    if ($('#avDataTextOneM').data('fa.editable')) {
      avDataTextOneM = $(e.target).find('#avDataTextOneM').editable('getHTML');
    } else {
      avDataTextOneM = $(e.target).find('[name=avDataTextOneM]').val();
    }
    if ($('#avDataTextOneL').data('fa.editable')) {
      avDataTextOneL = $(e.target).find('#avDataTextOneL').editable('getHTML');
    } else {
      avDataTextOneL = $(e.target).find('[name=avDataTextOneL]').val();
    }
    if ($('#avDataTextOneXL').data('fa.editable')) {
      avDataTextOneXL = $(e.target).find('#avDataTextOneXL').editable('getHTML');
    } else {
      avDataTextOneXL = $(e.target).find('[name=avDataTextOneXL]').val();
    }
    if ($('#avDataTextTwoM').data('fa.editable')) {
      avDataTextTwoM = $(e.target).find('#avDataTextTwoM').editable('getHTML');
    } else {
      avDataTextTwoM = $(e.target).find('[name=avDataTextTwoM]').val();
    }
    if ($('#avDataTextTwoL').data('fa.editable')) {
      avDataTextTwoL = $(e.target).find('#avDataTextTwoL').editable('getHTML');
    } else {
      avDataTextTwoL = $(e.target).find('[name=avDataTextTwoL]').val();
    }
    if ($('#avDataTextTwoXL').data('fa.editable')) {
      avDataTextTwoXL = $(e.target).find('#avDataTextTwoXL').editable('getHTML');
    } else {
      avDataTextTwoXL = $(e.target).find('[name=avDataTextTwoXL]').val();
    }
    if ($('#avDataTextThreeL').data('fa.editable')) {
      avDataTextThreeL = $(e.target).find('#avDataTextThreeL').editable('getHTML');
    } else {
      avDataTextThreeL = $(e.target).find('[name=avDataTextThreeL]').val();
    }
    if ($('#avDataTextThreeXL').data('fa.editable')) {
      avDataTextThreeXL = $(e.target).find('#avDataTextThreeXL').editable('getHTML');
    } else {
      avDataTextThreeXL = $(e.target).find('[name=avDataTextThreeXL]').val();
    }
    if ($('#avDataTextFourXL').data('fa.editable')) {
      avDataTextFourXL = $(e.target).find('#avDataTextFourXL').editable('getHTML');
    } else {
      avDataTextFourXL = $(e.target).find('[name=avDataTextFourXL]').val();
    }
    if ($('#avDataAddTextOne').data('fa.editable')) {
      avDataAddTextOne = $(e.target).find('#avDataAddTextOne').editable('getHTML');
    } else {
      avDataAddTextOne = $(e.target).find('[name=avDataAddTextOne]').val();
    }
    if ($('#avDataAddTextTwo').data('fa.editable')) {
      avDataAddTextTwo = $(e.target).find('#avDataAddTextTwo').editable('getHTML');
    } else {
      avDataAddTextTwo = $(e.target).find('[name=avDataAddTextTwo]').val();
    }
    if ($('#avDataNotes').data('fa.editable')) {
      avDataNotes = $(e.target).find('#avDataNotes').editable('getHTML');
    } else {
      avDataNotes = $(e.target).find('[name=avDataNotes]').val();
    }
    
    avDataText = {
      avDataTextOneS: avDataTextOneS,
      avDataTextOneM: avDataTextOneM,
      avDataTextOneL: avDataTextOneL,
      avDataTextOneXL: avDataTextOneXL,
      avDataTextTwoM: avDataTextTwoM,
      avDataTextTwoL: avDataTextTwoL,
      avDataTextTwoXL: avDataTextTwoXL,
      avDataTextThreeL: avDataTextThreeL,
      avDataTextThreeXL: avDataTextThreeXL,
      avDataTextFourXL: avDataTextFourXL,
      avDataAddTextOne: avDataAddTextOne,
      avDataAddTextTwo: avDataAddTextTwo,
      avDataNotes: avDataNotes 
    }; 
    
    Meteor.call('updateAvDataText', avDataId, avDataText, function(error, result){
      if(error)
        toastr.warning(error);
      if(result)
        toastr.success('Texte erfolgreich geändert');
    });
  }
});