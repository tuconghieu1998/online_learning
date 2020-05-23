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
      <MenuTrigger>
        <MaterialIcons name="more-vert" size={18} color={iconColor} />
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
  menuOptions: {
    marginTop: 25,
    width: 150,
  },
});
