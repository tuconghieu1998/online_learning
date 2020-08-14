import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Card, TitleSectionList} from '../../Common';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';

const FavoriteCourse = (props) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    props.getFavoriteCourses((res) => {
      //console.log(res);
      setCourses(res.payload);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      {courses && (
        <>
          <TitleSectionList title="Favorite courses" />
          <FlatList
            data={courses}
            renderItem={({item}) => (
              <Card
                id={item.id}
                image={item.courseImage}
                title={item.courseTitle}
                instructor={item.instructorName}
                // released={item.updatedAt}
                // lastLearningTime={item.latestLearnTime}
                // countVideo={item.videoNumber}
                // duration={item.totalHours}
                // rating={item.ratedNumber}
                price={item.coursePrice}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteCourses: (actionSuccess) =>
    dispatch(CourseActions.getFavoriteCoursesRequest(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCourse);

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingBottom: 5,
  },
});
