import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, SearchBar  } from "react-native-elements";
const Freeresource = (props) => {
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
      <SearchBar      
        placeholder="Search any product"
          containerStyle={{ backgroundColor: "transparent", borderColor: "transparent",borderTopWidth : 0, borderBottomWidth: 0, top : 60,}}
          inputContainerStyle={{
            borderColor: "transparent",
            backgroundColor: "transparent",
          }}
          inputStyle={{
            backgroundColor: "#fff",
            borderRadius: 20,
            paddingLeft: 20,
          }}
        />
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
            Free resource
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: -60,}}>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Top Rank"
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
          title="Featured"
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
          title="Popular"
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
      <Card containerStyle={{borderRadius: 30, height: 230, top: -90}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large"  />
      <Badge    status="success"    containerStyle={{ position: 'absolute', top: 5, left: 60 }}  />
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -50,
            color: "#00f",
          }}
        >
          How doctors think
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -20,
            top: -25,
            color: "#000",
          }}
        >
          Shaw’s Textbook of Gynaecology, one of the best-selling
          gynaecological textbooks of all time, has maintained its
          popularity with teachers, examiners and students. It is now
          in its 79th year of publication
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -0,
            color: "#000",
          }}
        >
          Free
        </Text>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Add to cart"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
            left: 120,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card>
      <Card containerStyle={{borderRadius: 30, height: 230, top: -70}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large"  />
      <Badge    status="success"    containerStyle={{ position: 'absolute', top: 5, left: 60 }}  />
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -50,
            color: "#00f",
          }}
        >
          How doctors think
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -20,
            top: -25,
            color: "#000",
          }}
        >
          Shaw’s Textbook of Gynaecology, one of the best-selling
          gynaecological textbooks of all time, has maintained its
          popularity with teachers, examiners and students. It is now
          in its 79th year of publication
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -0,
            color: "#000",
          }}
        >
          Free
        </Text>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Add to cart"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
            left: 120,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card>



      


      </View>


    </View>

  );
};
export default Freeresource;
