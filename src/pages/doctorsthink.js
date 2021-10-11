import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, SearchBar, Divider  } from "react-native-elements";
const Doctorsthink = (props) => {
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
                fontSize: 24,
              fontWeight: "bold",
              textAlign: "left",
              color: "#07426A",
              top: -30,
            }}
          >
            How Doctors Think
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: -60,}}>


      </View>

      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card containerStyle={{borderRadius: 30, height: 170, top: -160}}>
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
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -5,
            color: "#000",
          }}
        >
          Free
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -20,
            top: 15,
            color: "#000",
          }}
        >
            89% (4384 votes)

        </Text>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Add to cart"
          type="solid"
          raised={true}
          containerStyle={{
            width: "60%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
            left: 5,
            top: 10,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card>

      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card containerStyle={{borderRadius: 30, height: 400, top: -120}}>
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -25,
            top: 20,
            color: "#00f",
          }}
        >
          Details
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -20,
            top: 40,
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
            fontSize: 16,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -25,
            top: 70,
            color: "#d3d3d3",
          }}
        >
          Jitu Raut . 2 years ago
        </Text>
        <Divider           style={{left: -10,top: 75,}} orientation="vertical" width={350} />
        <Text
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -25,
            top: 100,
            color: "#d3d3d3",
          }}
        >
          FEEDBACK
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -20,
            top: 130,
            color: "#000",
          }}
        >
            Very good . courteous and efficient staff.
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -25,
            top: 160,
            color: "#d3d3d3",
          }}
        >
          Jitu Raut . 2 years ago
        </Text>
        <Divider           style={{left: -10,top: 200,}} orientation="vertical" width={350} />
        <Text
          style={{
            fontSize: 16,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -25,
            top: 230,
            color: "#00f",
          }}
        >
          Related books
        </Text>
      </Card>
      </View>



      


      </View>


    </View>

  );
};
export default Doctorsthink;
