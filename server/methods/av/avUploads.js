Meteor.methods({
  //customerData
  uplAvCustomers: function(data){
    var avId = Number(data.idAdresse);
    var avRandomSort = _.random(100000, 999999);
    var avName1 = data.tName;    
    var avSiteUrl = avName1.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();
    avSiteUrl = avSiteUrl.toLowerCase();
    var check = AvCustomers.find({avIdOld: avId}).count();    
    if(check > 0) {
      console.log('AV-Kunde ' + avName1 + ' schon vorhanden'); // server console
    } else {    
      var customerData = {
        // old fields
        avIdOld: data.idAdresse,
        avKDNr: data.nKundennummer,
        avRandomSort: avRandomSort,
        avCreatedOld: data.dErfassung,
        avChangedOld: data.dAenderung,
        avName1Old: avName1,
        avName2Old: data.tName2,
        avRegisterNameOld: data.tRegistername,
        avAlpha1Old: data.tAlpha1,
        avAlpha2Old: data.tAlpha2,
        avAlpha3Old: data.tAlpha3,
        avLegalForm: data.tRechtsform,
        avCityPartOld: data.tOrtsteil,
        avKantonOld: data.tKanton,
        avCountryOldId: data.xLand,
        avQuestionToCustomerOld: data.tFragenAnKunde,
        avAnswerFromCustomerOld: data.tMitteilung,
        avbMultiplikatorOld: data.bMultiplikator,
        avbProbeaboOld: data.bProbeabo,
        avbInteresseAnzeigenOld: data.bInteresseAnzeigen,
        avbInteressePrintausgabeOld: data.bInteressePrintausgabe,
        avbKeinBelegexemplarOld: data.bKeinBelegexemplar,
        avmNotizenOld: data.mNotizen,
        avShortinfo2Old: data.tKInfo2,
        avSelfinfoOld: data.mSelbstdarstellung,
        avCountEmployeesOld: data.nAnzahlMitarbeiter,
        // actual fields
        avId: avId,
        avCustomerName: '',  
        avDepartment: data.tZusatz,
        avPostAddition: data.tCoPost,
        avStreet: data.tStrasse,
        avPlz: data.tPLZ,
        avCity: data.tOrt,
        avRegion: '',
        avCountry: '',
        avTelephoneFormal: data.tTelefon,
        avTelephoneInternal: data.tTelefon2,
        avTelefax: data.tFax,
        avMobil: '',
        avMailInternal: data.tEmail,
        avMailContact: data.tEmail2,
        avMailFormal: data.tEmail3,
        avMailNewsletter: data.tEmail4,
        avUrl: data.tWeb,
        avShortinfo: data.tKurzinfo,
        avContactPerson: data.tAnsprechpartner, 
        avSiteUrl: avSiteUrl,
        avNotes: 'tSelektion: ' + data.tSelektion + ', xSperre: ' + data.xSperre + ', Sperrgrund: ' + data.tSperrgrund + ' am: ' + data.dSperrdatum, 
        avIsApproved: false,
        avIsFeatured: false,
        avHasAV: false,
        avHasRP: false,
        avHasKG: false,
        avAddressChapters: [],
        avAssociations: [],
        avBlockIndicators: [],
        avCampaigns: [],
        avEducations: [],
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
      short: getBlockIndicator.blocksShort,
      name: getBlockIndicator.blocksName
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