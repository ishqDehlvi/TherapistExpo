import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Input, Avatar,Card, ScrollView,Badge, Icon, withBadge  } from "react-native-elements";
const Therapist = (props) => {
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
            Therapist
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, flexDirection: "row",justifyContent: "space-around" ,top: -60,}}>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Top Ranked"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
            height: 30,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />

<Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Featured"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
            height: 30,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />

<Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Popular"
          type="solid"
          raised={true}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
            height: 30,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </View>

      <View style={{ flex: 10, justifyContent: "center" }}>
      <Card>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large"  />
      <Badge    status="success"    containerStyle={{ position: 'absolute', top: 5, left: 60 }}  />
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -50,
          }}
        >
          Zean Ronen
        </Text>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Book an appointment"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card>
      <Card>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large"  />
      <Badge    status="success"    containerStyle={{ position: 'absolute', top: 5, left: 60 }}  />
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -50,
          }}
        >
          Zean Ronen
        </Text>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Book an appointment"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000" }}
          titleStyle={{ color: "#000" }}
        />
      </Card>
      <Card>
      <Avatar    rounded    source={{      uri: 'https://randomuser.me/api/portraits/men/41.jpg',    }}    size="large"  />
      <Badge    status="success"    containerStyle={{ position: 'absolute', top: 5, left: 60 }}  />
      <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "left",
            marginLeft: 100,
            marginTop: -25,
            top: -50,
          }}
        >
          Zean Ronen
        </Text>
      <Button
          onPress={() => {
            props.navigation.navigate("IntroScreen");
          }}
          title="Book an appointment"
          type="solid"
          raised={true}
          containerStyle={{
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          buttonStyle={{ backgroundColor: "#fff", color: "#000", }}
          titleStyle={{ color: "#000" }}
        />
      </Card>
      </View>


    </View>

  );
};
export default Therapist;
