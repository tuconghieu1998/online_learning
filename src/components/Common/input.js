import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {LIGHT_GRAY, GREY} from '../../globals/config/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    placeholder,
    leftIcon,
    password,
    keyboardType,
    autoFocus = false,
    data,
    name,
  } = props;
  const handleShowPassword = () => {
    setShowPassword(true);
  };
  const handleHidePassword = () => {
    setShowPassword(false);
  };
  const {value, errMessage, isValid} = data;

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftIcon}>{leftIcon}</View>
        <View style={styles.inputContainer}>
          <TextInput
            name={name}
            autoFocus={autoFocus}
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={password && !showPassword}
            keyboardType={keyboardType}
            value={value}
            onChangeText={(input) => {
              props.handleChange(input, name);
            }}
          />
        </View>
        {password && (
          <View style={styles.rightIcon}>
            {showPassword ? (
              <TouchableOpacity onPress={handleHidePassword}>
                <MaterialCommunityIcons name="eye-off" size={20} color={GREY} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleShowPassword}>
                <MaterialCommunityIcons name="eye" size={20} color={GREY} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
      {!isValid && <Text style={styles.error}>{errMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: LIGHT_GRAY,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  input: {
    height: 45,
    fontSize: 16,
  },
  inputContainer: {
    flex: 1,
  },
  leftIcon: {
    marginRight: 7,
  },
  rightIcon: {
    marginLeft: 7,
  },
  error: {
    fontSize: 12,
    color: 'red',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
