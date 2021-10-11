import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./src/pages/Authentication/StartScreen";
import Login from "./src/pages/Authentication/Login";
import Register from "./src/pages/Authentication/Register";
import IntroScreen from "./src/pages/IntroScreen";
import Home from "./src/pages/home";
import Therapist from "./src/pages/therapist";
import Therapistmain from "./src/pages/therapistmain";
import Timeslot from "./src/pages/timeslot";
import Timeslot1 from "./src/pages/timeslot1";
import Timeslot2 from "./src/pages/timeslot2";
import Order from "./src/pages/order";
import Freeresource from "./src/pages/freeresource";
import Doctorsthink from "./src/pages/doctorsthink";
import Workshop from "./src/pages/workshop";
import Becomepharmacy from "./src/pages/becomepharmacy";
import Completeprofile from "./src/pages/completeprofile";
import Changename from "./src/pages/changename";
import Changemail from "./src/pages/changemail";
import Changenumber from "./src/pages/changenumber";
import Appointments from "./src/pages/appointments";
import Cancelledbookings from "./src/pages/cancelledbookings";
import Orderhistory1 from "./src/pages/orderhistory1";
import Orderhistory2 from "./src/pages/orderhistory2";
import Orderhistory3 from "./src/pages/orderhistory3";
import Cart from "./src/pages/cart";
import Applyoffer from "./src/pages/applyoffer";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Applyoffer"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Therapist" component={Therapist} />
        <Stack.Screen name="Therapistmain" component={Therapistmain} />
        <Stack.Screen name="Timeslot" component={Timeslot} />
        <Stack.Screen name="Timeslot1" component={Timeslot1} />
        <Stack.Screen name="Timeslot2" component={Timeslot2} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Freeresource" component={Freeresource} />
        <Stack.Screen name="Doctorsthink" component={Doctorsthink} />
        <Stack.Screen name="Workshop" component={Workshop} />
        <Stack.Screen name="Becomepharmacy" component={Becomepharmacy} />
        <Stack.Screen name="Completeprofile" component={Completeprofile} />
        <Stack.Screen name="Changename" component={Changename} />
        <Stack.Screen name="Changemail" component={Changemail} />
        <Stack.Screen name="Changenumber" component={Changenumber} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Cancelledbookings" component={Cancelledbookings} />
        <Stack.Screen name="Orderhistory1" component={Orderhistory1} />
        <Stack.Screen name="Orderhistory2" component={Orderhistory2} />
        <Stack.Screen name="Orderhistory3" component={Orderhistory3} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Applyoffer" component={Applyoffer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
