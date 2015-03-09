// - Select2 list for template bookNew
Template.listCountries.helpers({
  //@since v0.8.0
  listCountries: function(){
    Meteor.subscribe('getAllAvCountries');
    var listItems = AvCountries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    listItems.forEach(function(country){
      listItem += ['<option value="' + country.countryOldId + '">' + country.countryName + '</option>']; 
    }); 
    return listItem;
  }
});