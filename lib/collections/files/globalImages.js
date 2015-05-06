globalImages = new FS.Collection('globalImages', {
  stores: [
    new FS.Store.GridFS('globalImgOriginal'),
    new FS.Store.GridFS('globalImgHeaderL', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(1200, 350).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('globalImgHeaderS', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(980, 286).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('globalImgHeaderThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(300, 88).stream('PNG').pipe(writeStream);
      }
    })
  ],    
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});

globalImages.allow({
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