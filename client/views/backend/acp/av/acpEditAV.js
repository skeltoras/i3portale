//-- template onCreated functions
Template.acpEditAV.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var customerId = Session.get('customerId');
    self.subscribe('acp_av_getSingleCustomer', customerId);     
  });
});

//-- template onDestroyed functions
Template.acpEditAV.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpEditAV.onRendered(function () {
  $(document).ready(function() {
    $('.summernote').summernote({
      height: 100,
      lang: 'de-DE',
      toolbar: [
        ['insert', ['link', 'picture']],
        ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
        ['layout', ['paragraph']],
        ['misc', ['codeview', 'undo', 'redo']],
      ]
    });
  });
});

//-- template helpers                            
Template.acpEditAV.helpers({
});

//-- template events
Template.acpEditAV.events({ 
});