import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {LIGHT_GRAY, GREY} from '../../globals/config/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const {placeholder, leftIcon, password} = props;
  const handleShowPassword = () => {
    setShowPassword(true);
  };
  const handleHidePassword = () => {
    setShowPassword(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>{leftIcon}</View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={password && !showPassword}
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
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: LIGHT_GRAY,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
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
});
