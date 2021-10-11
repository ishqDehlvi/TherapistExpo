import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";
const Login = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* top */}
      <View
        style={{
          flex: 3,
          padding: 50,
          backgroundColor: "#B5EAE0",
          flexDirection: "column",
          justifyContent: "center",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Image
          source={require("./../../assets/images/logo.png")}
          style={{ width: "80%", alignSelf: "center", flexDirection: "column" }}
        />
      </View>
      <View style={{ flex: 12, justifyContent: "center" }}>
        <Input
          placeholder="Username/Email"
          containerStyle={{ backgroundColor: "transparent" }}
          inputContainerStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            backgroundColor: "transparent",
            // elevation: 10,
          }}
          inputStyle={{
            backgroundColor: "#fff",
            borderRadius: 20,
            paddingLeft: 20,
          }}
          errorStyle={{ margin: 0, padding: 0, display: "none" }}
        />
        <Input
          placeholder="PASSWORD"
          containerStyle={{ backgroundColor: "transparent", marginTop: 10 }}
          inputContainerStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            backgroundColor: "transparent",
            // elevation: 10,
          }}
          inputStyle={{
            backgroundColor: "#fff",
            borderRadius: 20,
            paddingLeft: 20,
          }}
          errorStyle={{ margin: 0, padding: 0, display: "none" }}
        />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "right",
            marginRight: 20,
            marginTop: 10,
          }}
        >
          Forget Password
        </Text>
        <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Login"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              color: "#07426A",
              marginTop: 10,
            }}
          >
            Not yet a member ? Sing Up.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
