import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from '../../Common';
import SearchTopNavigation from '../../../navigation/SearchTopNavigation';
import {connect} from 'react-redux';
import Histories from './histories';

const Search = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchBar />
      </View>
      {props.keyword ? <SearchTopNavigation /> : <Histories />}

      {/* <SectionListResult data={RESULTS} /> */}
    </View>
  );
};

const mapStateToProps = (state) => ({
  keyword: state.course.keyword,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: GREY,
  },
});
