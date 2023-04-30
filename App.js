import React from 'react';
import { NavigationContainer, Text } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import AddCart from './src/screens/AddCart';
import Payment from './src/screens/Payment';
import Shopping from './src/screens/Shopping';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      
       <Stack.Navigator>
          <Stack.Screen 
            options={{
              title:"Shop Online",
              headerStyle:{
                backgroundColor:"red"
              },
              headerTintColor:"white",
              headerTitleAlign:"center"
            }}
            name="OnlineShopping" 
            component={Shopping} 
          />
          <Stack.Screen 
            options={{
              title:"Add To Cart",
              headerStyle:{
                backgroundColor:"red"
              },
              headerTintColor:"white",
              headerTitleAlign:"center"
            }}
            name="AddToCart"  
            component={AddCart}
          />
          <Stack.Screen 
            options={{
            title:"Shop Online",
            headerStyle:{
              backgroundColor:"red"
            },
            headerTintColor:"white",
            headerTitleAlign:"center"
           }}
           name="Payment" 
           component={Payment} 
         />
       </Stack.Navigator>

    </NavigationContainer>
  )
}
