// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    
  },


  // Create a method for queueing a song that takes a parameter song
  // enqueue: function (song) {
  //   // Adds the song passed as arg to the storage array
  //   var currentQueue = this.get('_queue');
  //   console.log('currentQueue ===', currentQueue);
  //   currentQueue.push(song);
  //   this.set('_queue', currentQueue);
  // },

  // // Create a method for dequeueing a song that is initiated when app.currentSong is over or changes
  // dequeue: function () {
  //   // If queue is not empty
  //   if( this.queue.length > 0 ){
  //     // Calls .shift() on storage array, 
  //     var nextSong = this.queue.shift();
  //     // plays nextSong, which also sets app.currentSong via event listener ('play') in AppModel
  //     nextSong.play();
  //   }
  // }

});