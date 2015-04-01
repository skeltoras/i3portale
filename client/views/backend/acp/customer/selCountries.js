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

// - Select list for template bookNew
Template.listCountriesSelect.helpers({
  listCountries: function(){
    var listItems = AvCountries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    listItems.forEach(function(country){
      if(country.countryName == 'Deutschland') {
        listItem += ['<option value="' + country.countryOldId + '" selected>' + country.countryName + '</option>'];       
      } else {
        listItem += ['<option value="' + country.countryOldId + '">' + country.countryName + '</option>']; 
      }
    }); 
    return listItem;
  }
});

// - Select list for template bookNew
Template.editCountriesSelect.helpers({
  listCountries: function(){
    var listItems = AvCountries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    var getCustomerData = AvCustomers.findOne({_id: this._id}).avCountry;
    var getCustomerCountry = [];
    if(getCustomerData){
      listItems.forEach(function(country){
        var countryId = country.countryOldId;
        var countryName = country.countryName;
        var testFor = false;
        if(countryName == getCustomerData){
          listItem += ['<option value="' + countryId + '" selected>' + countryName + '</option>'];
        } else {
          listItem += ['<option value="' + countryId + '">' + countryName + '</option>'];
        }
      });
    } else {
      listItems.forEach(function(country){
        var countryId = country.countryOldId;
        var countryName = country.countryName;
        listItem += ['<option value="' + countryId + '">' + countryName + '</option>']; 
      });
    }
    return listItem;
  }
});

Template.editCountries.helpers({
  editCountries: function(){
    Meteor.subscribe('getAllAvCountries');
    var listItems = AvCountries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    var getRentingsData = RpRentings.findOne({_id: this._id}).rpRentingsCountries;
    var getRentingsCountry = [];
    if(getRentingsData){
      listItems.forEach(function(country){
        var countryId = country.countryOldId;
        var countryName = country.countryName;
        var testFor = false;
        
        for (var i in getRentingsData) { 
          if (getRentingsData.hasOwnProperty(i)) {
            getRentingsCountry = getRentingsData[i].name;
            if(countryName == getRentingsCountry){
              listItem += ['<option value="' + countryId + '" selected>' + countryName + '</option>'];
              testFor = true;
              break;
            }
          }
        }      
        if(!testFor) {
          listItem += ['<option value="' + countryId + '">' + countryName + '</option>'];  
        }
      });
    } else {
      listItems.forEach(function(country){
        var countryId = country.countryOldId;
        var countryName = country.countryName;
        listItem += ['<option value="' + countryId + '">' + countryName + '</option>']; 
      });
    }
    return listItem;
  }
});