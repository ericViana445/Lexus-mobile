import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './components/StartScreen';
import ProfileSelectScreen from './components/ProfileSelectScreen';
import LoginScreen from './components/LoginScreen';
import CadStudent from './components/CadStudent';
import CadTeacher from './components/CadTeacher';
import ForgetPasswordScreen from './components/ForgetPassword';
import NewPasswordScreen from './components/NewPassword';
import HomeScreen from './components/HomeScreen';
import InformationScreen from './components/InformationScreen';
import MessagesListScreen from './components/MessagesListScreen';
import ChatScreen from './components/ChatScreen';
import ProfileScreen from './components/ProfileScreen';
import ProductionsListScreen from './components/ProductionsListScreen';
import ProductionDetailScreen from './components/ProductionDetailScreen';
import CreateProductionScreen from './components/CreateProductionScreen';
import ClassScreen from './components/ClassScreen';
import ClassDetailScreen from './components/ClassDetailScreen';
import ProductionDetailScreen2 from './components/ProductionDetailScreen2';
import StudentProfileScreen from './components/StudentProfileScreen';
import ProductionDetailStudent from './components/ProductionDetailStudent';
import MessagesListScreen2 from './components/MessagesListScreen2'; 
import TeacherProfileScreen from './components/TeacherProfileScreen';
import CreateClassScreen from './components/CreateClassScreen';





const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="ProfileSelect" component={ProfileSelectScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Student" component={CadStudent} />
        <Stack.Screen name="Teacher" component={CadTeacher} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={InformationScreen} />
        <Stack.Screen name="MessagesList" component={MessagesListScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Productions" component={ProductionsListScreen} />
        <Stack.Screen name="ProductionDetail" component={ProductionDetailScreen} />
        <Stack.Screen  name="CreateProduction"  component={CreateProductionScreen} />
        <Stack.Screen name="Class" component={ClassScreen} />
        <Stack.Screen name="ClassDetail" component={ClassDetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductionDetail2" component={ProductionDetailScreen2} />
        <Stack.Screen name="StudentProfile" component={StudentProfileScreen} />
        <Stack.Screen name="ProductionDetailStudent" component={ProductionDetailStudent} options={{ headerShown: false }}/>
        <Stack.Screen name="MessagesList2" component={MessagesListScreen2} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherProfile" component={TeacherProfileScreen} />
        <Stack.Screen name="CreateClass" component={CreateClassScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
