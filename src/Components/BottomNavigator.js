import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../Const/Colors';
import Dashboard from '../Screen/Dashboard';
import Cart from '../Screen/Cart';
import Notification from '../Screen/Notification';
import Favourite from '../Screen/Favourite';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.primary,
      }}
      screenOptions={{ headerShown: false }}
    >

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="WishList"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Bag"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;