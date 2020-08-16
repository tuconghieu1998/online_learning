import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackButton, Input, HeaderText, Button} from '../Common';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY, GREEN, BLACK} from '../../globals/config/color';
import {connect} from 'react-redux';
import UserActions from '../../redux/userRedux';
import {VN_PHONE, IMAGE_URL} from '../../globals/config/regex';
import {handleValidate} from '../../globals/helper';

const initialState = {
  name: {
    value: '',
    isValid: true,
    errMessage: 'Tên người dùng không được rỗng',
  },
  phone: {
    value: '',
    isValid: true,
    errMessage: 'Số điện thoại không đúng định dạng',
  },
  avatar: {
    value: '',
    isValid: true,
    errMessage: 'Link ảnh không đúng định dạng',
  },
};

const ProfileEdit = (props) => {
  const [data, setData] = useState(initialState);
  const navigation = useNavigation();

  const handleChange = (input, name) => {
    setData((prevState) => ({
      ...prevState,
      [name]: {...prevState[name], value: input},
    }));
  };

  useEffect(() => {
    if (props.userInfo) {
      setData((prevState) => ({
        ...prevState,
        name: {...prevState.name, value: props.userInfo.name},
        phone: {...prevState.phone, value: props.userInfo.phone},
        avatar: {...prevState.avatar, value: props.userInfo.avatar},
      }));
    }
  }, [props.userInfo]);

  const handleEditProfile = () => {
    const isValidName = data.name.value !== '';
    const isValidPhone = handleValidate(data.phone.value, VN_PHONE);
    const isValidAvatar = handleValidate(data.avatar.value, IMAGE_URL);
    setData((prevState) => ({
      ...prevState,
      name: {...prevState.name, isValid: isValidName},
      phone: {...prevState.phone, isValid: isValidPhone},
      avatar: {...prevState.avatar, isValid: isValidAvatar},
    }));
    if (isValidPhone && isValidName && isValidAvatar) {
      const params = {
        name: data.name.value,
        phone: data.phone.value,
        avatar: data.avatar.value,
      };
      props.editProfile(params, (response) => {
        navigation.goBack();
      });
    }
    //
    //navigation.navigate('InputOTP')
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.title}>
          <HeaderText color={GREEN}>Edit profile</HeaderText>
        </View>
        <View>
          <Input
            data={data.name}
            name="name"
            autoFocus={true}
            leftIcon={<Icon5 name="user-alt" size={20} color={GREY} />}
            placeholder="Enter your name"
            handleChange={handleChange}
          />
          <Input
            name="phone"
            data={data.phone}
            leftIcon={<MaterialIcons name="phone" size={22} color={GREY} />}
            placeholder="Enter your phone"
            handleChange={handleChange}
            keyboardType="phone-pad"
          />
          <Input
            name="avatar"
            data={data.avatar}
            leftIcon={<MaterialIcons name="image" size={22} color={GREY} />}
            placeholder="Enter your link avatar"
            handleChange={handleChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button size={18} onPress={handleEditProfile}>
            Change
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  editProfile: (params, actionSuccess) =>
    dispatch(UserActions.editProfileRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  textFooter: {
    fontSize: 16,
    color: BLACK,
  },
});
