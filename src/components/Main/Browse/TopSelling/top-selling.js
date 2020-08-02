import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {TitleSectionList, Card} from '../../../Common';
import CourseActions from '../../../../redux/courseRedux';
import {connect} from 'react-redux';

const TopSelling = (props) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
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
        renderItem={({item}) => (
          <Card
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
