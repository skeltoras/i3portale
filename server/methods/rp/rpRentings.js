Meteor.methods({
  createRentings: function(rentingsId, customerId) {
    if(RpRentings.find({_id: rentingsId}).count()==0){
      var data = [];
      data = {
        _id: rentingsId,
        customerId: customerId,
        rentingsIsActive: false,
        rentingsHasPackageS: false,
        rentingsHasPackageM: false,
        rentingsHasPackageL: false,
        rentingsHasPackageXL: false,
        rentingsHasAddTextOne: false,
        rentingsHasAddTextTwo: false,
        rentingsHasHeaderImg: false,
        rentingsHasGalleryS: false,
        rentingsHasGalleryM: false,
        rentingsHasVideo: false,
        rentingsHasSocialMedia: false,
        rentingsHasHighlights: false        
      }
      return RpRentings.insert(data);
    }
  },
  setRpRentingsPackages: function(pack, rpRentingsId, settings) {
    if(pack=='rentingsHasPackageS') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasPackageS: settings, rentingsHasPackageM: false, rentingsHasPackageL: false, rentingsHasPackageXL: false}});  
    }
    if(pack=='rentingsHasPackageM') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasPackageM: settings, rentingsHasPackageS: false, rentingsHasPackageL: false, rentingsHasPackageXL: false}});  
    }
    if(pack=='rentingsHasPackageL') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasPackageL: settings, rentingsHasPackageS: false, rentingsHasPackageM: false, rentingsHasPackageXL: false}});  
    }
    if(pack=='rentingsHasPackageXL') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasPackageXL: settings, rentingsHasPackageS: false, rentingsHasPackageM: false, rentingsHasPackageL: false}});   
    }
    if(pack=='rentingsHasAddTextOne') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasAddTextOne: settings}});   
    }
    if(pack=='rentingsHasAddTextTwo') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasAddTextTwo: settings}});   
    }
    if(pack=='rentingsHasHeaderImg') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasHeaderImg: settings}});   
    }
    if(pack=='rentingsHasGalleryS') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasGalleryS: settings, rentingsHasGalleryM: false}});   
    }
    if(pack=='rentingsHasGalleryM') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasGalleryM: settings, rentingsHasGalleryS: false}});   
    }
    if(pack=='rentingsHasVideo') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasVideo: settings}});   
    }
    if(pack=='rentingsHasSocialMedia') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasSocialMedia: settings}});   
    }
    if(pack=='rentingsHasHighlights') {
      RpRentings.update(rpRentingsId, {$set: {rentingsHasHighlights: settings}});   
    }
    if(RpRentings.find({_id: rpRentingsId}).count()==0){
      return false;
    } else {
      return true;
    }
  },
  updateRpRentings: function(rpRentingsId, rentings) {
    if(RpRentings.find({_id: rpRentingsId}).count()==0){
      return RpRentings.insert(rentings);
    } else {
      return RpRentings.update(rpRentingsId, {$set: rentings});      
    }
  },
  updateRpRentingsText: function(rpRentingsId, rentings) {
    return RpRentings.update(rpRentingsId, {$set: rentings});
  }
})