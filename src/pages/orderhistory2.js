import * as React from "react"; 
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, SearchBar  } from "react-native-elements";
const Orderhistory2 = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* top */}
      <View
        style={{
          flex: 2,
          padding: 40,
          backgroundColor: "#B5EAE0",
          flexDirection: "column",
          justifyContent: "center",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "left",
              color: "#07426A",
              top: -30,
            }}
          >
            Order History
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: -60,}}>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Therapist"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
            height: 30,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000", top: -4, }}
        />

<Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Workshop"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
            height: 30,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000", top: -4, }}
        />

      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Free Resources"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
            height: 30,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" ,top: -4,}}
        />
      </View>

      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card containerStyle={{borderRadius: 30, height: 230, top: -160}}>

      <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -25,
            top: 160,
            color: "#00f",
          }}
        >
          Become a Pharmacy Technician
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -20,
            top: 180,
            color: "#000",
          }}
        >
          Shaw’s Textbook of Gynaecology, one of the best-selling
          gynaecological textbooks of all time, has maintained its
          popularity with teachers, examiners and students. It is now
          in its 79th year of publication
        </Text>
      </Card>
      </View>


    </View>

  );
};
export default Orderhistory2;
