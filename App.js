import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/Screens/HomeScreen/Home.screen";
import SplashScreen from "./src/Screens/SplashScreen/Splash.screen";
import MoodDetailScreen from "./src/Screens/MoodDetailScreen/MoodDetail.screen";


function App() {
  const Stack=createNativeStackNavigator();
  const MainNavigator=()=>{
     return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
          name="Splash"
          component={SplashScreen}
          />
         <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="MoodDetail"
          component={MoodDetailScreen}
        />
        </Stack.Navigator>

     )

  }
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}  

export default App;