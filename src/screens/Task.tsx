import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Task = () => {
  const handleEdit = () => {
    console.log('eddited');
  };
  const handleDelete = () => {
    console.log('delete');
  };
  
  return (
    <View
      style={{
        backgroundColor: '#FFB74D',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{color: 'white', fontSize: 20}}>Aayush Soni</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={{right: 15}} onPress={handleEdit}>
          <Icon name="edit" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
