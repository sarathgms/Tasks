// import React, { Component } from 'react';
 
// import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput } from 'react-native';
 
// export default class App extends Component {
 
//   constructor(props) {
 
//     super(props);
 
//     this.state = {
//       isLoading: true,
//       text: '',
//       data: []
//     }
 
//     this.arrayholder = [];
//   }
 
//   componentDidMount() {
 
//     return fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // console.log(responseJson);
//         this.setState({
//           isLoading: false,
//           data: responseJson,
//         }, () => {
//           // In this block you can do something with new state.
//           this.arrayholder = responseJson;
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
 
//   GetFlatListItem(name) {
//     Alert.alert(name);
//   }
 
//   searchData(text) {
//     const newData = this.arrayholder.filter(item => {
//       const itemData = item.name.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1
//     });
 
//     this.setState({
//       data: newData,
//       text: text
//       })
//     }
 
//     itemSeparator = () => {
//       return (
//         <View
//           style={{
//             height: .5,
//             width: "100%",
//             backgroundColor: "#000",
//           }}
//         />
//       );
//     }
 
//     render() {
//       if (this.state.isLoading) {
//         return (
//           <View style={{flex: 1, paddingTop: 20}}>
//             <ActivityIndicator />
//           </View>
//         );
//       }
   
//       return (
   
//         <View style={styles.MainContainer}>
   
//         <TextInput 
//          style={styles.textInput}
//          onChangeText={(text) => this.searchData(text)}
//          value={this.state.text}
//          underlineColorAndroid='transparent'
//          placeholder="Search Here" />
 
//         <FlatList
//           data={this.state.data}
//           keyExtractor={ (item, index) => index.toString() }
//           ItemSeparatorComponent={this.itemSeparator}
//           renderItem={({ item }) => <Text style={styles.row}
//           onPress={this.GetFlatListItem.bind(this, item.name)} >{item.name}</Text>}
//           style={{ marginTop: 10 }} />
 
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
 
//   MainContainer: {
//     justifyContent: 'center',
//     flex: 1,
//     margin: 5,
 
//   },
 
//   row: {
//     fontSize: 18,
//     padding: 12
//   },
 
//   textInput: {
//     textAlign: 'center',
//     height: 42,
//     borderWidth: 1,
//     borderColor: '#009688',
//     borderRadius: 8,
//     backgroundColor: "#FFFF"
 
//   }
// });

import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet, TextInput} from 'react-native';


const App = () => {
    const [filterdData, setfilleredData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        fetchPosts();
        return () => {

        }
    }, [])

    const fetchPosts =() => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setfilleredData(responseJson);
            setmasterData(responseJson);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const searchFilter = (text) => {
        if(text){
            const newData = masterData.filter((item)=> {
                const itemData = item.title ? item.title.toUpperCase()
                : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilleredData(newData);
            setSearch(text);
        } else {
            setfilleredData(newData);
            setSearch(text);
        }
    }

    const ItemView = ({item}) => {
        return (
            <Text style={styles.itemStyle}>
            {item.id} {'. '}{item.title.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return(
            <View
            style={{height: 0.5, width:'100%', backgroundColor: '#c8c8c8'}}
            />
        )
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
style={styles.textInputStyle}
value={search}
placeholder="Search here"
underlineColorAndroid="transparent"
onChangeText={(text) => searchFilter(text)}
                />
                <FlatList
                data={filterdData} 
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
,
itemStyle: {
    padding: 15
},
textInputStyle: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor:'white'
}
})

export default App;