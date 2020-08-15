import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import Video, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import {connect} from 'react-redux';

const initialState = {
  fullscreen: false,
  play: false,
  currentTime: 0,
  duration: 0,
  showControls: true,
};

const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const [state, setState] = useState(initialState);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (props.url) {
      setUrl(props.url);
      handleStart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.url]);

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);

    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={showControls}>
        <View>
          <Video
            ref={videoRef}
            source={{
              uri: url,
            }}
            style={state.fullscreen ? styles.fullscreenVideo : styles.video}
            controls={false}
            resizeMode={'contain'}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            onEnd={onEnd}
            paused={!state.play}
          />
          {state.showControls && (
            <View style={styles.controlOverlay}>
              <PlayerControls
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
                playing={state.play}
                showPreviousAndNext={false}
                showSkip={true}
                skipBackwards={skipBackward}
                skipForwards={skipForward}
              />
              <View style={styles.videoFooter}>
                <ProgressBar
                  currentTime={state.currentTime}
                  duration={state.duration > 0 ? state.duration : 0}
                  onSlideStart={handlePlayPause}
                  onSlideComplete={handlePlayPause}
                  onSlideCapture={onSeek}
                />
                <TouchableOpacity
                  onPress={handleFullscreen}
                  hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                  style={styles.fullscreenButton}>
                  {state.fullscreen ? (
                    <MaterialIcons
                      name="fullscreen-exit"
                      size={24}
                      color="white"
                    />
                  ) : (
                    <MaterialIcons name="fullscreen" size={24} color="white" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  function handleOrientation(orientation) {
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
      ? (setState((s) => ({...s, fullscreen: true})), StatusBar.setHidden(true))
      : (setState((s) => ({...s, fullscreen: false})),
        StatusBar.setHidden(false));
  }

  function handleFullscreen() {
    state.fullscreen
      ? Orientation.unlockAllOrientations()
      : Orientation.lockToLandscapeLeft();
  }

  function handlePlayPause() {
    // If playing, pause and show controls immediately.
    if (state.play) {
      setState({...state, play: false, showControls: true});
      return;
    }

    setState({...state, play: true});
    setTimeout(() => setState((s) => ({...s, showControls: false})), 2000);
  }

  function handleStart() {
    // If playing, pause and show controls immediately.
    setState({...state, play: true});
    setTimeout(() => setState((s) => ({...s, showControls: false})), 2000);
  }

  function skipBackward() {
    videoRef.current.seek(state.currentTime - 15);
    setState({...state, currentTime: state.currentTime - 15});
  }

  function skipForward() {
    videoRef.current.seek(state.currentTime + 15);
    setState({...state, currentTime: state.currentTime + 15});
  }

  function onSeek(data) {
    videoRef.current.seek(data.seekTime);
    setState({...state, currentTime: data.seekTime});
  }

  function onLoadEnd(data) {
    setState((s) => ({
      ...s,
      duration: data.duration,
      currentTime: data.currentTime,
    }));
  }

  function onProgress(data) {
    setState((s) => ({
      ...s,
      currentTime: data.currentTime,
    }));
  }

  function onEnd() {
    setState({...state, play: false});
    videoRef.current.seek(0);
  }

  function showControls() {
    state.showControls
      ? setState({...state, showControls: false})
      : setState({...state, showControls: true});
  }
};

const mapStateToProps = (state) => ({
  url: state.course.videoUrl,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
  },
  video: {
    height: Dimensions.get('window').width * (9 / 16),
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  fullscreenButton: {
    paddingRight: 10,
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
  videoFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
});
