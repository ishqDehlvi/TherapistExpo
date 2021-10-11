import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, Divider  } from "react-native-elements";
const Therapistmain = (props) => {
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
            Therapistmain
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 10, justifyContent: "center", top: -80, }}>
      <Card containerStyle={{borderRadius: 50,}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large" containerStyle={{position: 'relative', marginLeft: 120, top: -50, }}  />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 120,
            marginTop: -25,
            top: -30,
          }}
        >
          Zean Ronen
        </Text> 
        <Text
          style={{
            
            color: "#1113",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 40,
            marginTop: -20,
            top: -20,
          }}
        >
          B.Sc, MBBS, DDVL, MD-Dermatologist
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#900",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -20,
            top: -65,
          }}
        >
          Prime
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#1113",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -20,
            top: 0,
          }}
        >
          16yrs, Experience
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#1113",
            fontSize: 18,
            textAlign: "right",
            marginLeft: 10,
            marginTop: -20,
            top: -8,
          }}
        >
          89% (4384votes)
        </Text>
      </Card>
      <Card containerStyle={{borderRadius: 30, height: 450,}} >
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 20,}}>
            <Text
            style={{
              color: "#1113",
              fontSize: 18,
              textAlign: "right",
              marginLeft: 10,
              marginTop: -20,
              top: -1,
            }}
          >
            In clinic fees : $10
          </Text>
          <Button
            onPress={() => {
              props.navigation.navigate("IntroScreen");
            }}
            title="Book"
            type="outline"
            raised={true}
            containerStyle={{
              width: "30%",
              alignSelf: "center",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 20,
              height: 30,
              top: -20,
            }}
            buttonStyle={{ backgroundColor: "#fff", color: "#600", }}
            titleStyle={{ color: "#000", top: -5, }}
          />
          </View>
          <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 40,}}>
          <Divider orientation="vertical" width={350} />
          </View>
          <Text
              style={{
                color: "#1113",
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
                marginTop: -20,
                top: 70,
              }}
            >
              FEEDBACK
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
                marginTop: -20,
                top: 100,
              }}
            >
              Very good. Courteous and efficient staff.
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 12,
                textAlign: "left",
                marginLeft: 10,
                marginTop: -20,
                top: 120,
              }}
            >
              Jitu Raut, 2years ago
            </Text>
            <View style={{ flex: 1}}>
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
                top: 120,
                right: 125,
              }}
            >
              All Feedback
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 155,}}>
        <Divider orientation="vertical" width={350} />
        </View>
        <Text
              style={{
                color: "#1113",
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
                marginTop: -20,
                top: 180,
              }}
            >
              Services
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
                marginTop: -20,
                top: 202,
              }}
            >
              Opthalmology
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
                marginTop: -20,
                top: 212,
              }}
            >
              Opthalmology
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 16,
                textAlign: "left",
                marginLeft: 10,
                marginTop: -20,
                top: 220,
              }}
            >
              Opthalmology
            </Text>
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
                top: 210,
                right: 125,
              }}
            >
              All Services
            </Text>
          </TouchableOpacity>
      
      
      </Card>
      

      </View>


    </View>

  );
};
export default Therapistmain;
