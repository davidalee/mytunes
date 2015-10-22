// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // enqueue: function (song) {
  //   this.trigger('enqueue', this);
  // }

  // playFirst: function () {
  //   console.log('playFirst trigger sent from SongQueue');
  //   this.trigger('playFirst', this);
  // }
  
});