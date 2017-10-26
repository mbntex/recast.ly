var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: function(data) {
      callback(data);
    },
        // function(data) {
    //   console.log('AJAX successful send', data);
    //   console.log('DATA Items =', data.items);
    //   // this.setState({videos: data.items});
    //   return data.items;
    // },
    error: function (data) {
      console.log('AJAX send failed', data);
    } 
  });
};

window.searchYouTube = searchYouTube;
