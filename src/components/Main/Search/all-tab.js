import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import {TitleSectionList} from '../../Common';
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import ListAuthorItem from './list-author-item';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';

const RESULTS = [
  {
    title: 'Courses',
    data: [
      {
        id: '1',
        title: 'Building Applications with React and Flux',
        author: 'Cory Hourse',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        level: 'Intermediate',
        released: 'thg 8 2019',
        duration: '5h 11m',
        rating: 4.5,
        countRating: 1415,
      },
      {
        id: '2',
        title: 'React: Getting Started',
        author: 'Samer Buna',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        level: 'Beginer',
        released: 'thg 8 2019',
        duration: '4h 11m',
        rating: 3,
        countRating: 2206,
      },
      {
        id: '3',
        title: 'Sever Rendering React Components',
        author: 'Daniel Stern',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        level: 'Advanced',
        released: 'thg 8 2019',
        duration: '4h 11m',
        rating: 0,
        countRating: 0,
      },
      {
        id: '4',
        title: 'Building Applications with React and Flux',
        author: 'Cory Hourse',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        level: 'Intermediate',
        released: 'thg 8 2019',
        duration: '5h 11m',
        rating: 4.5,
        countRating: 1415,
      },
      {
        id: '5',
        title: 'React: Getting Started',
        author: 'Samer Buna',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        level: 'Beginer',
        released: 'thg 8 2019',
        duration: '4h 11m',
        rating: 3,
        countRating: 2206,
      },
      {
        id: '6',
        title: 'Sever Rendering React Components',
        author: 'Daniel Stern',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        level: 'Advanced',
        released: 'thg 8 2019',
        duration: '4h 11m',
        rating: 0,
        countRating: 0,
      },
    ],
  },
  {
    title: 'My paths',
    data: [
      {
        id: '1',
        title: 'React',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        countCourses: 12,
      },
    ],
  },
  {
    title: 'Authors',
    data: [
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
    ],
  },
];

const AllTab = (props) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (props.keyword) {
      const params = {
        keyword: props.keyword,
        limit: 10,
        offset: 0,
      };
      props.searchV2(params, (res) => {
        let newResult = [];
        if (res.payload.courses.total > 0) {
          newResult.push({
            title: 'Courses',
            data: res.payload.courses.data,
            total: res.payload.courses.total,
          });
        }
        if (res.payload.instructors.total > 0) {
          newResult.push({
            title: 'Authors',
            data: res.payload.instructors.data,
            total: res.payload.instructors.total,
          });
        }
        setResult(newResult);
        setLoading(false);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyword]);
  return (
    <View style={styles.container}>
      <SectionList
        sections={result}
        renderSectionHeader={({section}) => (
          <View style={styles.headerContainer}>
            <TitleSectionList
              title={section.title}
              textExpand={`${section.total} Result${
                section.total > 1 ? 's' : ''
              }`}
            />
          </View>
        )}
        renderItem={({item}) =>
          item.avatar ? (
            <ListAuthorItem item={item} />
          ) : (
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
          )
        }
        keyExtractor={(item, index) => item + index}
        SectionSeparatorComponent={() => <View style={styles.separator} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllTab);

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
  headerContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
});
