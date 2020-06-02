import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, LIGHT_GRAY} from '../../globals/config/color';

const SearchBar = () => {
  const [isFocussing, setIsFocussing] = useState(false);
  const [text, setText] = useState('');
  const textInput = useRef(null);
  const handleFocusTextInput = () => {
    setIsFocussing(!isFocussing);
  };
  const handleOnPressBackButton = () => {
    textInput.current.blur();
  };
  const handleOnPressClearText = () => {
    setText('');
  };
  return (
    <View style={styles.container}>
      {isFocussing === true ? (
        <TouchableOpacity
          style={styles.button}
          onPress={handleOnPressBackButton}>
          <MaterialIcons name={'arrow-back'} size={24} color={LIGHT_BLACK} />
        </TouchableOpacity>
      ) : (
        <View style={styles.button}>
          <MaterialIcons name={'search'} size={24} color={LIGHT_BLACK} />
        </View>
      )}

      <TextInput
        ref={textInput}
        style={styles.input}
        onFocus={handleFocusTextInput}
        onBlur={handleFocusTextInput}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        placeholder="Enter keyword"
      />
      {text !== '' && (
        <TouchableOpacity
          style={styles.button}
          onPress={handleOnPressClearText}>
          <MaterialIcons name="clear" size={24} color={LIGHT_BLACK} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 15,
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  },
});