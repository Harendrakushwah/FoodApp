import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
        <FontAwesome name="navicon" size={24} color="black" style={styles.myicon}/>
        <View style={styles.container2}>
            <Text style={{fontWeight: 'bold', color: '#FF4249', fontSize: 22}}>Foodie</Text>
            <MaterialCommunityIcons name = "food-outline" size={24} color="black" style={styles.myicon}/>
        </View>
        <FontAwesome name="user-circle-o" size={24} color="black" style={styles.myicon}/>
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    container2: {
        flexDirection: 'row',
    },

    myicon: {
        color: '#FF4249'
    },
})