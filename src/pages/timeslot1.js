import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge, Divider, FAB  } from "react-native-elements";
const Timeslot1= (props) => {
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
        
        <Card containerStyle={{borderRadius: 10,height: 90,top: 40,backgroundColor: "#d3d3d3",}}>
        <Button
          title="Morning"
          type="solid"
          
          containerStyle={{
            width: "40%",
            alignSelf: "center",
            marginRight: 160,
            borderRadius: 30,
            marginTop: 20,
            top: -43,
            
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", height: 20, }}
          titleStyle={{ color: "#000", fontWeight: "bold", }}
        />
        <Text style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "left",
                color: '#07426A' ,
                top: -30,
            }}>
            10:00
            </Text>

            <Text
                style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "right",
                marginRight: 160,
                color: "#07426A",
                top: -58,
                }}
            >
                11:00
            </Text>
            <Text
                style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "right",
                marginRight: 100,
                color: "#07426A",
                top: -85,
                }}
            >
                12:00
            </Text>
        </Card>  
        <Card containerStyle={{borderRadius: 10,height: 90,top: 40,backgroundColor: "#d3d3d3",}}>
        <Button
          title="Afternoon"
          type="solid"
          
          containerStyle={{
            width: "40%",
            alignSelf: "center",
            marginRight: 160,
            borderRadius: 30,
            marginTop: 20,
            top: -43,
            
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", height: 20, }}
          titleStyle={{ color: "#000", fontWeight: "bold", }}
        />
        <Text style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "left",
                color: '#07426A' ,
                top: -30,
            }}>
            12:00
            </Text>

            <Text
                style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "right",
                marginRight: 160,
                color: "#07426A",
                top: -58,
                }}
            >
                01:00
            </Text>
            <Text
                style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "right",
                marginRight: 100,
                color: "#07426A",
                top: -85,
                }}
            >
                02:00
            </Text>
        </Card>
        <Card containerStyle={{borderRadius: 10,height: 90,top: 40,backgroundColor: "#d3d3d3",}}>
        <Button
          title="Evening & night"
          type="solid"
          
          containerStyle={{
            width: "60%",
            alignSelf: "center",
            marginRight: 100,
            borderRadius: 30,
            marginTop: 20,
            top: -43,
            
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", height: 20, }}
          titleStyle={{ color: "#000", fontWeight: "bold", }}
        />
        <Text style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "left",
                color: '#07426A' ,
                top: -30,
            }}>
            12:00
            </Text>

            <Text
                style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "right",
                marginRight: 160,
                color: "#07426A",
                top: -58,
                }}
            >
                01:00
            </Text>
            <Text
                style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "right",
                marginRight: 100,
                color: "#07426A",
                top: -85,
                }}
            >
                02:00
            </Text>
        </Card>        
      </Card>


      

      </View>


    </View>

  );
};
export default Timeslot1;
