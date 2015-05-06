rpImages = new FS.Collection('rpImages', {
  stores: [
    new FS.Store.GridFS('rpImgOriginal'),
    new FS.Store.GridFS('rpImgLogo', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(150, 150).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('rpImgLogoThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(100, 100).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('rpImgDefaultImage', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'jpg',
          type: 'image/jpeg'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(1200, 630).stream('JPG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('rpImgDefaultImageSmall', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'jpg',
          type: 'image/jpeg'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(600, 315).stream('JPG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('rpImgDefaultImageThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(100, 100).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('rpImgHeaderL', {
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
    new FS.Store.GridFS('rpImgHeaderS', {
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
    new FS.Store.GridFS('rpImgHeaderThumb', {
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
    new FS.Store.GridFS('rpImgGallery', {
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
    new FS.Store.GridFS('rpImgGalleryThumb', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(150, 150).crop(100, 100).stream('PNG').pipe(writeStream);
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
rpImages.allow({
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