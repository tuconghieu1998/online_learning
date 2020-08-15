import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Card, TitleSectionList} from '../../Common';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';
import {useIsFocused} from '@react-navigation/native';

const CoursesInFavoriteCat = (props) => {
  const isFocused = useIsFocused();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    if (props.userInfo && isFocused) {
      props.getCoursesInFavoriteCat({userId: props.userInfo.id}, (res) => {
        setCourses(res.payload);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userInfo, isFocused]);
  return (
    <View>
      {courses && (
        <>
          <TitleSectionList title="Suggestions" />
          <FlatList
            data={courses}
            renderItem={({item}) => (
              <Card
                id={item.id}
                image={item.imageUrl}
                title={item.title}
                instructor={item.instructorName}
                released={item.updatedAt}
                // lastLearningTime={item.latestLearnTime}
                countVideo={item.videoNumber}
                duration={item.totalHours}
                rating={item.ratedNumber}
                price={item.price}
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

const mapStateToProps = (state) => ({
  userInfo: state.user.payload,
});

const mapDispatchToProps = (dispatch) => ({
  getCoursesInFavoriteCat: (params, actionSuccess) =>
    dispatch(
      CourseActions.getCoursesInFavoriteCatRequest(params, actionSuccess),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursesInFavoriteCat);

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingBottom: 5,
  },
});
