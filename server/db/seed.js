if (Customers.find().count() === 0) {
  for (i = 0; i <= 10; i++) {
    customer = Fake.user({fields: ['name', 'surname', 'fullname', 'email']});
    street = Fake.fromArray(['Gerbergasse 12', 'Hauptstr. 21']);
    additional  = Fake.fromArray(['', '', 'Vereinsheim', 'c/o Gedöns']);
    plz = _.random(10000, 99999);
    city = Fake.word();
    country = 'Deutschland';
    telephone = _.random(1809255, 9999999);
    telefax =  _.random(1809255, 9999999);
    emailOff = customer.email;
    url = "www.info3.de";
    socialFacebook = "info3verlag";
    socialTwitter = "info3verlag";
    socialGplus = "info3verlag";
    socialYoutube = "info3";
    notes = Fake.sentence(2);
    submitted = new Date().getTime();
    updatedAt = new Date().getTime();
    
    var customersSiteUrl = customer.name.toLowerCase() + '_' + customer.surname.toLowerCase();
    
    customerId = Customers.insert({
      customerName: customer.fullname,
      customersSiteUrl: customersSiteUrl,
      street: street,
      additional: additional,
      plz: plz,
      city: city,
      country: country,
      telephone: telephone,
      telefax: telefax,
      emailOff: emailOff,
      url: url,
      socialFacebook: socialFacebook,
      socialTwitter: socialTwitter,
      socialGplus: socialGplus,
      socialYoutube: socialYoutube,
      notes: notes,
      portals: [{date: new Date().getTime(), name: 'Vermietungen'},{date: new Date().getTime(), name: 'Reisen'}],
      submitted: submitted,
      updatedAt: updatedAt
    });
    
    var rentingsSiteUrl = 'ferienwohnung_' + customer.name.toLowerCase() + '_' + customer.surname.toLowerCase(); 
    var rentingsText = '<h2>' + Fake.word(2) + '</h2><p>' + Fake.sentence(20) + '<p><img src="http://placehold.it/600x300"><p>' + Fake.sentence(20);
    
    Rentings.insert({
      customerId: customerId,
      rentingsName: 'Ferienwohnung ' + customer.fullname,
      rentingsSiteUrl: rentingsSiteUrl,
      rentingsDefaultImage: 'http://placehold.it/400x300',
      rentingsStreet: street,
      rentingsAdditional: additional,
      rentingsPlz: plz,
      rentingsCity: city,
      rentingsCountries: [{code: 'DE', name: 'Deutschland'}],
      rentingsRegions: [{id: customerId, name: 'Schwarzwald'}],
      rentingsBegin: submitted,
      rentingsEnd: submitted,
      rentingsUrl: url,
      rentingsHasPackageS: false,
      rentingsHasPackageM: false,
      rentingsHasPackageL: false,
      rentingsHasPackageXL: true,
      rentingsTabOneS: '',
      rentingsTabOneM: '',
      rentingsTabOneL: '',
      rentingsTabOneXL: 'Übersicht',
      rentingsTabTwoM: '',
      rentingsTabTwoL: '',
      rentingsTabTwoXL: 'Reisedaten',
      rentingsTabThreeL: '',
      rentingsTabThreeXL: 'Abcdefghijkl',
      rentingsTabFourXL: 'Bcdefghijklm',
      rentingsTextOneS: '',
      rentingsTextOneM: '',
      rentingsTextOneL: '',
      rentingsTextOneXL: rentingsText,
      rentingsTextTwoM: '',
      rentingsTextTwoL: '',
      rentingsTextTwoXL: rentingsText,
      rentingsTextThreeL: '',
      rentingsTextThreeXL: rentingsText,
      rentingsTextFourXL: rentingsText,                  
      rentingsHasAddTextOne: true,
      rentingsHasAddTextTwo: true,
      rentingsAddTextTabOne: 'Cdefghijklmn',
      rentingsAddTextTabTwo: 'Defghijklmno',
      rentingsAddTextOne: rentingsText,
      rentingsAddTextTwo: rentingsText,
      rentingsHasHeaderImg: true,
      rentingsHeaderImg: 'http://placehold.it/1200x300', 
      rentingsHasHeaderSlider: false,
      rentingsHeaderSliderOne: '',
      rentingsHeaderSliderTwo: '',
      rentingsHeaderSliderThree: '',
      rentingsHeaderSliderFour: '',
      rentingsHasGalleryS: false,
      rentingsHasGalleryM: true,
      rentingsHasVideo: true,
      rentingsVideoUrl: 'https://www.youtube.com/watch?v=NgyRL6RgGWc',
      rentingsHasSocialMedia: true,
      changes: [{date: submitted, content: 'Vermietung erzeugt', user: 'Skeltoras'}],
      submitted: submitted,
      updatedAt: submitted  
    });

    var toursSiteUrl = 'reise_' + customer.name.toLowerCase() + '_' + customer.surname.toLowerCase(); 
    var toursText = '<h2>' + Fake.word(2) + '</h2><p>' + Fake.sentence(20) + '<p><img src="http://placehold.it/600x300"><p>' + Fake.sentence(20);
    
    Tours.insert({
      customerId: customerId,
      toursName: 'Reise ' + customer.fullname,
      toursSiteUrl: toursSiteUrl,
      toursDefaultImage: 'http://placehold.it/400x300',
      toursCountries: [{code: 'DE', name: 'Deutschland'}],
      toursRegions: [{id: customerId, name: 'Schwarzwald'}],
      toursBegin: submitted,
      toursEnd: submitted,
      toursUrl: url,
      toursHasPackageS: false,
      toursHasPackageM: false,
      toursHasPackageL: false,
      toursHasPackageXL: true,
      toursTabOneS: '',
      toursTabOneM: '',
      toursTabOneL: '',
      toursTabOneXL: 'Übersicht',
      toursTabTwoM: '',
      toursTabTwoL: '',
      toursTabTwoXL: 'Reisedaten',
      toursTabThreeL: '',
      toursTabThreeXL: 'Abcdefghijkl',
      toursTabFourXL: 'Bcdefghijklm',
      toursTextOneS: '',
      toursTextOneM: '',
      toursTextOneL: '',
      toursTextOneXL: toursText,
      toursTextTwoM: '',
      toursTextTwoL: '',
      toursTextTwoXL: toursText,
      toursTextThreeL: '',
      toursTextThreeXL: toursText,
      toursTextFourXL: toursText,                  
      toursHasAddTextOne: true,
      toursHasAddTextTwo: true,
      toursAddTextTabOne: 'Cdefghijklmn',
      toursAddTextTabTwo: 'Defghijklmno',
      toursAddTextOne: toursText,
      toursAddTextTwo: toursText,
      toursHasHeaderImg: true,
      toursHeaderImg: 'http://placehold.it/1200x300', 
      toursHasHeaderSlider: false,
      toursHeaderSliderOne: '',
      toursHeaderSliderTwo: '',
      toursHeaderSliderThree: '',
      toursHeaderSliderFour: '',
      toursHasGalleryS: false,
      toursHasGalleryM: true,
      toursHasVideo: true,
      toursVideoUrl: 'https://www.youtube.com/watch?v=NgyRL6RgGWc',
      toursHasSocialMedia: true,
      changes: [{date: submitted, content: 'Reise erzeugt', user: 'Skeltoras'}],
      submitted: submitted,
      updatedAt: submitted  
    });    
  }
};

if (Portals.find().count() === 0) {
  Portals.insert({
    portalName: 'Reisen',    
    submitted: new Date().getTime(),
    updatedAt: new Date().getTime()
  });
  Portals.insert({
    portalName: 'Vermietungen',    
    submitted: new Date().getTime(),
    updatedAt: new Date().getTime()
  });
}