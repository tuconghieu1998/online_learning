import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {TitleSectionList} from '../../../Common';
import ListAuthorItem from './list-author-item';
import InstructorActions from '../../../../redux/instructorRedux';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const ListAuthors = (props) => {
  const [authors, setAuthors] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      props.getInstructors((res) => {
        setAuthors(res.payload);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
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
