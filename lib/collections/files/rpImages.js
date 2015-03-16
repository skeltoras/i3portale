var rpHeaderImagesStore = new FS.Store.GridFS('rpHeaderImages');

rpHeaderImages = new FS.Collection('rpHeaderImages', {
 stores: [rpHeaderImagesStore]
});

rpHeaderImages.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

rpHeaderImages.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});