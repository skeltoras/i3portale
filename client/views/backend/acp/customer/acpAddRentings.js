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
  this.tplReload = new ReactiveVar(0);
};

//-- template destroyed functions
Template.acpAddRentings.destroyed = function(){
};

//-- template rendered functions
Template.acpAddRentings.rendered = function(){
  if(Session.get('tplReload') == null) {
    Session.set('tplReload', 'yes');
  }
  $('#countryData').select2();
  $('#regionData').select2();
  $('#regionNewData').select2({
    tags : true,
    tokenSeparators : [',']
  });
  $('.summernote').summernote();
};

//-- template helpers
Template.acpAddRentings.helpers({
  rpRentingsHasPackageS: function() {
    Template.instance().tplReload.get();
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
  }
});