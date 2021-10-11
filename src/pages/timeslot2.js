import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, Divider, FAB  } from "react-native-elements";
const Timeslot2= (props) => {
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
            Select a Time Slot query
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 10, justifyContent: "center", top: -130, }}>
      <Card containerStyle={{borderRadius: 30,height: 500}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large" containerStyle={{position: 'relative', marginLeft: 10, top: 0, }}  />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -45,
          }}
        >
          Dr. Jitendra Raut
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -20,
            top: -20,
          }}
        >
          B.Sc, MBBS, DDVL, MD-Der......
        </Text>
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 10,}}>
          <Divider orientation="vertical" width={350} />
        </View>
        <Text
          style={{
            
            color: "#808080",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -20,
            top: 35,
          }}
        >
          Date & Time
        </Text>
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -20,
            top: 50,
          }}
        >
          Tomorrow, 9 Dec
        </Text>
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 10,
            marginTop: -20,
            top: 60,
          }}
        >
          04:45PM
        </Text>
        <Text
          style={{
            
            color: "#808080",
            fontSize: 18,
            textAlign: "right",
            marginLeft: 10,
            marginTop: -20,
            top: 12,
          }}
        >
          Consultation fees
        </Text>
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "right",
            marginRight: 80,
            marginTop: -20,
            top: 30,
          }}
        >
          $600
        </Text>
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top:60,}}>
          <Divider orientation="vertical" width={350} />
        </View>
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top:-12,}}>
          <Divider orientation="vertical" height={70} />
        </View>
        <Input
          placeholder="Name"
          containerStyle={{ backgroundColor: "transparent" }}
          inputContainerStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            backgroundColor: "transparent",
            top: 100,
            // elevation: 10,
          }}
          inputStyle={{
            backgroundColor: "#d3d3d3",
            borderRadius: 10,
            paddingLeft: 20,
          }}
          errorStyle={{ margin: 0, padding: 0, display: "none" }}
        />
                <Input
          placeholder="Email"
          containerStyle={{ backgroundColor: "transparent" }}
          inputContainerStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            backgroundColor: "transparent",
            top: 110,
            // elevation: 10,
          }}
          inputStyle={{
            backgroundColor: "#d3d3d3",
            borderRadius: 10,
            paddingLeft: 20,
          }}
          errorStyle={{ margin: 0, padding: 0, display: "none" }}
        />
        <Input
          placeholder="Number"
          containerStyle={{ backgroundColor: "transparent" }}
          inputContainerStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            backgroundColor: "transparent",
            top: 120,
            // elevation: 10,
          }}
          inputStyle={{
            backgroundColor: "#d3d3d3",
            borderRadius: 10,
            paddingLeft: 20,
          }}
          errorStyle={{ margin: 0, padding: 0, display: "none" }}
        />
         
      
      </Card>


      

      </View>


    </View>

  );
};
export default Timeslot2;
