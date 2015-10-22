// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){  
  },

  playFirst: function () {
    // console.log('playFirst trigger sent from SongQueue');
    this.trigger('playFirst', this);
  }

});