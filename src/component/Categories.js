import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

      
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
              <FontAwesome5 name="hamburger" size={30} color={'black'} style={styles.myicon}/>
              <Text style={styles.mytext}>Burger</Text>
          </View>
          <View style={styles.box}>
              <FontAwesome5 name="pizza-slice" size={30} color={'black'} style={styles.myicon}/>
              <Text style={styles.mytext}>Pizza</Text>
          </View>
          <View style={styles.box}>
              <MaterialCommunityIcons name="noodles" size={30} color={'black'} style={styles.myicon}/>
              <Text style={styles.mytext}>Noodles</Text>
          </View>
          <View style={styles.box}>
              <Entypo name="cake" size={30} color={'black'} style={styles.myicon}/>
              <Text style={styles.mytext}>Cake</Text>
          </View>

          <View style={styles.box}>
              <Entypo name="cake" size={30} color={'black'} style={styles.myicon}/>
              <Text style={styles.mytext}>Cake</Text>
          </View>
        </ScrollView>
    </View>
  )
}

export default categories

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },

  head: {
    fontSize: 24,
    color: '#FF4242',
    fontWeight: '500',
    margin: 10,
    borderBottomColor: '#FF4242',
    borderBottomWidth: 2,
  },

  box: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },

  myicon: {
    marginRight: 6,
  },

  mytext: {
    color: 'black',
  },
})