import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Input, SearchBar} from '../../Common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, LIGHT_GREY, GREY} from '../../../globals/config/color';
import SectionListResult from './section-list-result';
import SearchTopNavigation from '../../../navigation/SearchTopNavigation';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchBar />
      </View>
      <SearchTopNavigation />
      {/* <SectionListResult data={RESULTS} /> */}
    </View>
  );
};

export default Search;

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
