import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import {DatePicker} from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import { DatePicker, Picker } from 'native-base';
import moment from "moment";
// redux auth
import { create, getAllListUsers } from './../../redux/actions/auth';
import CustomHeader from '../../common/customHeader/CustomHeader';
import InputField from '../../common/inputField/InputField';
import CustomButton from '../../common/customButton/CustomButton';
import PickerInput from './../../common/pickerInput/PickerInput';
import Icon from 'react-native-vector-icons/Fontisto';

const Create = ({ navigation, create, getAllListUsers, getUserListData }) => {
  const [fromData, setFormData] = useState({
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

  console.log(fromData.dueDate);
  useEffect(() => {
    getAllListUsers();
  }, [getAllListUsers])

  const onChange = (name, value) => {
    setFormData({
      ...fromData,
      [name]: value
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append('message', fromData.message);
    data.append('due_date', fromData.dueDate);
    data.append('priority', fromData.priority);
    data.append('assigned_to', fromData.assignedTo);
    create(data);
    navigation.navigate('home');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Create" isHome={false} navigation={navigation} />
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
          placeholder="Enter a Due Date"
          onChangeText={(name, value) => onChange(name, value)}
          name="dueDate"
          label="Due Date"
        />

        {/* <View>
                    <Text style={{ fontSize: 14, marginBottom: 5, color: '#fff', paddingLeft: 10 }}>Due Date</Text>
                </View>
                <View style={{ width: '100%', height: 50, borderColor: '#fff', backgroundColor: '#fff', borderWidth: 1, marginBottom: 20, borderRadius:50 }}>
                  <DatePicker
            defaultDate={new Date(2021, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2021, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            formatChosenDate={date => {return moment(date).format('YYYY-MM-DD');}}
            onDateChange={(newDate) => setFormData({dueDate :newDate})}
            disabled={false}
            />
                    <View style={{ position: 'absolute', right: 20, top: 10 }}>
                        <Icon name="date" color="#000" size={20} />
                    </View>
                </View> */}


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
          title="Create"
          onPress={e => onSubmit(e)}
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

Create.propTypes = {
  create: PropTypes.func.isRequired,
  getAllListUsers: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object),
}

const mapStateToProps = state => ({
  getUserListData: state.user
});

export default connect(mapStateToProps, { create, getAllListUsers })(Create);

