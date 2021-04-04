import React from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button, ImageBackground } from 'react-native';
import Icon from './../icon/Icon';

// import CustomHeaderStyle from './CustomHeaderStyle';

const CustomHeader = ({title, isHome, navigation}) => {
    return (
      <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#EE4E4E' }}>
        <View style={{ flex: 1, justifyContent: 'center'}}>
          {
            isHome ?
              <TouchableOpacity style={{width: 100, height:30}} onPress={() => navigation.openDrawer()}>
                <View style={{marginLeft: 10}}> 
                <Icon name="bars" size={30} color="#fff" />
                </View>
              </TouchableOpacity>
              :
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-left" size={20} color="#fff" />
                {/* <Text style={{color: "#fff", fontSize: 16}}>Back</Text> */}
              </TouchableOpacity>
          }
        </View>
        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>{title}</Text>
        </View>
      <View style={{ flex: 1,  flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          {/* <TouchableOpacity style={{}}
              onPress={() => navigation.navigate("login")}
            >
             <Text style={{color: '#fff',  fontSize: 16, fontWeight: 'bold'}}>Logout</Text>
            </TouchableOpacity> */}
      </View>
    </View>
    )
}

export default CustomHeader;