import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {
  VIDEO_BACKWARD,
  VIDEO_PREVIOUS,
  VIDEO_PAUSE,
  VIDEO_PLAY,
  VIDEO_NEXT,
  VIDEO_FORWARD,
} from '../../../assets/icons';

// interface Props {
//   playing: boolean;
//   showPreviousAndNext: boolean;
//   showSkip: boolean;
//   previousDisabled?: boolean;
//   nextDisabled?: boolean;
//   onPlay: () => void;
//   onPause: () => void;
//   skipForwards?: () => void;
//   skipBackwards?: () => void;
//   onNext?: () => void;
//   onPrevious?: () => void;
// }
const PlayerControls = ({
  playing,
  showPreviousAndNext,
  showSkip,
  previousDisabled,
  nextDisabled,
  onPlay,
  onPause,
  skipForwards,
  skipBackwards,
  onNext,
  onPrevious,
}) => (
  <View style={styles.wrapper}>
    {showPreviousAndNext && (
      <TouchableOpacity
        style={[styles.touchable, previousDisabled && styles.touchableDisabled]}
        onPress={onPrevious}
        disabled={previousDisabled}>
        <Image source={VIDEO_PREVIOUS} />
      </TouchableOpacity>
    )}

    {showSkip && (
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
        <Image source={VIDEO_BACKWARD} />
      </TouchableOpacity>
    )}

    <TouchableOpacity
      style={styles.touchable}
      onPress={playing ? onPause : onPlay}>
      {playing ? <Image source={VIDEO_PAUSE} /> : <Image source={VIDEO_PLAY} />}
    </TouchableOpacity>

    {showSkip && (
      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
        <Image source={VIDEO_FORWARD} />
      </TouchableOpacity>
    )}

    {showPreviousAndNext && (
      <TouchableOpacity
        style={[styles.touchable, nextDisabled && styles.touchableDisabled]}
        onPress={onNext}
        disabled={nextDisabled}>
        <Image source={VIDEO_NEXT} />
      </TouchableOpacity>
    )}
  </View>
);

export default PlayerControls;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});
