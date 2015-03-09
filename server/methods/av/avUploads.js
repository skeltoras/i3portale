Meteor.methods({
  //customerData
  uplAvCustomers: function(data){
    var avId = data.idAdresse;
    var avRandomSort = _.random(100000, 999999);
    var avName1 = data.tName;    
    var avSiteUrl = avName1.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();
    avSiteUrl = avSiteUrl.toLowerCase();
    var check = AvCustomers.find({avIdOld: avId}).count();    
    if(check > 0) {
      console.log('AV-Kunde ' + avName1 + ' schon vorhanden'); // server console
    } else {    
      var customerData = {
        avIdOld: avId,
        avKDNr: data.nKundennummer,
        avCreatedOld: data.dErfassung,
        avChangedOld: data.dAenderung,
        avName1Old: avName1,
        avName2Old: data.tName2,
        avLegalForm: data.tRechtsform,
        avDepartment: data.tZusatz,
        avPostAddition: data.tCoPost,
        avStreet: data.tStrasse,
        avPlz: data.tPLZ,
        avCity: data.tOrt,
        avCityPartOld: data.tOrtsteil,
        avCountryOldId: data.xLand,
        avTelephoneFormal: data.tTelefon,
        avTelephoneInformal: data.tTelefon2,
        avTelefax: data.tFax,
        avMailInternal: data.tEmail,
        avMailContact: data.tEmail2,
        avMailFormal: data.tEmail3,
        avMailNewsletter: data.tEmail4,
        avUrl: data.tWeb,
        avShortinfo: data.tKurzinfo,
        avSelfinfoOld: data.mSelbstdarstellung,
        avCountEmployees: data.nAnzahlMitarbeiter,
        avRegisterNameOld: data.tRegistername,
        avShortinfo2: data.tKInfo2,
        avContactPerson: data.tAnsprechpartner, 
        avRandomSort: avRandomSort,   
        avSiteUrl: avSiteUrl,
        avNotes: 'tSelektion: ' + data.tSelektion + ', xSperre' + data.xSperre + ', Sperrgrund: ' + data.tSperrgrund + ' am: ' + data.dSperrdatum + ', Notizen: ' + data.mNotizen, 
        avIsApproved: false,
        avIsFeatured: false,
        avChanges: [{date: new Date().getTime(), content: 'AV-Kunde importiert', user: 'Skeltoras'}],
        avSubmitted: new Date().getTime(),
        avUpdatedAt: new Date().getTime()      
      };    
      console.log('AV-Kunde ' + avId + ' angelegt'); // server console
      AvCustomers.insert(customerData);
    }  
  },
  uplAvCountries: function(data){
    var countryOldId = data.idLand;
    var countryName = data.tLand_de;
    var countryData = [];
    countryData = {
      countryOldId: countryOldId,
      countryIndex: data.tLandId,
      countryShort: data.tKuerzel,
      countryShortName: data.tInfo,
      countryName: countryName,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
    // -- Fill customer fields
    var getCustomers = AvCustomers.find({avCountryOldId: countryOldId});
    getCustomers.forEach(function(customer){
      var ret = AvCustomers.update(customer._id, {$set: {avCountry: countryName}});  
    });    
    var check = AvCountries.find({countryOldId: countryOldId}).count();    
    if(check > 0) {
      console.log('Land ' + countryName + ' schon vorhanden'); // server console
    } else {
      AvCountries.insert(countryData);
      console.log(countryName + ' eingetragen'); // server console
    }
  },
  uplAvChapters: function(data){
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
    var check = AvChapters.find({chapterOldId: chapterOldId}).count();    
    if(check > 0) {
      console.log('Kapitel ' + chapterShort + ' schon vorhanden'); // server console
    } else {
      AvChapters.insert(chapterData);
      console.log(chapterShort + ' eingetragen'); // server console
    } 
  },
  uplAvChaptersSections: function(data){
    var chapterIndex = data.idAdressbereich;
    var name = data.tName_de;
    var sectionsData = [];
    sectionsData = {
      id: chapterIndex,
      name: name
    }  
    var setData = AvChapters.find({chapterIndex: chapterIndex});   
    setData.forEach(function(section){
      AvChapters.update(section._id, {$addToSet: {sections: sectionsData}});
      console.log(name + ' bei ' + section.chapterShort + ' eingetragen'); // server console    
    })
  },
  uplAvAssociations: function(data) {    
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
      console.log(associationShort + ' eingetragen'); // server console
    }
  },
  uplAvBlockIndicators: function(data) {    
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
    var check = AvBlockIndicators.find({blocksOldId: blocksOldId}).count();   
    if(check > 0) {
      console.log('Sperre ' + blocksShort + ' schon vorhanden'); // server console
    } else {
      AvBlockIndicators.insert(avBlockIndicatorsData);
      console.log(blocksShort + ' eingetragen'); // server console
    }
  },
  uplAvCustomersLog: function(data){
    var avCustomerId = data.idAdresse;
    var avChangesData = [];
    
    avChangesData = {
      date: data.Timestamp,
      content: data.Aenderung + ', ' + data.Data,
      user: data.idMitarbeiter 
    }
    var setData = AvCustomers.find({avIdOld: avCustomerId});    
    setData.forEach(function(customer){
      AvCustomers.update(customer._id, {$addToSet: {avChanges: avChangesData}});
      console.log(data.id + ' bei ' + customer.avName1Old + ' eingetragen');    
    });
  },
  uplAvCampaigns: function(data) {    
    var campaignOldId = data.id;
    var campaignName = data.Aktion;
    var avCampaignsData = [];
    avCampaignsData = {
      campaignOldId: campaignOldId,
      campaignName: campaignName,
      submitted: data.Timestamp,
      updatedAt: new Date().getTime()  
    }
    var check = AvCampaigns.find({campaignOldId: campaignOldId}).count();   
    if(check > 0) {
      console.log('Aktion ' + campaignName + ' schon vorhanden'); // server console
    } else {
      AvCampaigns.insert(avCampaignsData);
      console.log(campaignName + ' eingetragen'); // server console
    }
  },
  uplAvEducations: function(data) {    
    var educationOldId = data.idArt;
    var educationShortName = data.Bezeichnung_Kurz;
    var educationName = data.Bezeichnung_Lang;
    var avEducationsData = [];
    avEducationsData = {
      educationOldId: educationOldId,
      educationShortName: educationShortName,
      educationName: educationName,
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()  
    }
    var check = AvEducations.find({educationOldId: educationOldId}).count();   
    if(check > 0) {
      console.log('Ausbildung ' + educationShortName + ' schon vorhanden'); // server console
    } else {
      AvEducations.insert(avEducationsData);
      console.log(educationShortName + ' eingetragen'); // server console
    }
  },
  //Zuordnungen
  uplAvChaptersAssign: function(data) {    
    var chapterId = data.idAdresskapitel;
    var avCustomerId = data.idAdresse;
    var checkPrimary = data.Haupteintrag;
    var getChapter = AvChapters.findOne({chapterOldId: chapterId});
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
  uplAvAssociationsAssign: function(data) {    
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
  uplAvBlockIndicatorsAssign: function(data) {    
    var blocksOldId = data.idSperre;
    var avCustomerId = data.idAdresse;
    var getBlockIndicator = AvBlockIndicators.findOne({blocksOldId: blocksOldId});
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
  },
  uplAvCampaignsAssign: function(data) {    
    var campaignOldId = data.idAktion;
    var avCustomerId = data.idAdresse;
    var checkFinished = data.istAbgeschlossen;
    var getCampaign = AvCampaigns.findOne({campaignOldId: campaignOldId});
    var isFinished = false;
    var avCampaignsData = [];
    if(checkFinished == 1){
      isFinished = true;  
    }         
    avCampaignsData = {
      id: campaignOldId,
      name: getCampaign.campaignName,
      isFinished: isFinished,
      date: data.Timestamp   
    }
    var setData = AvCustomers.find({avIdOld: avCustomerId});    
    setData.forEach(function(customer){
      AvCustomers.update(customer._id, {$addToSet: {avCampaigns: avCampaignsData}});
      console.log(getCampaign.campaignName + ' bei ' + customer.avName1Old + ' eingetragen');    
    });
  },
  uplAvEducationsAssign: function(data) {    
    var educationOldId = data.idKategorie;
    var avCustomerId = data.idAdresse;
    var checkFinished = data.Offen;
    var getEducation = AvEducations.findOne({educationOldId: educationOldId});
    var isFinished = false;
    var avEducationsData = [];
    if(checkFinished == 1){
      isFinished = true;  
    }         
    avEducationsData = {
      id: data.idAusbildung,
      oldId: educationOldId, 
      quantity: data.Anzahl,
      name: data.Bezeichnung,
      category: getEducation.educationName, 
      open: data.OffenAb,
      notes: data.Bemerkung,
      isFinished: isFinished,
      date: data.Timestamp   
    }
    var setData = AvCustomers.find({avIdOld: avCustomerId});    
    setData.forEach(function(customer){
      AvCustomers.update(customer._id, {$addToSet: {avEducations: avEducationsData}});
      console.log(getEducation.educationName + ' bei ' + customer.avName1Old + ' eingetragen');    
    });
  } 
});