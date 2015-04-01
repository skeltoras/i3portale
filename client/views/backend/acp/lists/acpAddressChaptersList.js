//-- template onCreated functions
Template.acpAddressChaptersList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('acp_allAvChapters');
  });
});

//-- template onDestroyed functions
Template.acpAddressChaptersList.onDestroyed(function () {
});

//-- template onRendered functions
Template.acpAddressChaptersList.onRendered(function () {
});

//-- template helpers                            
Template.acpAddressChaptersList.helpers({
  getList: function() {
    return AvChapters.find({}, {sort: {chapterShort: 1}});
  }
});

//-- template events
Template.acpAddressChaptersList.events({ 
});