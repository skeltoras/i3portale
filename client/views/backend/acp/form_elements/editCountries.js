Template.editAllCountries.helpers({
  listCountries: function(){
    var listItems = Countries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    
    //Check if Selektion or Pending
    if(CustomersSelection.find({_id: this._id}).count()>0){
      var getCustomerData = CustomersSelection.findOne({_id: this._id}).customerCountry;
    } else if(CustomersPending.find({_id: this._id}).count()>0){
      var getCustomerData = CustomersPending.findOne({_id: this._id}).customerCountry;
    } else {
      var getCustomerData = Customers.findOne({_id: this._id}).customerCountry;
    }
       
    var getCustomerCountry = [];
    if(getCustomerData){
      listItems.forEach(function(country){
        var countryId = country.countryId;
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
        var countryId = country.countryId;
        var countryName = country.countryName;
        listItem += ['<option value="' + countryId + '">' + countryName + '</option>']; 
      });
    }
    return listItem;
  }
});

Template.editCountriesS2MTours.helpers({
  listCountries: function(){
    var listItems = Countries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    if(RpTours.findOne({_id: this._id})) {
      var getToursData = RpTours.findOne({_id: this._id}).toursCountries;
      var getToursCountry = [];
      if(getToursData){
        listItems.forEach(function(country){
          var countryId = country.countryId;
          var countryName = country.countryName;
          var testFor = false;
          
          for (var i in getToursData) { 
            if (getToursData.hasOwnProperty(i)) {
              getToursCountry = getToursData[i].name;
              if(countryName == getToursCountry){
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
          var countryId = country.countryId;
          var countryName = country.countryName;
          listItem += ['<option value="' + countryId + '">' + countryName + '</option>']; 
        });
      }
    } else {
      listItems.forEach(function(country){
        var countryId = country.countryId;
        var countryName = country.countryName;
        listItem += ['<option value="' + countryId + '">' + countryName + '</option>']; 
      });
    }
    return listItem;
  }
});

Template.editCountriesS2MRentings.helpers({
  listCountries: function(){
    var listItems = Countries.find({}, {sort: {countryName: 1}});
    var listItem = [];
    if(RpRentings.findOne({_id: this._id})) {
      var getRentingsData = RpRentings.findOne({_id: this._id}).rentingsCountries;
      var getRentingsCountry = [];
      if(getRentingsData){
        listItems.forEach(function(country){
          var countryId = country.countryId;
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
          var countryId = country.countryId;
          var countryName = country.countryName;
          listItem += ['<option value="' + countryId + '">' + countryName + '</option>']; 
        });
      }
    } else {
      listItems.forEach(function(country){
        var countryId = country.countryId;
        var countryName = country.countryName;
        listItem += ['<option value="' + countryId + '">' + countryName + '</option>']; 
      });
    }
    return listItem;
  }
});