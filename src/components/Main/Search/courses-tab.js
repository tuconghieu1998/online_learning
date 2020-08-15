import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';
import {NoData} from '../../Common';
import {useIsFocused} from '@react-navigation/native';

const CoursesTab = (props) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const LIMIT = 6;
  const isFocused = useIsFocused();
  useEffect(() => {
    setPage(1);
    if (props.keyword && isFocused && props.token) {
      const params = {
        token: props.token,
        keyword: props.keyword,
        limit: LIMIT,
        offset: 0,
      };
      props.searchV2(params, (res) => {
        setCourses(res.payload.courses.data);
        setLoading(false);
        setTotal(res.payload.courses.total);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyword, isFocused, props.token]);
  const handleLoadMore = () => {
    if (total > page * LIMIT) {
      const params = {
        keyword: props.keyword,
        limit: LIMIT,
        offset: page * LIMIT,
      };
      props.searchV2(params, (res) => {
        setCourses([...courses, ...res.payload.courses.data]);
        setPage(page + 1);
      });
    }
  };
  return (
    <View style={styles.container}>
      {courses.length === 0 && !isLoading ? (
        <NoData text="Không tìm thấy kết quả nào" />
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
          onEndReachedThreshold={0}
          onEndReached={handleLoadMore}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  keyword: state.course.keyword,
  token: state.app.token,
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
