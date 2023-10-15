import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'


const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offSlider}>
        <Swiper autoplay={true} autoplayTimeout={4} dotColor='gray' activeDotColor='red'>
          <View>
            <Image source={require('../../images/chad-montano-MqT0asuoIcU-unsplash.jpg')} style={styles.image} />
          </View>
          <View>
            <Image source={require('../../images/lily-banse--YHSwy6uqvk-unsplash.jpg')} style={styles.image} />
          </View>
          <View>
            <Image source={require('../../images/vin-jack-4rzWyYTdvrA-unsplash.jpg')} style={styles.image} />
          </View>
        </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({

  offSlider: {
    marginTop: 10,
    width: '90%',
    height: 200,
  },

  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})