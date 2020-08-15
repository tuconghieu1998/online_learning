import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';
import {getYoutubeVideoID} from '../../../globals/helper';

const YoutubePlayer = (props) => {
  const [videoId, setVideoId] = useState('');
  useEffect(() => {
    setVideoId(getYoutubeVideoID(props.url));
  }, [props.url]);
  return (
    <YouTube
      videoId={videoId} // The YouTube video ID
      apiKey="AIzaSyBzM5ODO2MfkvPcNrIqOLzwv93zPx1sMPU"
      play={true} // control playback of video with true/false
      fullscreen={false} // control whether the video should play in fullscreen or inline
      //loop={true} // control whether the video should loop when ended
      //onReady={(e) => setHeight(301)}
      // onChangeState={(e) => this.setState({status: e.state})}
      // onChangeQuality={(e) => this.setState({quality: e.quality})}
      // onError={(e) => this.setState({error: e.error})}
      style={styles.youtube}
    />
  );
};

export default YoutubePlayer;

const styles = StyleSheet.create({
  youtube: {
    alignSelf: 'stretch',
    height: Dimensions.get('window').width * (9 / 16),
  },
});
