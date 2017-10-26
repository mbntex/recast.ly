class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      currentSearch: 'test'
    };
  }  
 
  clickHandler (info) {
    this.setState({currentVideo: info});
  }

  changeHandler(e) {
    this.setState({currentSearch: e.target.value});
  }

  searchClickHandler() {
    var fn = (info) => { this.setState({videos: info.items, currentVideo: info.items[0]}); };
    // var fn = function(info) { this.setState({videos: info.items, currentVideo: info.items[0]}); }.bind(this);
    console.log('CURRENT SEARCH STATE IS = ', this.state.currentSearch);
    console.log(window.searchYouTube(
      //OPTIONS OBJECT
      {
        q: this.state.currentSearch,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        part: 'snippet',
        type: 'video'
      },
      // function(e) {
      //   console.log(e, "the event");
      // });
      //CALLBACK
      fn
  ));

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search ourOnChange={this.changeHandler.bind(this)} ourSearchClick={this.searchClickHandler.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer playerData={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videoData={this.state.videos} titleClick={this.clickHandler.bind(this)}/>
          </div>
        </div>
      </div>   
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

