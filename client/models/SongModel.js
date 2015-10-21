// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  // Create a method on Song called enqueue
  enqueue: function(){
    // Adds 'this' to app.songQueue
    this.trigger('enqueue', this);
  }

});
