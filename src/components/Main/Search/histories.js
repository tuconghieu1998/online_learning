import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {GREY, LIGHT_GREY} from '../../../globals/config/color';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';
import HistoryItem from './history-item';
import {useIsFocused} from '@react-navigation/native';

const Histories = (props) => {
  const [histories, setHistories] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      props.getHistories((res) => {
        setHistories(res.histories);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyword, isFocused]);

  const pressHistories = (text) => {
    props.search(text);
  };

  const deleteHistories = (id) => {
    const params = {id};
    props.deleteHistories(params, (res) => {
      setHistories(histories.filter((history) => history.id !== id));
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={histories}
        renderItem={({item}) => (
          <HistoryItem
            item={item}
            onPress={() => pressHistories(item.content)}
            onDelete={() => deleteHistories(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyboardShouldPersistTaps={'handled'}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  keyword: state.course.keyword,
});

const mapDispatchToProps = (dispatch) => ({
  getHistories: (actionSuccess) =>
    dispatch(CourseActions.getHistoriesRequest(actionSuccess)),
  search: (keyword) => dispatch(CourseActions.searchRequest(keyword)),
  deleteHistories: (params, actionSuccess) =>
    dispatch(CourseActions.deleteHistoriesRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Histories);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopColor: GREY,
    borderTopWidth: 0.5,
  },
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
    marginHorizontal: 15,
  },
});
