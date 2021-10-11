import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar, Card, Divider} from "react-native-elements";
const Completeprofile = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card containerStyle={{borderRadius: 30, height: 650, top: 160, backgroundColor: "#B5EAE0"}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="xlarge"  containerStyle={{left: 90, top: -5}}/>
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "left",
            marginLeft: 95,
            marginTop: -25,
            top: 25,
            color: "#00f",
          }}
        >
          Jitendra Raut
        </Text>
      </Card>


      </View>
      <Card containerStyle={{borderRadius: 30, left: 5, height: 265, top: -180, width: 350, backgroundColor: "#fff"}}>
      <Divider orientation="vertical" width={300}  style={{ top: 50 }} />
      <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text
            style={{
                fontSize: 18,
              textAlign: "left",
              color: "#000",
              top: 10,
            }}
          >
            Change Name
          </Text>
        </TouchableOpacity>
      <Divider orientation="vertical" width={300}  style={{ top: 90 }} />
      <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text
            style={{
                fontSize: 18,
              textAlign: "left",
              color: "#000",
              top: 50,
            }}
          >
            Add / change Email
          </Text>
        </TouchableOpacity>
        
      <Divider orientation="vertical" width={300}  style={{ top: 130 }} />
      <TouchableOpacity>
      <Text
            style={{
                fontSize: 18,
              textAlign: "left",
              color: "#000",
              top: 90,
            }}
          >
            Add/Change Phone Number
          </Text>
        </TouchableOpacity>
              <TouchableOpacity>
      <Text
            style={{
                fontSize: 18,
              textAlign: "left",
              color: "#000",
              top: 130,
            }}
          >
            Add/Change What’s App Number
          </Text>
        </TouchableOpacity>
      </Card>
      


    </View>

  );
};
export default Completeprofile;
