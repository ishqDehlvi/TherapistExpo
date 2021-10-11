import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, Divider, FAB  } from "react-native-elements";
const Applyoffer = (props) => {
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
            Apply Offer  
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 10, justifyContent: "center", top: -110, }}>
      <Card containerStyle={{borderRadius: 30,height: 500}}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -25,
            top: 30,
          }}
        >
          How Doctors Think
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 12,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -20,
            top: 45,
          }}
        >
          Ebook
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "right",
            marginLeft: 30,
            marginTop: -20,
            top: 30,
          }}
        >
          $ 20
        </Text> 
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 45,}}>
          <Divider orientation="vertical" width={350} />
        </View>


        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -25,
            top: 80,
          }}
        >
          Zean Ronen 
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 12,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -20,
            top: 100,
          }}
        >
          Doctor Appointment
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "right",
            marginLeft: 30,
            marginTop: -20,
            top: 80,
          }}
        >
          $ 28
        </Text> 
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 100,}}>
          <Divider orientation="vertical" width={350} />
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -25,
            top: 130,
          }}
        >
          Liver Function Tests
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 12,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -20,
            top: 145,
          }}
        >
          Workshop
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "right",
            marginLeft: 30,
            marginTop: -20,
            top: 130,
          }}
        >
          $ 40
        </Text> 
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 150,}}>
          <Divider orientation="vertical" width={350} />
        </View>
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -20,
            top: 190,
          }}
        >
          Apply Offer  (CPTHF)
        </Text> 
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "right",
            marginLeft: 30,
            marginTop: -20,
            top: 185,
          }}
        >
          $ -10
        </Text> 

        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 0,
            marginTop: -20,
            top: 250,
          }}
        >
          Total
        </Text>
        <Text
          style={{
            
            color: "#000",
            fontSize: 18,
            textAlign: "right",
            marginLeft: 30,
            marginTop: -20,
            top: 240,
          }}
        >
          $ 78
        </Text>
        <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: 200,}}>
          <Divider orientation="vertical" width={350} />
        </View>
        <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="+ Add More"
          type="outline"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
            left: 10,
            top: 230,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card>

      

      </View>


    </View>

  );
};
export default Applyoffer;
