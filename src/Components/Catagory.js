import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { categories } from '../Const/categories';
import Colors from '../Const/Colors';

export const ListCategories = () => {
  const [selectedCategoryIndex, setselectedCategoryIndex] = React.useState(0);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} activeOpacity={.8} onPress={() => setselectedCategoryIndex(index)}>
          <View style={{ backgroundColor: selectedCategoryIndex == index ? Colors.primary : Colors.secondary, ...styles.categorybtn }}>
            <Text style={{ color: selectedCategoryIndex == index ? Colors.white : Colors.black, ...styles.categoryText }}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  categorybtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },

  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})