import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {HeaderStack} from '../../../Common';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import CourseActions from '../../../../redux/courseRedux';
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../../globals/config/color';

const NewCourse = (props) => {
  const [courses, setCourses] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const params = {
      limit: 20,
      page: 1,
    };
    props.getTopNew(params, (res) => {
      setCourses(res.payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <HeaderStack title="NEW RELEASES" />
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <ListCoursesItem
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            instructor={item['instructor.user.name']}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getTopNew: (params, actionSuccess) =>
    dispatch(CourseActions.getTopNewRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCourse);

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
