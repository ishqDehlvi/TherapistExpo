import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, SearchBar, Divider  } from "react-native-elements";
const Becomepharmacy = (props) => {
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
                fontSize: 20,
              fontWeight: "bold",
              textAlign: "left",
              color: "#07426A",
              top: -30,
            }}
          >
            Become a pharmacy technician
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: -60,}}>


      </View>

      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card containerStyle={{borderRadius: 30, height: 190, top: -160}}>
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "left",
            marginLeft: 20,
            marginTop: -25,
            top: 100,
            color: "#00f",
          }}
        >
          Become a Pharmacy Technician
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 20,
            marginTop: -25,
            top: 122,
            color: "#000",
          }}
        >
          1599 only 
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "right",
            marginLeft: 20,
            marginTop: -20,
            top: 122,
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
            top: 110,
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
          More
        </Text>
      </Card>
      </View>



      


      </View>


    </View>

  );
};
export default Becomepharmacy;
