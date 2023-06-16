import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          left:10,
          fontSize: 30,
          fontWeight: '800',
          alignSelf: 'flex-start',
          borderBottomColor:'blue',
          borderBottomWidth:1
        }}>
        MarketWatch
      </Text>
    </View>
  );
};

export default Header;
