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

const initialState = {
  fullscreen: false,
  play: false,
  currentTime: 0,
  duration: 0,
  showControls: true,
};

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [state, setState] = useState(initialState);

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
              uri:
                'https://storage.googleapis.com/itedu-bucket/Courses/9f3d46fa-61d2-4d4c-a392-a8e79ca7f335/08a8b6c0-6f59-4a42-b1a4-79df959c37e6/1.-Course-Outline.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=storage-admin%40itedu-storage.iam.gserviceaccount.com%2F20200802%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20200802T152951Z&X-Goog-Expires=86401&X-Goog-SignedHeaders=host&X-Goog-Signature=6a7722e904ff928eea3a534d992bf0117e3366760039b1e8f79723d7bd9f2f939a3fd4bb570fb78bb9d75dacf7862b14aeaedb377c11554a7fcb477c540aea0bd0c6565f278e1c24c0e0c4225a4c468bedb0dd40edbfcf2c36cf947b2eabe149a4b06e5ea0c42457692f07c87d3b87fcb4bc031a1ee5641b08cda49f0f8e7aba2c57433d7bf670281d89136cd1a50ce4d44068876be5ecf529cc7500dc74ef834935ac5e02f20b2df583ec2e87350ccfb44e94dccb707fd85ff08cb6dbdd506d13e8a1c1358d4bbc338f2a740720989d4cff19b4c76852ada22a16a1005e97b6711bff7303faabcd12a8472eadef104d39f1533498d01b88779396f35bbb9215',
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

export default VideoPlayer;

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
