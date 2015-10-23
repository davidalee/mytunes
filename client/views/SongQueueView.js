// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();

  },

  // events: {
  //   // 'ended': function () {
  //   //   console.log('ended heard on SongQueueView');
  //   // },

  //   'change:songQueueEntryViews': function (song) {
  //     console.log('add from SongQueueView'); 
  //     this.songQueueEntryViews.add(song);
  //     this.render();
  //   }
  // },

  render: function() {
    // render all of the songs in our songqueue
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
