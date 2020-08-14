import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';

const CoursesTab = (props) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (props.keyword) {
      const params = {
        keyword: props.keyword,
        limit: 10,
        offset: 0,
      };
      props.searchV2(params, (res) => {
        setCourses(res.payload.courses.data);
        setLoading(false);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyword]);
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <ListCoursesItem
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            instructor={item.name}
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
  keyword: state.course.keyword,
});

const mapDispatchToProps = (dispatch) => ({
  searchV2: (params, actionSuccess) =>
    dispatch(CourseActions.searchV2Request(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesTab);

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
