import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Index from '../composants/views/Index';
import CardDetailSalle from '../composants/cards/CardDetailSalle';
import CardSalle from '../composants/cards/CardSalle';
import LoginEsti from '../composants/authentification/LoginEsti';


//declaration var Stack qui contient la fonction pour la navigation
const Stack = createNativeStackNavigator();

function StackNavigation(){
	return(
        <Stack.Navigator 
          initialRouteName='Index'
          screenOptions={{
              gestureEnabled: true,
              headerTitleAlign: 'center',
              headerShown: false ,
              animation: 'slide_from_right',
              headerStyle: {
                backgroundColor: '#0E4452'
              },
              headerLargeTitleStyle: {
                fontWeight: 'bold',
                fontSize: '20'
              },
              headerTintColor: '#FF8038'
            }}
        >
            <Stack.Screen name="e-Resera" component={Index} />
            <Stack.Screen name="Salle" component={CardSalle} />
            <Stack.Screen name="Connexion" component={LoginEsti} />
            <Stack.Screen name="Apropos de la salle" component={CardDetailSalle} />
        </Stack.Navigator>
	)
}

export default StackNavigation;