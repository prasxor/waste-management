import React from 'react';
import { Image } from 'react-native';
import { Appearance } from 'react-native';

const HeaderLogo = () => {
  // Detect system theme
  const systemTheme = Appearance.getColorScheme();

  // Choose the logo based on theme
  const logo = systemTheme === 'dark' 
    ? require('../assets/MainLogoDark.svg') 
    : require('../assets/MainLogo.png');

  return (
    <Image
      source={logo}
      style={{
        width: 150, 
        height: 40, 
        resizeMode: 'contain',
      }}
    />
  );
};

export default HeaderLogo;
