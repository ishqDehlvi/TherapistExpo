import * as React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { Button, Input, CheckBox } from "react-native-elements";
const Register = (props) => {
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
          placeholder="Username"
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
        <Input
          placeholder="Email"
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
        <Input
          placeholder="Whatsapp Number"
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
        <CheckBox
          containerStyle={{ backgroundColor: "transparent", marginTop: 10 }}
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor="red"
          title="By registering you agree to our tems of service 
& privacy policy"
          checked={true}
        />
        <Button
          title="SIGN Up"
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
            props.navigation.navigate("Login");
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
            Already a member ? Log In.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Register;
