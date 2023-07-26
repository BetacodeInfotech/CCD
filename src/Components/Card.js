import { StyleSheet, View, Dimensions, Image, TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import React from 'react';
import Colors from '../Const/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

export const Card = ({ food }) => {

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.foodImg}>
          <Image source={food.image} style={styles.img} />
        </View>
        <View style={styles.foodContainer}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodIngredients}>{food.ingredients}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.foodPrice}>{food.price}</Text>
          {/* <Icon name="add" size={20} style={styles.addToCartBtn}/> */}
        </View>
        <View style={styles.addToCartBtn}>
          <Icon name="add" size={20} color={Colors.white} />
        </View>
      </View>
    </TouchableOpacity>


  )
}

const styles = StyleSheet.create({

  foodContainer: {
    marginHorizontal: 10,
  },

  container: {

  },

  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
  },

  foodImg: {
    alignItems: 'center',

  },

  img: {
    width: 185,
    borderRadius: 15,
  },

  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 4,
  },

  foodIngredients: {
    fontSize: 15,
    color: Colors.grey,
    marginTop: 2,
  },

  price: {
    marginTop: 7,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  foodPrice: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },

  addBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },

  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 10,
    marginVertical: -30,
    marginHorizontal: 150,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

})