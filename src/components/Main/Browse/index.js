import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {ImageButton, Header} from '../../Common';
import ListAuthors from './Author/list-authors';
import TopRating from './TopRating/top-rating';
import TopSelling from './TopSelling/top-selling';
import Categories from './Categories/categories';
import {useNavigation} from '@react-navigation/native';
import {ScreenKeys} from '../../../globals/constants';

const Browse = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Browse" />
      <ScrollView>
        <View style={styles.imagesContainer}>
          <ImageButton
            onPress={() => navigation.navigate(ScreenKeys.app.newCourse)}
            height={80}
            textAbove="NEW"
            textBelow="RELEASES"
            uri="https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-19-98/Code-on-screen-1600x900.jpg"
          />
          <ImageButton
            height={80}
            textAbove="RECOMMENDED"
            textBelow="FOR YOU"
            uri="https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-19-98/Code-on-screen-1600x900.jpg"
          />
        </View>

        <Categories />

        <TopSelling />
        <TopRating />
        {/* <ListSkills title="Popular Skills" skills={SKILLS} /> */}
        {/* <SectionListHorizontal data={PATH} /> */}
        <ListAuthors title="Top authors" />
      </ScrollView>
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagesContainer: {
    marginTop: 10,
  },
});
