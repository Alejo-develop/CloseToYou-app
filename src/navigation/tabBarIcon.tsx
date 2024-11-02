import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TabBarIconProps {
  routeName: string;
  color: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ routeName, color, size }) => {
  let iconName: string;

  switch (routeName) {
    case 'address_book':
      iconName = 'address-book';
      break;
    case 'Porfile':
      iconName = 'user-circle-o';
      break;
    default:
      iconName = 'alert-circle-outline';
  }

  return <Icon name={iconName} color={color} size={size} />;
};

export default TabBarIcon;