



class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[1]
    };
  }  
 
  clickHandler () {
    console.log('CLICKED');
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
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

