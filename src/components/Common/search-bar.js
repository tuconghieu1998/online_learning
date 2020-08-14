import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, GREY, LIGHT_GRAY} from '../../globals/config/color';
import {connect} from 'react-redux';
import CourseActions from '../../redux/courseRedux';

const SearchBar = (props) => {
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
  const handleSearch = () => {
    // save keyword to redux
    props.search(text);
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
        returnKeyType="search"
        onSubmitEditing={handleSearch}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  search: (keyword) => dispatch(CourseActions.searchRequest(keyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 0.5,
    borderColor: GREY,
    backgroundColor: LIGHT_GRAY,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 7,
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  },
});
