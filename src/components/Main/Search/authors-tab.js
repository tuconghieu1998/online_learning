import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {LIGHT_GREY} from '../../../globals/config/color';
import ListAuthorItem from './list-author-item';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';
import {NoData} from '../../Common';
import {useIsFocused} from '@react-navigation/native';

const AuthorsTab = (props) => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const LIMIT = 6;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (props.keyword && isFocused && props.token) {
      setPage(1);
      const params = {
        token: props.token,
        keyword: props.keyword,
        limit: 10,
        offset: 0,
      };
      props.searchV2(params, (res) => {
        setAuthors(res.payload.instructors.data);
        setLoading(false);
        setTotal(res.payload.instructors.total);
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
        setAuthors([...authors, ...res.payload.instructors.data]);
        setPage(page + 1);
      });
    }
  };
  return (
    <View style={styles.container}>
      {authors.length === 0 && !isLoading ? (
        <NoData text="Không tìm thấy kết quả nào" />
      ) : (
        <FlatList
          data={authors}
          renderItem={({item}) => <ListAuthorItem item={item} />}
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
