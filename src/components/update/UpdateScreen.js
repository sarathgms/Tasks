import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types';
import { Picker } from 'native-base';
// redux
import { connect } from 'react-redux';
// redux auth
import { update, deleteTask, getAllListUsers } from '../../redux/actions/auth';
import CustomHeader from '../../common/customHeader/CustomHeader';
import InputField from '../../common/inputField/InputField';
import CustomButton from '../../common/customButton/CustomButton';
import PickerInput from '../../common/pickerInput/PickerInput';

const Update = ({ update, deleteTask, getAllListUsers, getUserListData, navigation, route }) => {
  const [fromData, setFormData] = useState({
    id: Number,
    message: '',
    dueDate: '',
    priority: '',
    assignedTo: '',
  });

  const [pri, setPri] = useState([
    {
      "id": "1"
    },
    {
      "id": "2"
    },
    {
      "id": "3"
    }

  ])

console.log(fromData.priority);
  const onChange = (name, value) => {
    setFormData({
      ...fromData,
      [name]: value
    });
  }

  useEffect(async() => {
    await getAllListUsers();
    setFormData({
      id: route.params.item.id,
      message: route.params.item.message,
      dueDate: route.params.item.due_date,
      assenedTo: route.params.item.assigned_to,
      priority: route.params.item.priority,
    });
    
  }, [route.params.item, getAllListUsers]);

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
        data.append('taskid', fromData.id);
        data.append('message', fromData.message);
        data.append('due_date', fromData.dueDate);
        data.append('priority', fromData.priority);
        data.append('assigned_to', fromData.assignedTo);
    update(data);
    navigation.navigate('home');
  }
  
  const onDelete = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('taskid', fromData.id);
    deleteTask(data);
    navigation.navigate('home');
  }
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Edit" isHome={false} navigation={navigation} />
      <View style={styles.MainContainer}>
        <InputField
          style={styles.textInputStyle}
          value={fromData.message}
          placeholder="Enter a message"
          onChangeText={(name, value) => onChange(name, value)}
          name="message"
          label="Message"
        />

        <InputField
          style={styles.textInputStyle}
          value={fromData.dueDate}
          placeholder="Enter a due Date"
          onChangeText={(name, value) => onChange(name, value)}
          name="dueDate"
          label="DueDate"
        />

<PickerInput
          name="priority"
          label="Priority"
          value={fromData.priority}
          placeholder='Select name'
          onValueChange={(name, value) => onChange(name, value)}
        >
          {
            pri.map((item, index) => {
              return (
                <Picker.Item label={item.id} value={item.id} key={index} />
              );
            })
          }
        </PickerInput>


        <PickerInput
          name="assignedTo"
          label="Assigned To"
          value={fromData.assignedTo}
          placeholder='Select name'
          onValueChange={(name, value) => onChange(name, value)}
        >
          {
            getUserListData.users.map((item, index) => {
              return (
                <Picker.Item label={item.id} value={item.id} key={index} />
              );
            })
          }
        </PickerInput>


        <CustomButton
          title="Update"
          onPress={e => onSubmit(e)}
        />

        <CustomButton
          title="Delete"
          onPress={e => onDelete(e)}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 10,
    backgroundColor: '#464646'
  },
});

Update.propTypes = {
  update: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  getAllListUsers: PropTypes.func.isRequired,
  route: PropTypes.instanceOf(Object),
  navigation: PropTypes.instanceOf(Object),
}

const mapStateToProps = state => ({
  getUserListData: state.user
});

export default connect(mapStateToProps, { update, deleteTask, getAllListUsers })(Update);

