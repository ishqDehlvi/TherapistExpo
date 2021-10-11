import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge  } from "react-native-elements";
const Appointments = (props) => {
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
            Appointment
          </Text>
        </TouchableOpacity>
      </View>


      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card containerStyle={{top: -100, borderRadius: 20,height: 210}}>
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
      </Card>
      <Card containerStyle={{top: -100, borderRadius: 20,height: 210}}>
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
            color: "green",
          }}
        >
        OPEN TODAY
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
      </Card>
 

      </View>


    </View>

  );
};
export default Appointments;
