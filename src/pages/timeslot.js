import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, Divider, FAB  } from "react-native-elements";
const Timeslot = (props) => {
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
            Select a Time Slot
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
            
            color: "#000",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 120,
            marginTop: -20,
            top: 35,
          }}
        >
          Today, 8 Dec
        </Text>        
        <Text
          style={{
            color: "#0042",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 70,
            marginTop: -20,
            top: 150,
          }}
        >
          No slots available for today
        </Text>
        <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Next day availability for today on Sun, 09"
          type="solid"
          
          containerStyle={{
            width: "90%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
            top: 180,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0",  }}
          titleStyle={{ color: "#fff", fontWeight: "bold", }}
        />
                <Text
          style={{
            
            color: "#000",
            fontSize: 20,
            textAlign: "left",
            marginLeft: 155,
            marginTop: -20,
            top: 215,
          }}
        >
          OR
        </Text>

      <FAB  containerStyle={{top: 230,}} buttonStyle={{ backgroundColor: "#FFA500" }} title=">" />
      </Card>

      

      </View>


    </View>

  );
};
export default Timeslot;
