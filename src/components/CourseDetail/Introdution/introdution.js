import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
import AuthorTagList from './author-tag-list';
import FuncButton from './func-button';
import {BLACK, GREY, LIGHT_GREY} from '../../../globals/config/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import moment from 'moment';
import UserActions from '../../../redux/userRedux';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';

const Introdution = (props) => {
  const {
    id,
    title,
    authors,
    duration,
    released,
    rating,
    countRating,
    countVideo,
    description,
  } = props.data;
  const [showDescription, setShowDescription] = useState(false);
  const [isLike, setLike] = useState(false);
  const showMore = () => {
    setShowDescription(!showDescription);
  };
  const handleLikeCourse = () => {
    props.likeCourse({courseId: id}, (res) => {
      setLike(res.likeStatus);
    });
  };
  useEffect(() => {
    props.getCourseLikeStatus({courseId: id}, (res) => {
      setLike(res.likeStatus);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleRegisterCourse = () => {
    props.registerFreeCourse({courseId: id}, (res) => {
      console.log(res);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AuthorTagList authors={authors} />
      <View style={styles.subInfoContainer}>
        <Text style={styles.subText}>{`${moment(released).format(
          'DD/MM/YYYY',
        )}  ‧  ${countVideo} video${
          countVideo > 1 ? 's' : ''
        }  ‧  ${duration}h   `}</Text>
        <Rating
          type="custom"
          imageSize={14}
          readonly
          startingValue={rating}
          style={styles.rating}
          ratingBackgroundColor={GREY}
          tintColor="white"
        />
        <Text style={styles.subText}>{` (${countRating}) `}</Text>
      </View>
      <View style={styles.funcButtonContainer}>
        <FuncButton
          name="Favorite"
          icon={
            <MaterialIcons
              name={isLike ? 'favorite' : 'favorite-border'}
              size={24}
              color={BLACK}
            />
          }
          onPress={handleLikeCourse}
        />
        <FuncButton
          disabled={props.isUserOwnCourse}
          name={props.isUserOwnCourse ? 'Got' : 'Get it'}
          icon={
            <MaterialIcons
              name={
                props.isUserOwnCourse ? 'playlist-add-check' : 'playlist-add'
              }
              size={24}
              color={BLACK}
            />
          }
          onPress={handleRegisterCourse}
        />
        <FuncButton
          name="Download"
          icon={<FontistoIcons name="download" size={24} color={BLACK} />}
        />
      </View>
      <View style={styles.description}>
        <Text
          style={styles.textDescription}
          numberOfLines={showDescription ? undefined : 2}>
          {description}
        </Text>
        <TouchableOpacity style={styles.touchMore} onPress={showMore}>
          <MaterialIcons
            name={showDescription ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color={BLACK}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  isUserOwnCourse: state.course.isUserOwnCourse,
});

const mapDispatchToProps = (dispatch) => ({
  getCourseLikeStatus: (params, actionSuccess) =>
    dispatch(UserActions.getCourseLikeStatusRequest(params, actionSuccess)),
  likeCourse: (params, actionSuccess) =>
    dispatch(UserActions.likeCourseRequest(params, actionSuccess)),
  registerFreeCourse: (params, actionSuccess) =>
    dispatch(CourseActions.registerFreeCourseRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Introdution);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomColor: LIGHT_GREY,
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 20,
    color: BLACK,
    marginLeft: 15,
    marginRight: 15,
  },
  subInfoContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  subText: {
    color: BLACK,
  },
  funcButtonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginVertical: 25,
    justifyContent: 'space-around',
  },
  description: {
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  touchMore: {
    backgroundColor: GREY,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textDescription: {
    flex: 1,
  },
});
