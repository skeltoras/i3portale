Meteor.methods({
  uploadAVData: function(data) {
    
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
        avNotes: '', 
        avIsApproved: false,
        avIsFeatured: false,
        avChanges: [{date: new Date().getTime(), content: 'AV-Kunde importiert', user: 'Skeltoras'}],
        avSubmitted: new Date().getTime(),
        avUpdatedAt: new Date().getTime()      
      };    
      AvCustomers.insert(customerData);
    }
  },
  setAvCustomersApproved: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avIsApproved: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avIsApproved: false}});
    }
  },
  setAvCustomersFeatured: function(customerId, settings) {
    if(settings == true){
      AvCustomers.update(customerId, {$set: {avIsFeatured: true}});
    } else {
      AvCustomers.update(customerId, {$set: {avIsFeatured: false}});
    }
  },
  updateAvCustomers:  function(customerId, customerData) {
    return AvCustomers.update(customerId, {$set: customerData});
  }
})