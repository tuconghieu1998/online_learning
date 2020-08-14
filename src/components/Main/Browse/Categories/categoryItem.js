import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenKeys} from '../../../../globals/constants';

const CategoryItem = (props) => {
  const {data} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() =>
            navigation.navigate(ScreenKeys.app.categoryCourse, {
              categoryId: item.id,
              categoryName: item.name,
            })
          }>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../../../../assets/images/category_1.jpg')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: (Dimensions.get('window').width - 45) / 2,
    marginLeft: 15,
  },
  touchable: {
    marginBottom: 15,
    borderRadius: 10,
    height: 60,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  textContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
