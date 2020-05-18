import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        <MaterialIcons name="skip-previous" size={24} color="white" />
      </TouchableOpacity>
    )}

    {showSkip && (
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
        <MaterialIcons name="replay-10" size={24} color="white" />
      </TouchableOpacity>
    )}

    <TouchableOpacity
      style={styles.touchable}
      onPress={playing ? onPause : onPlay}>
      {playing ? (
        <Icon name="pause" size={24} color="white" />
      ) : (
        <Icon name="play" size={24} color="white" />
      )}
    </TouchableOpacity>

    {showSkip && (
      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
        <MaterialIcons name="forward-10" size={24} color="white" />
      </TouchableOpacity>
    )}

    {showPreviousAndNext && (
      <TouchableOpacity
        style={[styles.touchable, nextDisabled && styles.touchableDisabled]}
        onPress={onNext}
        disabled={nextDisabled}>
        <MaterialIcons name="skip-next" size={24} color="white" />
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
