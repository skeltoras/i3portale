Meteor.publish('getAllAvChapters', function() {
  return AvChapters.find({});
});

Meteor.publish('getAvChaptersName', function(chapterIndex) {
  var chapterIndex = chapterIndex.toString();
  return AvChapters.find({chapterIndex: chapterIndex}, {fields: {'sections.name': 1}});
});