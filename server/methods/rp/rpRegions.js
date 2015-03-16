Meteor.methods({
  addRegion: function(regionData) {
    var regionName = regionData.regionName;
    if(RpRegions.find({regionName: regionName}).count()==0){
      var regionId = RpRegions.insert(regionData);
    }
    return regionId;
  }
})