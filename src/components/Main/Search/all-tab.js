import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import {TitleSectionList, NoData} from '../../Common';
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import ListAuthorItem from './list-author-item';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';

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
      {result.length === 0 && !isLoading ? (
        <NoData text="Không tìm thấy kết quả nào" />
      ) : (
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
      )}
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
