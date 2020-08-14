import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {HeaderStack} from '../../../Common';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import CourseActions from '../../../../redux/courseRedux';
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../../globals/config/color';

const RecommendCourse = (props) => {
  const [courses, setCourses] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    if (props.userInfo) {
      const params = {
        userId: props.userInfo.id,
        limit: 20,
        offset: 0,
      };
      props.getRecommendCourse(params, (res) => {
        //console.log(res.payload);
        setCourses(res.payload);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userInfo]);
  return (
    <View style={styles.container}>
      <HeaderStack title="RECOMMENDED FOR YOU" />
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <ListCoursesItem
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            instructor={item.instructorName}
            released={item.updatedAt}
            countVideo={item.videoNumber}
            duration={item.totalHours}
            rating={item.ratedNumber}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.user.payload,
});

const mapDispatchToProps = (dispatch) => ({
  getRecommendCourse: (params, actionSuccess) =>
    dispatch(CourseActions.getRecommendCourseRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendCourse);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
    marginLeft: 15,
    marginRight: 15,
  },
});