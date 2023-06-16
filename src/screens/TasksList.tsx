import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import ModalView from '../components/ModalView';
import Task from './Task';

const TasksList = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#FFF3E0', padding: 5}}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          elevation: 5,
          height: 50,
        }}>
        <Text
          style={{
            color: '#FF6E40',
            fontSize: 30,
            fontWeight: '800',
            alignSelf: 'center',
            elevation: 5,
          }}>
          List Tasks
        </Text>
      </View>
      <Task />
      <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View>
        <Pressable
          style={{
            backgroundColor: '#FF6E40',
            borderRadius: 20,
            padding: 10,
            elevation: 2,
          }}
          onPress={() => setModalVisible(true)}>
          <Text
            style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
            Add Tasks
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TasksList;
