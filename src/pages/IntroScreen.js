import * as React from 'react';
import {useState} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button, Input} from 'react-native-elements';

const IntroScreen = props => {
  const [intoImage, setIntoImage] = useState('');
  const [Title, setTitle] = useState('');
  const [description, setDescription] = useState();
  return (
    <View style={{flex: 1}}>
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
          Workshop
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
          }}>
          Search the best suitable course.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Button
          title="Next"
          type="outline"
          // raised={true}
          containerStyle={{
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
export default IntroScreen;
