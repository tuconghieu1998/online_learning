import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import CourseActions from '../../../redux/courseRedux';
import {useIsFocused} from '@react-navigation/native';

const Introduction = (props) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState({});
  useEffect(() => {
    if (isFocused) {
      props.getIntroPage((res) => {
        setData(res);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return (
    <View style={styles.introContainer}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://i1.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2017/12/study-1968077_1280.jpg',
        }}
      />
      <View style={styles.background}>
        <View style={styles.textContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemNumber}>{data.categories}</Text>
            <Text style={styles.itemName}>Categories</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemNumber}>{data.courses}</Text>
            <Text style={styles.itemName}>Courses</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemNumber}>{data.instructors}</Text>
            <Text style={styles.itemName}>Instructors</Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.itemNumber}>{data.students}</Text>
            <Text style={styles.itemName}>Students</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getIntroPage: (actionSuccess) =>
    dispatch(CourseActions.getIntroPageRequest(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);

const styles = StyleSheet.create({
  introContainer: {
    margin: 15,
    marginBottom: 0,
  },
  image: {
    height: Dimensions.get('window').height / 3.5,
    borderRadius: 10,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderRadius: 10,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    paddingVertical: 10,
  },
  itemContainer: {
    alignItems: 'center',
  },
  itemNumber: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
  },
  itemName: {
    borderTopWidth: 0.5,
    borderTopColor: 'white',
    color: 'white',
    fontSize: 14,
    paddingTop: 5,
  },
});
