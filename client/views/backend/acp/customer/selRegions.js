Template.listRegions.helpers({
  listRegions: function(){
    Meteor.subscribe('getAllRpRegions');
    var listItems = RpRegions.find({});
    var listItem = [];
    listItems.forEach(function(region){
      listItem += ['<option value="' + region._id + '">' + region.regionName + '</option>']; 
    }); 
    return listItem;
  }
});

Template.editRegions.helpers({
  editRegions: function(){
    Meteor.subscribe('getAllRpRegions');
    var listItems = RpRegions.find({});
    var listItem = [];
    var getRentingsData = RpRentings.findOne({_id: this._id}).rpRentingsRegions;
    var getRentingsRegion = [];
    
    if(getRentingsData){
      listItems.forEach(function(region){
        var regionId = region._id;
        var regionName = region.regionName;
        var testFor = false;
        
        for (var i in getRentingsData) {
          if (getRentingsData.hasOwnProperty(i)) {
            getRentingsRegion = getRentingsData[i].name;          
            if(regionName == getRentingsRegion){
              listItem += ['<option value="' + regionId + '" selected>' + regionName + '</option>'];
              testFor = true;
              break;
            }
          }
        }      
        if(!testFor) {
          listItem += ['<option value="' + regionId + '">' + regionName + '</option>'];  
        }
      });
    } else {
      listItems.forEach(function(author){
        var regionId = region._id;
        var regionName = region.regionName;
        listItem += ['<option value="' + regionId + '">' + regionName + '</option>']; 
      });
    }
     
    return listItem;
  }
});