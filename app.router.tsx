import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from './src/screen/getStarted/getStarted.screen';
import HomeScreen from './src/screen/Home/home.screen';
import BeginForm from './src/screen/beginForm/beginForm.screen';
import ChooseYourAvatar from './src/screen/beginForm/beginchooseAvatar.screen';
import {AuthProvider, useAuth} from './src/context/authContext';
import AddOrEditScreen from './src/screen/addOrEdit/addOrEditContact.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsPorfileScreen from './src/screen/settingsUser/settingsUser.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from './src/navigation/tabBarIcon';
import {MainTabParamList} from './src/navigation/navigation.type';
import SignUpScreen from './src/screen/signUp/signUp.screen';
import LoginScreen from './src/screen/login/login.screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<MainTabParamList>();
const MyTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => (
        <TabBarIcon routeName={route.name} color={color} size={size} />
      ),
      tabBarActiveTintColor: 'white',
      tabBarActiveBackgroundColor: '#79169D',
      tabBarInactiveTintColor: '#79169D',
      tabBarStyle: {
        backgroundColor: '#f9f9f9',
        borderTopColor: '#dddddd',
        height: 55,
      },
      tabBarLabelStyle: {
        fontSize: 11,
      },
      headerShown: false,
    })}>
    <Tab.Screen name="address_book" component={HomeScreen} />
    <Tab.Screen name="Porfile" component={SettingsPorfileScreen} />
  </Tab.Navigator>
);

const MyStack = () => {
  const auth = useAuth()
  const isLog = auth.isAuth

  const [isFirstLaunch, setIsFirstLaunch] = React.useState<boolean | null>(
    null,
  );

  React.useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasCompletedOnboarding = await AsyncStorage.getItem(
        'onboardingCompleted',
      );
      setIsFirstLaunch(hasCompletedOnboarding === null);
      await AsyncStorage.clear();
    };

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName={ 'GetStarted' }> */}
         {/* <Stack.Navigator initialRouteName={ 'SignUp' }> */}
        <Stack.Navigator
          initialRouteName={isFirstLaunch ? 'GetStarted' : isLog ? 'Main' : 'Login'}>
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
            name='SignUp'
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={MyTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={SettingsPorfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form"
            component={AddOrEditScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default MyStack;

// <AuthProvider>
// <NavigationContainer>
//    {/* <Stack.Navigator initialRouteName={ 'SignUp' }> */}
//   <Stack.Navigator
//     initialRouteName={isFirstLaunch ? 'GetStarted' : isLog ? 'Main' : 'Login'}>
//     <Stack.Screen
//       name="GetStarted"
//       component={GetStartedScreen}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="Begin"
//       component={BeginForm}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="ChooseAvatar"
//       component={ChooseYourAvatar}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name='SignUp'
//       component={SignUpScreen}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name='Login'
//       component={LoginScreen}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="Main"
//       component={MyTabs}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="Profile"
//       component={SettingsPorfileScreen}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen
//       name="Form"
//       component={AddOrEditScreen}
//       options={{headerShown: false}}
//     />
//   </Stack.Navigator>
// </NavigationContainer>
// </AuthProvider>