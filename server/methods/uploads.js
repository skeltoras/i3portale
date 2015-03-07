Meteor.methods({
  uploadCountriesData: function(data) {
    
    var countryId = data.idLand;
    var countryName = data.tLand_de;
    var countryData = [];
    
    countryData = {
      countryOldId: countryId,
      countryName: countryName,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
    
    // -- Fill customer fields
    /*
    var getCustomers = AvCustomers.find({avCountryOldId: countryId});
    getCustomers.forEach(function(customer){
      var ret = AvCustomers.update(customer._id, {$set: {avCountry: countryName}});  
      console.log(ret);
    });
    */
    var check = Countries.find({countryOldId: countryId}).count();
    
    if(check > 0) {
      console.log('Land ' + countryName + ' schon vorhanden'); // server console
    } else {
      Countries.insert(countryData);
      console.log(countryName + ' eingetragen');
    } 
  },
  uploadChaptersData: function(data) {
    
    var chapterOldId = data.idAdresskapitel;
    var chapterShort = data.tKuerzel;
    var chapterData = [];
    
    chapterData = {
      chapterOldId: chapterOldId,
      chapterNo: data.tKapitelnummer,
      chapterIndex: data.nKapitelindex,
      chapterShort: chapterShort,
      chapterName: data.tAdresskapitel_de,
      chapterShortName: data.tKopfzeile,
      chapterDescription: data.mEinfuehrung_de,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
    
    var check = AddressChapters.find({chapterOldId: chapterOldId}).count();
    
    if(check > 0) {
      console.log('Kapitel ' + chapterShort + ' schon vorhanden'); // server console
    } else {
      AddressChapters.insert(chapterData);
      console.log(chapterShort + ' eingetragen');
    } 
  },
  uploadChaptersSections: function(data) {
    
    var chapterIndex = data.idAdressbereich;
    var name = data.tName_de;
    var sectionsData = [];
    
    sectionsData = {
      id: chapterIndex,
      name: name
    }
    
    var setData = AddressChapters.find({chapterIndex: chapterIndex});
    
    setData.forEach(function(section){
      AddressChapters.update(section._id, {$addToSet: {sections: sectionsData}});
      console.log(name + ' bei ' + section.chapterShort + ' eingetragen');    
    })
  },
  uploadChaptersIds: function(data) {
    
    var chapterId = data.idAdresskapitel;
    var avCustomerId = data.idAdresse;
    var checkPrimary = data.Haupteintrag;
    var getChapter = AddressChapters.findOne({chapterOldId: chapterId});
    var isPrimary = false;
    var avCustomersData = [];

    if(checkPrimary == 1){
      isPrimary = true;  
    }
    
    avCustomersData = {
      id: chapterId,
      short: getChapter.chapterShort,
      name: getChapter.chapterName,
      isPrimary: isPrimary  
    }

    var setData = AvCustomers.find({avIdOld: avCustomerId});
    
    setData.forEach(function(customer){
      AvCustomers.update(customer._id, {$addToSet: {avAddressChapters: avCustomersData}});
      console.log(getChapter.chapterShort + ' bei ' + customer.avName1Old + ' eingetragen');    
    });
  },
  uploadAvAssociations: function(data) {
    
    var associationOldId = data.idVerband;
    var associationShort = data.Kuerzel;
    var associationName = data.Langname;
    var avAssoctiationsData = [];

    avAssoctiationsData = {
      associationOldId: associationOldId,
      associationShort: associationShort,
      associationName: associationName,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()  
    }

    var check = AvAssociations.find({associationOldId: associationOldId}).count();
    
    if(check > 0) {
      console.log('Verband ' + associationShort + ' schon vorhanden'); // server console
    } else {
      AvAssociations.insert(avAssoctiationsData);
      console.log(associationShort + ' eingetragen');
    }
  },
  uploadAvAssociationsIds: function(data) {
    
    var associationOldId = data.idVerband;
    var avCustomerId = data.idAdresse;
    var getAssociation = AvAssociations.findOne({associationOldId: associationOldId});
    var avCustomersData = [];

    avAssociationsData = {
      id: associationOldId,
      short: getAssociation.associationShort,
      name: getAssociation.associationName, 
    }

    var setData = AvCustomers.find({avIdOld: avCustomerId});
    
    setData.forEach(function(customer){
      AvCustomers.update(customer._id, {$addToSet: {avAssociations: avAssociationsData}});
      console.log(getAssociation.associationShort + ' bei ' + customer.avName1Old + ' eingetragen');    
    });
  },
  uploadAvBlockIndicators: function(data) {
    
    var blocksOldId = data.id;
    var blocksShort = data.Kuerzel;
    var blocksName = data.Bezeichnung;
    var avAssoctiationsData = [];

    avBlockIndicatorsData = {
      blocksOldId: blocksOldId,
      blocksShort: blocksShort,
      blocksName: blocksName,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()  
    }

    var check = avBlockIndicators.find({blocksOldId: blocksOldId}).count();
    
    if(check > 0) {
      console.log('Sperre ' + blocksShort + ' schon vorhanden'); // server console
    } else {
      avBlockIndicators.insert(avBlockIndicatorsData);
      console.log(blocksShort + ' eingetragen');
    }
  },
  uploadAvBlockIndicatorsIds: function(data) {
    
    var blocksOldId = data.idSperre;
    var avCustomerId = data.idAdresse;
    var getBlockIndicator = avBlockIndicators.findOne({blocksOldId: blocksOldId});
    var avCustomersData = [];

    avBlockIndicatorsData = {
      id: blocksOldId,
      short: getBlockIndicator.blocksShort,
      name: getBlockIndicator.blocksName,
      reason: '',
      blockDate: new Date().getTime()   
    }

    var setData = AvCustomers.find({avIdOld: avCustomerId});
    
    setData.forEach(function(customer){
      AvCustomers.update(customer._id, {$addToSet: {avBlockIndicators: avBlockIndicatorsData}});
      console.log(getBlockIndicator.blocksShort + ' bei ' + customer.avName1Old + ' eingetragen');    
    });
  }
});