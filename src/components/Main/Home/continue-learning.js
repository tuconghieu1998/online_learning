import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Card, TitleSectionList} from '../../Common';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';
import {useIsFocused} from '@react-navigation/native';

const ContinueLearning = (props) => {
  const [courses, setCourses] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      props.getContinueLearning((res) => {
        setCourses(res.payload);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return (
    <View>
      {courses && (
        <>
          <TitleSectionList title="Continue learning" />
          <FlatList
            data={courses}
            renderItem={({item}) => (
              <Card
                id={item.id}
                image={item.courseImage}
                title={item.courseTitle}
                instructor={item.instructorName}
                lastLearningTime={item.latestLearnTime}
                countVideo={item.total}
                // duration={item.totalHours}
                // rating={item.ratedNumber}
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
  getContinueLearning: (actionSuccess) =>
    dispatch(CourseActions.getContinueLearningRequest(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContinueLearning);

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingBottom: 5,
  },
});
