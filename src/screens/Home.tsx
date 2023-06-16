import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from './Header';

const Home = ({navigation}: any) => {
  return (
    <View>
      <View style={{backgroundColor: 'lightgrey'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#202020',
              fontSize: 30,
              fontWeight: '800',
            }}>
            MarketWatch
          </Text>
          <TouchableOpacity
            style={{left: 80}}
            onPress={() => navigation.navigate('Login')}>
            <Icon
              name="angle-double-left"
              size={30}
              color="grey"
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              top: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
              MW1
            </Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
              MW2
            </Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
              MW3
            </Text>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
              MW4
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
