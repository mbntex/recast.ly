var VideoPlayer = (props) => (
  //var theId = {"http://www.youtube.com/embed/" + props.playerData.id.videoId};
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`http://www.youtube.com/embed/${props.playerData.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.playerData.snippet.title}</h3>
      <div>{props.playerData.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  playerData: React.PropTypes.object.isRequired
};
 
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
