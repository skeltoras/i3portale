Meteor.methods({
  setAvPackages: function(pack, avDataId, settings) {
    if(pack=='avDataHasPackageS') {
      AvData.update(avDataId, {$set: {avDataHasPackageS: settings, avDataHasPackageM: false, avDataHasPackageL: false, avDataHasPackageXL: false}});  
    }
    if(pack=='avDataHasPackageM') {
      AvData.update(avDataId, {$set: {avDataHasPackageM: settings, avDataHasPackageS: false, avDataHasPackageL: false, avDataHasPackageXL: false}});  
    }
    if(pack=='avDataHasPackageL') {
      AvData.update(avDataId, {$set: {avDataHasPackageL: settings, avDataHasPackageS: false, avDataHasPackageM: false, avDataHasPackageXL: false}});  
    }
    if(pack=='avDataHasPackageXL') {
      AvData.update(avDataId, {$set: {avDataHasPackageXL: settings, avDataHasPackageS: false, avDataHasPackageM: false, avDataHasPackageL: false}});   
    }
    if(pack=='avDataHasAddTextOne') {
      AvData.update(avDataId, {$set: {avDataHasAddTextOne: settings}});   
    }
    if(pack=='avDataHasAddTextTwo') {
      AvData.update(avDataId, {$set: {avDataHasAddTextTwo: settings}});   
    }
    if(pack=='avDataHasWebsite') {
      AvData.update(avDataId, {$set: {avDataHasWebsite: settings}});   
    }
    if(pack=='avDataHasHeaderImg') {
      AvData.update(avDataId, {$set: {avDataHasHeaderImg: settings}});   
    }
    if(pack=='avDataHasGalleryS') {
      AvData.update(avDataId, {$set: {avDataHasGalleryS: settings, avDataHasGalleryM: false}});   
    }
    if(pack=='avDataHasGalleryM') {
      AvData.update(avDataId, {$set: {avDataHasGalleryM: settings, avDataHasGalleryS: false}});   
    }
    if(pack=='avDataHasVideo') {
      AvData.update(avDataId, {$set: {avDataHasVideo: settings}});   
    }
    if(pack=='avDataHasSocialMedia') {
      AvData.update(avDataId, {$set: {avDataHasSocialMedia: settings}});   
    }
  },
  updateAvData: function(avDataId, avData) {
    return AvData.update(avDataId, {$set: avData});
  },
  updateAvDataText: function(avDataId, avData) {
    return AvData.update(avDataId, {$set: avData});
  }
})