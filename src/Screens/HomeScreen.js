import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import React from 'react';
import HomeHeadNav from '../component/HomeHeadNav';
import OfferSlider from '../component/OfferSlider';
import Categories from '../component/Categories';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'black'} />
        <HomeHeadNav />
        <View style={styles.searchbox}>
          <AntDesign name="search1" size={24} color='black' style={styles.searchicon}/>
            <TextInput style={styles.input} placeholder='Search'/>
        </View>
        <Categories />
        <OfferSlider />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  searchbox: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 10,
    elevation: 20,
    paddingHorizontal: 10,

  },

  searchicon: {
    color: '#FF4242',
  },

  input: {
    marginHorizontal: 5,
    fontSize: 20,
    width: '90%',
  },
})