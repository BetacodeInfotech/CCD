import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, FlatList } from 'react-native'
import React from 'react';
import { ListCategories } from '../Components/Catagory';
import foods from '../Const/foods';
import { Card } from '../Components/Card';


function Dashboard() {

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Image source={require('../Assets/Images/2131.jpg')} style={styles.topImage} />

      <TouchableOpacity >
        <Image source={require('../Assets/Images/user.png')} style={styles.avatar} />
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.locationBtn}>
          <Text style={styles.locationButton}>Location</Text>
          <Text style={styles.address}> Bilzen,Tanjungbalai</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder='Search coffee'
        onChangeText={(val) => setLocation(val)} />
      {/* <TouchableOpacity>
                      <MagifyingGlassIcon size="25" strokeWidth={2} color="white" />
                  </TouchableOpacity> */}
      {/* <Image source={require('../Assets/Images/search.png')} style={styles.search}/> */}

      <TouchableOpacity style={styles.btn}>
        <Image source={require('../Assets/Images/settings.png')} style={styles.setting} />
      </TouchableOpacity >
      {/* <Image source={require('../Assets/Images/search.png')} style={styles.search}/> */}


      <TouchableOpacity activeOpacity={0.8}>
        <Image source={require('../Assets/Images/image_2.png')} style={styles.firstImgBtn} />
        <Text style={styles.firstImgText}>Buy one get one free</Text>
        <Image source={require('../Assets/Images/Promo.png')} style={styles.promo} />
      </TouchableOpacity>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  screen: {
    height: '100%',
  },

  locationBtn: {
    marginVertical: 20,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  promo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    marginVertical: -170,
    marginHorizontal: 55,
    borderRadius: 7,
    height: 30,
    width: 90,

  },

  firstImgBtn: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    marginVertical: -185,
    marginHorizontal: 31,
    height: 200,
    width: 350,
    borderRadius: 30,
  },

  topImage: {
    backgroundColor: '#808080',
    height: '40%',
    position: 'absolute',
  },

  search: {
    height: 41,
    width: 41,
    borderRadius: 10,

  },

  firstImgText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 55,
    position: 'absolute',
    marginVertical: -120,
    textDecorationLine: 'underline',
    backgroundColor: 'black'
  },

  avatar: {
    position: 'absolute',
    height: 50,
    width: 50,
    marginVertical: 50,
    marginHorizontal: 328,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  locationButton: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 35,
    paddingRight: 200,
  },

  address: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 18,
  },

  input: {

    backgroundColor: `#808080`,
    marginVertical: 160,
    borderRadius: 10,
    marginHorizontal: 30,
    marginTop: 90,
    marginBottom: 230,
    fontSize: 20,
  },

  setting: {
    height: 41,
    width: 41,
    borderRadius: 10,
  },

  btn: {
    position: 'absolute',
    marginVertical: 133,
    marginHorizontal: 336,
  },
})

export default Dashboard;