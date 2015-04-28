avImages = new FS.Collection('avImages', {
  stores: [
    new FS.Store.GridFS('imgOriginal'),
    new FS.Store.GridFS('imgLogo', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(300, 300).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('imgLogoThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(300, 120).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('imgHeaderL', {
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
    new FS.Store.GridFS('imgHeaderS', {
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
    new FS.Store.GridFS('imgHeaderThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(300, 88).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('imgGallery', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(800, 800).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('imgGalleryThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(120, 120).stream('PNG').pipe(writeStream);
      }
    })
  ],    
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});

/*
avImages.deny({
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
*/
avImages.allow({
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