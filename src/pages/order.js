import * as React from 'react';
import {useState} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button, Input} from 'react-native-elements';

const Order = props => {
  const [intoImage, setIntoImage] = useState('');
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState();
  return (
    <View style={{flex: 1}}>

<View
        style={{
          flex: 1,
          padding: 10,
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
            order
          </Text>
        </TouchableOpacity>
        
      </View>
      <Text
            style={{
              fontWeight: "bold",
              textAlign: "left",
              color: "#07426A",
              top: -50,
              marginLeft:30,
            }}
          >
            Order number:6481248919272
          </Text>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Image
          source={require('./../assets/images/workshop.png')}
          style={{width: '80%', alignSelf: 'center', flexDirection: 'column'}}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Order placed
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
          }}>
          Thanks order shopping with us
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Button
            onPress={() => {
            props.navigation.navigate("Home");
          }}
          title="+ Add more"
          type="outline"
          // raised={true}
          containerStyle={{
            top: -90,
            width: '50%',
            alignSelf: 'center',
            backgroundColor: 'transparent',
            marginTop: 20,
          }}
          buttonStyle={{
            backgroundColor: '#fff',
            color: '#7A3FE1',
            borderWidth: 1,
            borderRadius: 50,
            borderColor: '#7A3FE1',
          }}
          titleStyle={{color: '#7A3FE1'}}
        />
      </View>
    </View>
  );
};
export default Order;
