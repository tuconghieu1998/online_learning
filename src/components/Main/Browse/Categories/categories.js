import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import CategoryItem from './categoryItem';
import {connect} from 'react-redux';
import CategoryActions from '../../../../redux/categoryRedux';

const Categories = (props) => {
  // categories is array of pair category
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    props.getCategories((res) => {
      var newCategories = [];
      for (var i = 0; i < res.payload.length; i += 2) {
        var tmp = [];
        tmp.push(res.payload[i]);
        if (i + 1 < res.payload.length) {
          tmp.push(res.payload[i + 1]);
        }
        newCategories.push(tmp);
      }
      setCategories(newCategories);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => <CategoryItem data={item} />}
      keyExtractor={(item) => item[0].id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCategories: (actionSuccess) =>
    dispatch(CategoryActions.getCategoriesRequest(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
  },
});
