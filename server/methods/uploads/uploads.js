Meteor.methods({
  //Set Customer Data
  uploadNewCustomers: function(data){
    var adressId = Number(data.idAdresse);
    var customerId = data.idAdresse;  
    var customerName = data.tName;
    var checkOne = Customers.find({customerId: customerId}).count();
    var checkTwo = CustomersPending.find({customerId: customerId}).count();
    if(checkOne > 0 || checkTwo > 0) {
      console.log('Kunde ' + customerId + ' / ' + customerName + ' schon vorhanden'); // Server Console
    } else {      
      var customerSiteUrl = customerName.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss") + '_' + _.uniqueId();
      customerSiteUrl = customerSiteUrl.toLowerCase();    
      var customersPendingData = {
        customerId: customerId,
        customerName: customerName,
        customerLongName: data.tName2 + ' ' + data.tRechtsform,
        customerDepartment: data.tZusatz,
        customerPostAddition: data.tCoPost,
        customerStreet: data.tStrasse,
        customerPlz: data.tPLZ,
        customerCity: data.tOrt,
        customerCountry: '',
        customerTelephoneFormal: data.tTelefon,
        customerTelephoneInternal: '',
        customerTelefax: data.tFax,
        customerMobil: '',
        customerMailFormal: data.tEmail,
        customerMailInternal: data.tEmail3,
        customerUrl: data.tWeb,
        customerInfo: data.tKurzinfo,
        customerContact: data.tAnsprechpartner,
        customerNotes: data.mNotizen,
        customerSiteUrl: customerSiteUrl,     
        customerIsApproved: false,
        customerHasAv:  false,
        customerHasRP:  false,
        customerHasKG:  false,
        customerChanges: [{date: new Date().getTime(), content: 'Kunde importiert', user: 'Skeltoras'}],
        customerSubmitted: new Date().getTime(),
        customerUpdatedAt: new Date().getTime()
      }; 
      console.log('Kunde ' + customerId + ' angelegt'); // Server Console
      CustomersPending.insert(customersPendingData);
      
      //booleans
      var bLehrstellen = false;
      if(data.bLehrstellen == "-1") {
        bLehrstellen = true;  
      }
      var bPraktikum = false;
      if(data.bPraktikum == "-1") {
        bPraktikum = true;  
      }
      var bFreiwilligendienste = false;
      if(data.bFreiwilligendienste == "-1") {
        bFreiwilligendienste = true;  
      }
      var bMultiplikator = false;
      if(data.bMultiplikator == "-1") {
        bMultiplikator = true;  
      }
      var bProbeabo = false;
      if(data.bProbeabo == "-1") {
        bProbeabo = true;  
      }
      var bInteresseAnzeigen = false;
      if(data.bInteresseAnzeigen == "-1") {
        bInteresseAnzeigen = true;  
      }
      var bInteressePrintausgabe = false;
      if(data.bInteressePrintausgabe == "-1") {
        bInteressePrintausgabe = true;  
      }
      var bKeinBelegexemplar = false;
      if(data.bKeinBelegexemplar == "-1") {
        bKeinBelegexemplar = true;  
      }
      //numbers
      var nAnzahlMitarbeiter = Number(data.nAnzahlMitarbeiter);
      var nAnzahlLehrstellen = Number(data.nAnzahlLehrstellen);
      var nAnzahlZivi = Number(data.nAnzahlZivi);
      var nAnzahlPraktikum = Number(data.nAnzahlPraktikum);
      var nAnzahlFsj = Number(data.nAnzahlFsj);
      var nAnzahlStudenten = Number(data.nAnzahlStudenten);
      var nAnzahlProspekte = Number(data.nAnzahlProspekte);
      var xLand = Number(data.xLand);
      var customersDetailData = {
        customerId: customerId,
        idAdresse: adressId,
        nKundennummer: data.nKundennummer,
        dErfassung: data.dErfassung,
        dAenderung: data.dAenderung,
        dRuecklauf: data.dRuecklauf,
        tName: data.tName,
        tName2: data.tName2,
        tRechtsform: data.tRechtsform,
        tZusatz: data.tZusatz,
        tCoPost: data.tCoPost,
        tOrtsteil: data.tOrtsteil,
        tKanton: data.tKanton,
        tTelefon: data.tTelefon,
        tTelefon2: data.tTelefon2,
        tEmail2: data.tEmail2,
        tEmail4: data.tEmail4,
        tFragenAnKunde: data.tFragenAnKunde, 
        tMitteilung: data.tMitteilung,
        mSelbstdarstellung: data.mSelbstdarstellung, 
        nAnzahlMitarbeiter: nAnzahlMitarbeiter,
        bLehrstellen: bLehrstellen, 
        nAnzahlLehrstellen: nAnzahlLehrstellen,
        tLehrberuf: data.tLehrberuf,
        tLsOffenAb: data.tLsOffenAb,
        nAnzahlZivi: nAnzahlZivi,
        tBereichZivi: data.tBereichZivi,
        tZsOffenAb: data.tZsOffenAb,
        bPraktikum: bPraktikum,
        nAnzahlPraktikum: nAnzahlPraktikum,
        tBereichPraktikum: data.tBereichPraktikum,
        dPsOffenAb: data.dPsOffenAb,
        bFreiwilligendienste: bFreiwilligendienste,
        nAnzahlFsj: nAnzahlFsj,
        tBereichFsj: data.tBereichFsj,
        tFsOffenAb: data.tFsOffenAb,
        nAnzahlStudenten: nAnzahlStudenten,
        tSelektion: data.tSelektion,
        xAdresskapitel: data.xAdresskapitel,
        xSperre: data.xSperre,
        tSperrgrund: data.tSperrgrund,
        dSperrdatum: data.dSperrdatum,
        bVerband: data.bVerband,
        tVerband: data.tVerband,
        bMultiplikator: bMultiplikator,
        bProbeabo: bProbeabo,
        bInteresseAnzeigen: bInteresseAnzeigen,
        bInteressePrintausgabe: bInteressePrintausgabe,
        bKeinBelegexemplar: bKeinBelegexemplar,
        tGeorderteAnzeigen: data.tGeorderteAnzeigen,
        nAnzahlProspekte: nAnzahlProspekte,
        tRegistername: data.tRegistername,
        tAlpha1: data.tAlpha1,
        tAlpha2: data.tAlpha2,
        tAlpha3: data.tAlpha3,
        nPrioritaet: data.nPrioritaet, 
        nSeitennummer: data.nSeitennummer,
        bGeprueft: data.bGeprueft,
        tAnmerkungen1: data.tAnmerkungen1,
        tAnmerkungen2: data.tAnmerkungen2,
        bFreigabeSelbstdarstellung: data.bFreigabeSelbstdarstellung,
        bKurseFreizeitbereich: data.bKurseFreizeitbereich,
        bBerufsbildungslehrgaenge: data.bBerufsbildungslehrgänge,
        mKursbeschreibung: data.mKursbeschreibung,
        bFreigabeKursbeschreibung: data.bFreigabeKursbeschreibung,
        mKursthema: data.mKursthema,
        tAnmerkungen3: data.tAnmerkungen3,
        tAnmerkungen4: data.tAnmerkungen4, 
        tAnmerkungen5: data.tAnmerkungen5, 
        tAnmerkungen6: data.tAnmerkungen6,
        xLand: xLand,
        tKInfo2: data.tKInfo2,
        tZusatztext: data.tZusatztext,
        bSonderanzeige: data.bSonderanzeige,
        avChanges: [{date: new Date().getTime(), content: 'Kundendaten importiert', user: 'Skeltoras'}],
        avSubmitted: new Date().getTime(),
        avUpdatedAt: new Date().getTime()     
      };
      console.log('Kundendaten ' + customerId + ' angelegt'); // Server Console
      CustomersDetail.insert(customersDetailData);
    }
  },
  uploadCountries: function(data){
    var countryId = Number(data.idLand);  
    var countryName = data.tLand_de;    
    var check = Countries.find({countryId: countryId}).count();
    if(check > 0) {
      console.log('Land ' + countryId + ' / ' + countryName + ' schon vorhanden'); // Server Console
    } else {    
      countryData = {
        countryId: countryId,
        countryShortName: data.tLandId,
        countryName: countryName,
        nLandnummer: data.nLandnummer,
        tKuerzel: data.tKuerzel,
        tInfo: data. tInfo,
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()
      }
      Countries.insert(countryData);
      console.log('Land ' + countryId + ' / ' + countryName + ' angelegt'); // Server Console
      // -- Fill Customers country-fields
      var getCustomersDetail = CustomersDetail.find({xLand: countryId});
      getCustomersDetail.forEach(function(customer){
        CustomersPending.update({customerId: customer.customerId}, {$set: {customerCountry: countryName}});
        Customers.update({customerId: customer.customerId}, {$set: {customerCountry: countryName}});
        console.log('Land ' + countryName + ' bei ' + customer.customerId + ' eingetragen'); // Server Console 
      });
    }
  },
  uplAvChapters: function(data){
    var chapterId = data.idAdresskapitel;
    var chapterShort = data.tKuerzel;
    var check = AvChapters.find({chapterId: chapterId}).count();    
    if(check > 0) {
      console.log('Kapitel ' + chapterShort + ' schon vorhanden'); // server console
    } else {
      var chapterData = [];   
      chapterData = {
        chapterId: chapterId,
        chapterNo: data.tKapitelnummer,
        chapterIndex: data.nKapitelindex,
        chapterShort: chapterShort,
        chapterName: data.tAdresskapitel_de,
        chapterShortName: data.tKopfzeile,
        chapterDescription: data.mEinfuehrung_de,
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()
      } 
      AvChapters.insert(chapterData);
      console.log(chapterShort + ' eingetragen'); // server console
    } 
  },
  uplAvChaptersSections: function(data){
    var chapterIndex = data.idAdressbereich;
    var name = data.tName_de;
    var setData = AvChapters.find({chapterIndex: chapterIndex});   
    setData.forEach(function(section){
      AvChapters.update(section._id, {$set: {chapterSection: name}});
      console.log(name + ' bei ' + section.chapterShort + ' eingetragen'); // server console    
    })
  },
  uplAvAssociations: function(data) {    
    var associationId = data.idVerband;
    var associationShort = data.Kuerzel;
    var check = AvAssociations.find({associationId: associationId}).count();   
    if(check > 0) {
      console.log('Verband ' + associationShort + ' schon vorhanden'); // server console
    } else {
      var associationName = data.Langname;
      var avAssoctiationsData = [];
      avAssoctiationsData = {
        associationId: associationId,
        associationShort: associationShort,
        associationName: associationName,
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()  
      }
      AvAssociations.insert(avAssoctiationsData);
      console.log(associationShort + ' eingetragen'); // server console
    }
  },
  uplAvBlockIndicators: function(data) {    
    var blocksId = data.id;
    var blocksShort = data.Kuerzel;
    var check = AvBlockIndicators.find({blocksId: blocksId}).count();   
    if(check > 0) {
      console.log('Sperre ' + blocksShort + ' schon vorhanden'); // server console
    } else {
      var blocksName = data.Bezeichnung;
      var avAssoctiationsData = [];
      avBlockIndicatorsData = {
        blocksId: blocksId,
        blocksShort: blocksShort,
        blocksName: blocksName,
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()  
      }
      AvBlockIndicators.insert(avBlockIndicatorsData);
      console.log(blocksShort + ' eingetragen'); // server console
    }
  },
  //Zuordnungen
  uplAvChaptersAssign: function(data) {    
    var chapterId = data.idAdresskapitel;
    var avCustomerId = data.idAdresse;
    var checkPrimary = data.Haupteintrag;
    var getChapter = AvChapters.findOne({chapterId: chapterId});
    var isPrimary = false;
    var customersData = [];
    if(checkPrimary == 1){
      isPrimary = true;  
    }    
    customersData = {
      id: chapterId,
      shortname: getChapter.chapterShort,
      name: getChapter.chapterName,
      isPrimary: isPrimary  
    }
    var setData = CustomersDetail.find({customerId: avCustomerId});    
    setData.forEach(function(customer){
      CustomersDetail.update(customer._id, {$addToSet: {avAddressChapters: customersData}});
      console.log(getChapter.chapterShort + ' bei ' + customer.customerName + ' eingetragen');    
    });
  },
   
});