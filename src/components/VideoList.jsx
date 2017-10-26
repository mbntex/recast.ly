var VideoList = (props) => (
  
  <div>
    { 
      props.videoData.map((video, i) => 
        <VideoListEntry key={i}/>
      )
    }
  </div>    
);


  /*<div className="video-list">
    <div><h5><em>videoListEntry</em> {props.videoData[0].snippet.channelTitle}</h5></div>
    <div><h5><em>videoListEntry</em> Hello </h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div> 
  </div> */

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videoData: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
