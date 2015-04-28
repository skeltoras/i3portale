Template.listChapters.helpers({
  listChapters: function(){
    var listItems = AvChapters.find({}, {sort: {chapterShort: 1}});
    var listItem = [];
    listItem += ['<option value="empty">--- Kapitel wählen ---</option>'];
    
    listItems.forEach(function(chapter){
      var chapterId = chapter._id;
      var chapterName = chapter.chapterName;
      listItem += ['<option value="' + chapterId + '">' + chapterName + '</option>']; 
    });
    return listItem;
  }
});