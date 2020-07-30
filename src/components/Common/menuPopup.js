import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLACK} from '../../globals/config/color';

const MenuPopUp = (props) => {
  const {iconColor} = props;
  return (
    <Menu>
      <MenuTrigger style={styles.menuTrigger}>
        <MaterialIcons
          name="more-vert"
          size={18}
          color={iconColor}
          style={styles.iconTrigger}
        />
      </MenuTrigger>
      <MenuOptions customStyles={{optionsContainer: styles.menuOptions}}>
        <MenuOption>
          <Text style={{color: BLACK}}>Bookmark</Text>
        </MenuOption>
        <MenuOption>
          <Text style={{color: BLACK}}>Add to channel</Text>
        </MenuOption>
        <MenuOption>
          <Text style={{color: BLACK}}>Remove download</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default MenuPopUp;

const styles = StyleSheet.create({
  menuTrigger: {
    padding: 5,
  },
  iconTrigger: {
    shadowOpacity: 10,
    textShadowRadius: 5,
    textShadowOffset: {width: 0, height: 0},
  },
  menuOptions: {
    marginTop: 25,
    width: 150,
  },
});
