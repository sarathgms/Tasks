import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { connect } from 'react-redux';
import CustomHeader from './../../common/customHeader/CustomHeader';
import CustomButton from './../../common/customButton/CustomButton';
import {
    useFocusEffect,
  } from '@react-navigation/native';

import api from './../../redux/actions/api';

import { getAll } from './../../redux/actions/auth';


const HomeScreen = ({ getAll, getData, navigation, pr }) => {

    const [filterdData, setfilleredData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    // const isFocused = useIsFocused();

    useEffect(() => {
          updateData();
          onRefresh();
    }, [updateData, onRefresh]);

    useFocusEffect(
        React.useCallback(() => {
            updateData();
            onRefresh();
          return () => {
            updateData();
            onRefresh();
          };
        }, [])
      );

    const updateData = async () => {
     try {
         const res = await api({ contentType: true, auth: true }).get('/list');
         setLoading(true);
         setfilleredData(res.data.tasks);
         setmasterData(res.data.tasks);
     } catch (error) {
         console.log(error);
     }
    }

    const onRefresh = () => {
        setRefreshData(true);
        updateData();
        setTimeout(() => {
            setRefreshData(false);
        }, 2000);
    }

    const detailScreen = (item) => {
        navigation.navigate('update', {
            item
        })
    }
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.assigned_name ? item.assigned_name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilleredData(newData);
            setSearch(text);
        } else {
            setfilleredData(masterData);
            setSearch(text);
        }
    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
            />
        )
    }

    const renderItem = ({ item, i }) => (
        <TouchableOpacity onPress={() => detailScreen(item)}>
            <View style={styles.list} key={i}>
                <Text style={{color: '#fff', fontSize: 18}}> Name: {item.assigned_name}</Text>
                <View style={{}}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}> Message: </Text>
                <Text style={{color: '#fff', fontSize: 16}}>{'                  '}{item.message}</Text>
                </View>
                <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10}}>
                <Text style={{color: '#fff'}}> Date:  {item.due_date}</Text>
                </View>
                
            </View>
        </TouchableOpacity>);

    if (!loading) return (<ActivityIndicator />);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <CustomHeader title="Home" isHome={true} navigation={navigation} /> */}
            <View style={styles.MainContainer}>
            <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search here"
            underlineColorAndroid="transparent"
            onChangeText={(text) => searchFilter(text)}
            />

                {filterdData && filterdData.length ? (
                    <FlatList
                        data={filterdData}
                        onRefresh={() => onRefresh()}
                        refreshing={refreshData}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={renderItem}
                    />

                ) : <View style={styles.container}>
                    <Text>Data Not Found</Text>
                </View>
                }
                <CustomButton
                    fab
                    iconName='plus'
                    size={20}
                    onPress={() => navigation.navigate('create')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 50,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white',
        borderRadius:50
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        padding: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 10,
        backgroundColor: '#464646'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "green",
        fontSize: 20,
    },
    button: {
        justifyContent: "center",
        marginTop: 20
    },
    list: {
        flex:1,
        width: '100%',
        height: 120,
        backgroundColor: '#5E5C5B',
        marginTop: 5,
        borderRadius: 10
    }
});

HomeScreen.propTypes = {
    navigation: PropTypes.instanceOf(Object),
};

export default HomeScreen;
