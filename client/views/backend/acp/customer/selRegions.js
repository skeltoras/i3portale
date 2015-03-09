// - Select2 list for template bookNew
Template.listRegions.helpers({
  //@since v0.8.0
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