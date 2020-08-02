import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {TitleSectionList} from '../../../Common';
import ListAuthorItem from './list-author-item';
import InstructorActions from '../../../../redux/instructorRedux';
import {connect} from 'react-redux';

const ListAuthors = (props) => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    props.getInstructors((res) => {
      setAuthors(res.payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <TitleSectionList title="Top authors" />
      <FlatList
        contentContainerStyle={styles.listAuthors}
        data={authors}
        renderItem={({item}) => (
          <ListAuthorItem
            avatar={item['user.avatar']}
            name={item['user.name']}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getInstructors: (actionSuccess) =>
    dispatch(InstructorActions.getInstructorsRequest(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAuthors);

const styles = StyleSheet.create({
  listAuthors: {
    paddingLeft: 15,
    paddingRight: 5,
    marginBottom: 10,
  },
});
