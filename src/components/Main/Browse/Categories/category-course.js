import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {HeaderStack, NoData} from '../../../Common';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import CourseActions from '../../../../redux/courseRedux';
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../../globals/config/color';

const CategoryCourse = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const {categoryId, categoryName} = props.route.params;
  const navigation = useNavigation();
  useEffect(() => {
    const params = {
      keyword: '',
      limit: 100,
      offset: 0,
      opt: {
        category: [categoryId],
      },
    };
    props.searchV2(params, (res) => {
      setCourses(res.payload.courses.data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);
  return (
    <View style={styles.container}>
      <HeaderStack title={categoryName} />
      {courses.length === 0 && !isLoading ? (
        <NoData text="Không có khóa học nào" />
      ) : (
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
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  searchV2: (params, actionSuccess) =>
    dispatch(CourseActions.searchV2Request(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCourse);

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
