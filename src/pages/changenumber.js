import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar, Card, Divider} from "react-native-elements";
const Changenumber = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card containerStyle={{borderRadius: 30, height: 260, top: 0, backgroundColor: "#B5EAE0"}}>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="xlarge"  containerStyle={{left: 90, top: -5}}/>
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: 20,
            color: "#00f",
          }}
        >
          Jitendra Raut
        </Text>
        <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Complete your profile"
          type="outline"
          containerStyle={{
            width: "70%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 20,
          }}
          buttonStyle={{ backgroundColor: "#B5EAE0", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card>


      </View>
      <Card containerStyle={{borderRadius: 30, left: 5, height: 450, top: -50, width: 350, backgroundColor: "#fff"}}>
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
            Appointments
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
            Workshop
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
            Order history
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
            Cancelled bookings
          </Text>
        </TouchableOpacity>
        <Divider orientation="vertical" width={300}  style={{ top: 145 }} />
        <TouchableOpacity>
            <Text
            style={{
                fontSize: 18,
              textAlign: "left",
              color: "#000",
              top: 165,
            }}
          >
            Free Resources
          </Text>
        </TouchableOpacity>
        <Divider orientation="vertical" width={300}  style={{ top: 180 }} />
        <TouchableOpacity>
            <Text
            style={{
                fontSize: 18,
              textAlign: "left",
              color: "#000",
              top: 205,
            }}
          >
            Terms and conditions
          </Text>
        </TouchableOpacity>
        <Divider orientation="vertical" width={300}  style={{ top: 220 }} />
        <TouchableOpacity>
            <Text
            style={{
                fontSize: 18,
              textAlign: "left",
              color: "#000",
              top: 235,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </Card>
      


    </View>

  );
};
export default Changenumber;
