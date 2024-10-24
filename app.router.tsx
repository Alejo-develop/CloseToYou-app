import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from './src/screen/getStarted/getStarted.screen';
import HomeScreen from './src/screen/Home/home.screen';
import BeginForm from './src/screen/beginForm/beginForm.screen';
import ChooseYourAvatar from './src/screen/beginForm/beginchooseAvatar.screen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted'>
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Begin"
          component={BeginForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChooseAvatar"
          component={ChooseYourAvatar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack