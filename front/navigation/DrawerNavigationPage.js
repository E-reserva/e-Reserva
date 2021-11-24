import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';

import StackNavigation from "./StackNavigation";
import AllSalle from '../composants/views/AllSalle';
import Index from '../composants/views/Index';

const Drawer = createDrawerNavigator();

const DrawerNavigationPage = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
          initialRouteName='e-Reserva'
          backBehavior='history'
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#0E4452',
              width: 240,
              paddingVertical: 50
           },
           drawerLabelStyle:{
            color: '#FF8038'
           }, 

          }}
      >
        <Drawer.Screen name="Home" component={StackNavigation} 
            options={{
           title: 'Home',
           drawerIcon: () => (
              <Icon
                 name="home"
                 size={35}
                 color="#FF8038"
              />
           ),
        }}
        />
        <Drawer.Screen name="Listes des salles" component={AllSalle} 
          options={{
           title: 'Listes des salles',
           drawerIcon: () => (
              <Icon
                 name="list"
                 size={30}
                 color="#FF8038"
              />
           ),
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigationPage;