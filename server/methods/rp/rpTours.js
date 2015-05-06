Meteor.methods({
  setRPToursPackages: function(pack, rpToursId, settings) {
    if(pack=='toursHasPackageS') {
      RpTours.update(rpToursId, {$set: {toursHasPackageS: settings, toursHasPackageM: false, toursHasPackageL: false, toursHasPackageXL: false}});  
    }
    if(pack=='toursHasPackageM') {
      RpTours.update(rpToursId, {$set: {toursHasPackageM: settings, toursHasPackageS: false, toursHasPackageL: false, toursHasPackageXL: false}});  
    }
    if(pack=='toursHasPackageL') {
      RpTours.update(rpToursId, {$set: {toursHasPackageL: settings, toursHasPackageS: false, toursHasPackageM: false, toursHasPackageXL: false}});  
    }
    if(pack=='toursHasPackageXL') {
      RpTours.update(rpToursId, {$set: {toursHasPackageXL: settings, toursHasPackageS: false, toursHasPackageM: false, toursHasPackageL: false}});   
    }
    if(pack=='toursHasAddTextOne') {
      RpTours.update(rpToursId, {$set: {toursHasAddTextOne: settings}});   
    }
    if(pack=='toursHasAddTextTwo') {
      RpTours.update(rpToursId, {$set: {toursHasAddTextTwo: settings}});   
    }
    if(pack=='toursHasHeaderImg') {
      RpTours.update(rpToursId, {$set: {toursHasHeaderImg: settings}});   
    }
    if(pack=='toursHasGalleryS') {
      RpTours.update(rpToursId, {$set: {toursHasGalleryS: settings, toursHasGalleryM: false}});   
    }
    if(pack=='toursHasGalleryM') {
      RpTours.update(rpToursId, {$set: {toursHasGalleryM: settings, toursHasGalleryS: false}});   
    }
    if(pack=='toursHasVideo') {
      RpTours.update(rpToursId, {$set: {toursHasVideo: settings}});   
    }
    if(pack=='toursHasSocialMedia') {
      RpTours.update(rpToursId, {$set: {toursHasSocialMedia: settings}});   
    }
    if(pack=='toursHasHighlights') {
      RpTours.update(rpToursId, {$set: {toursHasHighlights: settings}});   
    }
    if(RpTours.find({_id: rpToursId}).count()==0){
      return false;
    } else {
      return true;
    }
  },
  updateRpTours: function(rpToursId, tours) {
    if(RpTours.find({_id: rpToursId}).count()==0){
      return RpTours.insert(tours);
    } else {
      return RpTours.update(rpToursId, {$set: tours});      
    }
  },
  updateRpToursText: function(rpToursId, tours) {
    return RpTours.update(rpToursId, {$set: tours});
  }
})