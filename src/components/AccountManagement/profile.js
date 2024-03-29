import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {BackButton, HeaderText, SubText, Button} from '../Common';
import {GREEN, LIGHT_GRAY, GREY} from '../../globals/config/color';
import Information from './information';
import ProfileManagementItem from './profile-management-item';
import {useNavigation} from '@react-navigation/native';
import UserActions from '../../redux/userRedux';
import {connect} from 'react-redux';
import {ScreenKeys} from '../../globals/constants';

const ACTIONS = [
  {
    id: '1',
    iconName: 'user-following',
    title: 'Following',
    onPress: '',
  },
  {
    id: '2',
    iconName: 'settings',
    title: 'Settings',
    onPress: '',
  },
  {
    id: '3',
    iconName: 'question',
    title: 'Help',
    onPress: '',
  },
  {
    id: '4',
    iconName: 'speech',
    title: 'Give feedback',
    onPress: '',
  },
  {
    id: '5',
    iconName: 'lock',
    title: 'Privacy and Terms',
    onPress: '',
  },
  {
    id: '6',
    iconName: 'info',
    title: 'About us',
    onPress: '',
  },
];

const Profile = (props) => {
  const {userInfo} = props;
  const navigation = useNavigation();
  const handleEditProfile = () => {
    navigation.navigate(ScreenKeys.app.profileEdit);
  };

  const handleSignOut = () => {
    props.logout();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <BackButton color="white" onPress={() => navigation.goBack()} />
          <View style={styles.textHeaderContainer}>
            <HeaderText color="white">Profiles</HeaderText>
          </View>
        </View>
        <Information
          avatar={userInfo && userInfo.avatar}
          name={userInfo && userInfo.name}
          sub_info={userInfo && userInfo.type}
          onPressEdit={handleEditProfile}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.expireContainer}>
          <View style={styles.expireItems}>
            <Text style={styles.textExpire}>2 days</Text>
            <SubText>Current streak</SubText>
          </View>
          <View style={styles.seperator} />
          <View style={styles.expireItems}>
            <Text style={styles.textExpire}>6 days</Text>
            <SubText>Max streak</SubText>
          </View>
        </View>
        <View style={styles.profileManagement}>
          {/* <FlatList
            data={ACTIONS}
            renderItem={({item}) => <ProfileManagementItem item={item} />}
            keyExtractor={(item) => item.id}
          /> */}
          {ACTIONS.map((item) => (
            <ProfileManagementItem key={item.id} item={item} />
          ))}
        </View>
        <Button size={16} onPress={handleSignOut}>
          Sign out
        </Button>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (actionSuccess) => dispatch(UserActions.logout(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GRAY,
  },
  headerContainer: {
    backgroundColor: GREEN,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  textHeaderContainer: {
    marginLeft: 10,
  },
  content: {
    marginTop: -20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  expireContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  seperator: {
    backgroundColor: GREY,
    width: 1,
    height: 20,
  },
  expireItems: {
    flex: 1,
    alignItems: 'center',
  },
  textExpire: {
    fontSize: 16,
  },
  profileManagement: {
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
});
