import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { FontAwesome,Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons||FontAwesome}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.brightPurple}
    />
  );
};

export default CustomHeaderButton;

