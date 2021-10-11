import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge  } from "react-native-elements";
const Orderhistory1 = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* top */}
      <View
        style={{
          flex: 2,
          padding: 25,
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
            }}
          >
            Order History
          </Text>
        </TouchableOpacity>
      </View>


      <View style={{ flex: 10, justifyContent: "center" }}>
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
            right: 125,
            top: 10,
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
            right: 4,
            top: -40,
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
          title="E-Books"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            left: 125,
            top: -90,
            borderRadius: 10,
            marginTop: 20,
            height: 30,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" ,top: -4,}}
        />
      <Card containerStyle={{top: -100, borderRadius: 20,height: 290}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large"  />
      <Badge    status="success"    containerStyle={{ position: 'absolute', top: 5, left: 60 }}  />
        <Card containerStyle={{top: -50, borderRadius: 5,height: 100, width: 230, left: 70,}}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 1,
            marginTop: -25,
            top: -30,
          }}
        >
          Zean Ronen
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "left",
            marginLeft: -1,
            marginTop: -25,
            top: 20,
          }}
        >
          MBBS,DOMS,MS - Ophthalmology
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "left",
            marginLeft: -1,
            marginTop: -25,
            top: 45,
          }}
        >
          Ophthalmologist

        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "left",
            marginLeft: -1,
            marginTop: -25,
            top: 70,
          }}
        >
          26 years of experience
        </Text>

        <Text
          style={{
            fontSize: 20,
            textAlign: "left",
            marginLeft: -100,
            marginTop: -25,
            top: 155,
            color: "red",
          }}
        >
        CLOSED TODAY
        </Text>

        <Text
          style={{
            fontSize: 14,
            textAlign: "left",
            marginLeft: 40,
            marginTop: -25,
            top: 158 ,
            color: "blue",
          }}
        >
        9:30AM - 08:00PM
        </Text>

        </Card>
        <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Give feedback"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
            left: -60,
            top: 10,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Reorder"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
            left: 70,
            top: -50,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card> 
      <Card containerStyle={{top: -100, borderRadius: 20,height: 290}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large"  />
      <Badge    status="success"    containerStyle={{ position: 'absolute', top: 5, left: 60 }}  />
        <Card containerStyle={{top: -50, borderRadius: 5,height: 100, width: 230, left: 70,}}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 1,
            marginTop: -25,
            top: -30,
          }}
        >
          Zean Ronen
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "left",
            marginLeft: -1,
            marginTop: -25,
            top: 20,
          }}
        >
          MBBS,DOMS,MS - Ophthalmology
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "left",
            marginLeft: -1,
            marginTop: -25,
            top: 45,
          }}
        >
          Ophthalmologist

        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            textAlign: "left",
            marginLeft: -1,
            marginTop: -25,
            top: 70,
          }}
        >
          26 years of experience
        </Text>

        <Text
          style={{
            fontSize: 20,
            textAlign: "left",
            marginLeft: -100,
            marginTop: -25,
            top: 155,
            color: "red",
          }}
        >
        CLOSED TODAY
        </Text>

        <Text
          style={{
            fontSize: 14,
            textAlign: "left",
            marginLeft: 40,
            marginTop: -25,
            top: 158 ,
            color: "blue",
          }}
        >
        9:30AM - 08:00PM
        </Text>

        </Card>
        <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Give feedback"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
            left: -60,
            top: 10,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Reorder"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
            left: 70,
            top: -50,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card> 
      </View>


    </View>

  );
};
export default Orderhistory1;
