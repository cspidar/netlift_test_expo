import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import KoreaScreen from './Components/KoreaScreen';
import WorldScreen from './Components/WorldScreen';
import LinkScreen from './Components/LinkScreen';

import { SafeAreaProvider } from "react-native-safe-area-context";
 
 
 
 
 
 
 
function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}
 
 
 
 
 
 
const Tab = createMaterialTopTabNavigator();
 
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="국내"
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: '#808080',
        labelStyle: { fontSize: 14 },
        //style: { backgroundColor: 'blue' },
      }}
    >
      <Tab.Screen
        name="국내"
        component={KoreaScreen}
        options={{
          tabBarLabel: '국내',
          title: '국내'
        }}
      />
 
      <Tab.Screen
        name="해외"
        component={WorldScreen}
        options={{ tabBarLabel: '해외' }}

      />
      <Tab.Screen
        name="링크"
        component={LinkScreen}
        options={{ tabBarLabel: '링크' }}
      />
    </Tab.Navigator>
  );
}
 
 
 
 
 
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
 
}
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
 
 

