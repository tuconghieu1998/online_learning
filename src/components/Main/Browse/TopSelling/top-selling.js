import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {TitleSectionList, Card} from '../../../Common';
import CourseActions from '../../../../redux/courseRedux';
import {connect} from 'react-redux';

const data = [
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
];

const TopSelling = (props) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    console.log('khoi tao');
    const params = {
      limit: 10,
      page: 1,
    };
    props.getTopSelling(params, (res) => {
      setCourses(res.payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <TitleSectionList title="Top selling" />
      <FlatList
        data={courses}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getTopSelling: (params, actionSuccess) =>
    dispatch(CourseActions.getTopSellingRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSelling);

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingBottom: 5,
  },
});
