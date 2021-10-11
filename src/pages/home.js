import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, Icon, ScrollView  } from "react-native-elements";
const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* top */}
      <View
        style={{
          flex: 3,
          padding: 50,
          backgroundColor: "#B5EAE0",
          flexDirection: "column",
          justifyContent: "center",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          
        }}
      >
        <Image
          source={require("./../assets/images/logo.png")}
          style={{ width: "80%", alignSelf: "center", flexDirection: "column" }}
        />
      </View>
      <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: -25,}}>
      <Avatar size="large" rounded  source={{    uri:      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',  }}/>
      <Avatar size="large" rounded  source={{    uri:      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',  }}/>
      <Avatar size="large" rounded  source={{    uri:      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',  }}/>
      </View>
      <View style={{ flex: 1, flexDirection: "row",justifyContent: "space-around" ,top: -50, right: -5}}>
      <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#07426A",
            }}
          >
            Therapist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#07426A",
            }}
          >
            Workshop
          </Text>
        </TouchableOpacity>
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
            Free resource
          </Text>
        </TouchableOpacity>
      

      </View>
      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card>
      <Card.Image source={require('./../assets/images/workshop.png')}></Card.Image>
      </Card>
      <View style={{ flex: 1,flexDirection: "row",justifyContent: "space-around"  }}>
      <Text style={{
            fontWeight: "bold",
            textAlign: "left",
            color: 'blue' ,
          }}>
          Doctors nearby you
          </Text>
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
            see all
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={{ flex: 2,flexDirection: "row",justifyContent: "space-around"  }}>
      <Card>
      <Card.Image  style={{ width: 120,}} source={require('./../assets/images/workshop.png')}></Card.Image>
      </Card>
      <Card>
      <Card.Image style={{ width: 120,}} source={require('./../assets/images/workshop.png')}></Card.Image>
      </Card>
      

      </View>
      <View style={{ flex: 1,flexDirection: "row",justifyContent: "space-around"  }}>
      <Text style={{
            fontWeight: "bold",
            textAlign: "left",
            color: 'blue' ,
          }}>
          Doctors nearby you
          </Text>
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
            see all
          </Text>
        </TouchableOpacity>
      </View>
      </View> 

    </View>

  );
};
export default Home;
