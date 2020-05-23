import React from 'react';
import Slider from '@react-native-community/slider';
import {View, Text, StyleSheet} from 'react-native';

const ProgressBar = ({
  currentTime,
  duration,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
}) => {
  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.timeLeft}>{position}</Text>
      <View style={{flex: 1}}>
        <Slider
          value={currentTime}
          minimumValue={0}
          maximumValue={duration}
          step={1}
          onValueChange={handleOnSlide}
          onSlidingStart={onSlideStart}
          onSlidingComplete={onSlideComplete}
          minimumTrackTintColor={'#F44336'}
          maximumTrackTintColor={'#FFFFFF'}
          thumbTintColor={'#F44336'}
        />
      </View>
      <Text style={styles.timeRight}>{fullDuration}</Text>
    </View>
  );

  function getMinutesFromSeconds(time) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  }

  function handleOnSlide(time) {
    onSlideCapture({seekTime: time});
  }
};

export default ProgressBar;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  timeLeft: {
    fontSize: 12,
    color: '#FFFFFF',
    paddingLeft: 10,
  },
  timeRight: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'right',
    paddingRight: 10,
  },
});
