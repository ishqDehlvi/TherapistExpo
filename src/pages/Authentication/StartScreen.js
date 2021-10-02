import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
const StartScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#B5EAE0",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{ width: "80%", alignSelf: "center", flexDirection: "column" }}
      />
      <View style={{ position: "absolute", bottom: 20, width: "100%" }}>
        <Button
          onPress={() => {
            props.navigation.navigate("Register");
          }}
          title="SIGN UP"
          type="solid"
          raised={true}
          containerStyle={{
            width: "80%",
            alignSelf: "center",
            borderRadius: 10,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
        <Button
          onPress={() => {
            props.navigation.navigate("Login");
          }}
          title="LOG IN"
          type="solid"
          raised={true}
          containerStyle={{
            width: "80%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
          buttonStyle={{ backgroundColor: "#07426A", color: "#000" }}
          titleStyle={{ color: "#fff" }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            color: "#07426A",
            marginTop: 10,
          }}
        >
          Register / Login as Therapists
        </Text>
      </View>
    </View>
  );
};
export default StartScreen;
