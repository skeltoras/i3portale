Template.listAllCountries.helpers({
  listCountries: function(){
    var listItems = Countries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    
    listItems.forEach(function(country){
      var countryId = country.countryId;
      var countryName = country.countryName;
      if(countryName == 'Deutschland') {
        listItem += ['<option value="' + countryId + '" selected>' + countryName + '</option>'];     
      } else {
        listItem += ['<option value="' + countryId + '">' + countryName + '</option>'];     
      }
    });
    return listItem;
  }
});