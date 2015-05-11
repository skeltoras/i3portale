//-- template onCreated functions
Template.rpSlider.onCreated(function () {
});

//-- template onDestroyed functions
Template.rpSlider.onDestroyed(function () {
});

//-- template onRendered functions
Template.rpSlider.onRendered(function () {
  $('.carousel').carousel({
    interval: 6000,
    keyboard: false
  });
});

//-- template helpers                            
Template.rpSlider.helpers({
});

//-- template events
Template.rpSlider.events({ 
});