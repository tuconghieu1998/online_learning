import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

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
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-down" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <MaterialIcons name="share" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        {showPreviousAndNext && (
          <TouchableOpacity
            style={[
              styles.touchable,
              previousDisabled && styles.touchableDisabled,
            ]}
            onPress={onPrevious}
            disabled={previousDisabled}>
            <MaterialIcons name="skip-previous" size={28} color="white" />
          </TouchableOpacity>
        )}

        {showSkip && (
          <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
            <MaterialIcons name="replay-10" size={28} color="white" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.touchable}
          onPress={playing ? onPause : onPlay}>
          {playing ? (
            <Icon name="pause" size={28} color="white" />
          ) : (
            <Icon name="play" size={28} color="white" />
          )}
        </TouchableOpacity>

        {showSkip && (
          <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
            <MaterialIcons name="forward-10" size={28} color="white" />
          </TouchableOpacity>
        )}

        {showPreviousAndNext && (
          <TouchableOpacity
            style={[styles.touchable, nextDisabled && styles.touchableDisabled]}
            onPress={onNext}
            disabled={nextDisabled}>
            <MaterialIcons name="skip-next" size={28} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PlayerControls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 25,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});
