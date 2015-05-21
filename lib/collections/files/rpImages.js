rpImages = new FS.Collection('rpImages', {
  stores: [
    new FS.Store.GridFS('rpImgOriginal'),
    new FS.Store.GridFS('rpImgACPThumb', {
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
    new FS.Store.GridFS('rpImgACPThumbS', {
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
    new FS.Store.GridFS('rpImgOGL', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'jpg',
          type: 'image/jpeg'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(1200, 1200).crop(1200, 630).stream('JPG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('rpImgOGS', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'jpg',
          type: 'image/jpeg'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(600, 600).crop(600, 315).stream('JPG').pipe(writeStream);
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
        gm(readStream).resize(240, 240).crop(240, 126).stream('JPG').pipe(writeStream);
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
        gm(readStream).resize(120, 120).crop(120, 63).stream('PNG').pipe(writeStream);
      }
    }),
    new FS.Store.GridFS('rpImgHeaderXL', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(1920, 560).stream('PNG').pipe(writeStream);
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
    new FS.Store.GridFS('rpImgText', {
      beforeWrite: function(fileObj) {
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        gm(readStream).resize(400, 400).stream('PNG').pipe(writeStream);
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