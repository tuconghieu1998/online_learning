import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {LIGHT_GREY} from '../../../globals/config/color';
import ListAuthorItem from './list-author-item';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';

const AUTHORS = [
  {
    id: '1',
    name: 'Dr. Sunny Wear',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
    countCourses: 8,
  },
  {
    id: '2',
    name: 'Chris Ward',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
    countCourses: 11,
  },
  {
    id: '3',
    name: 'Michael Teske',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
    countCourses: 7,
  },
  {
    id: '4',
    name: 'Jim Cooper',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',

    countCourses: 5,
  },
  {
    id: '5',
    name: 'Nick Russo',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
    countCourses: 12,
  },
  {
    id: '6',
    name: 'Daniel Krzyczkowski',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',

    countCourses: 11,
  },
];

const AuthorsTab = (props) => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (props.keyword) {
      const params = {
        keyword: props.keyword,
        limit: 10,
        offset: 0,
      };
      props.searchV2(params, (res) => {
        setAuthors(res.payload.instructors.data);
        setLoading(false);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyword]);
  return (
    <View style={styles.container}>
      <FlatList
        data={authors}
        renderItem={({item}) => <ListAuthorItem item={item} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsTab);

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
