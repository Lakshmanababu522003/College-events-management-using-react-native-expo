import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image,ImageBackground, Alert } from 'react-native';
import{Post_call} from '../Api/post.service'
import{Api} from '../Api/config'
// import * as ImagePicker from 'expo-image-picker';


const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const AddEvent = ({ navigation }) => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [organized, setOrganized] = useState('');
  const [date, setDate] = useState('');
  // const [image, setImage] = useState(null);

  const EventService=(name,place,organized,date)=>{
    const Pass_Data={
      apiUrl:Api+"event/add",
      requestBody:{
        eventname:name,
        place: place,
        organized: organized,
        date:date,
       
      }
    }
    Post_call(Pass_Data).then((res)=>{
      console.log(res)
      Alert.alert('Sucess','Events added sucessfully')
      navigation.navigate('adash')
    }).catch((err)=>{
      console.log(err)
    })
  }


//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
// }

  const handleAddCandidate = () => {
    // Validate inputs
    if (!name || !place || !organized || !date ) {
      alert('Please fill in all fields');
      return;
    }

    EventService(name,place,organized,date)

    // Create candidate object
    const event = { name, place, organized,date };

    // Pass the candidate object to the parent component
    // onAddEvent(event);

    // Reset form fields
    setName('');
    setPlace('');
    setOrganized('');
    setDate('');
    // setImage(null);
  };

  return (
    <View style={styles.container}>
         <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.background}
      >  
      <View style={{padding:20,marginTop:100}}>

      <Text style={styles.label}>Event Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.label}>Place:</Text>
      <TextInput
        style={styles.input}
        value={place}
        onChangeText={text => setPlace(text)}
      />
      <Text style={styles.label}>Organized By</Text>
      <TextInput
        style={styles.input}
        value={organized}
        onChangeText={text => setOrganized(text)}
      />
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={text => setDate(text)}
      />
      {/* <View style={styles.imageContainer}>
      <CustomButton title="Choose Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View> */}
      <CustomButton title="Add Event" onPress={handleAddCandidate} />
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height:'100%'
    // padding: 20,
    // marginTop: 100,
  },
  background: {
    width:'100%',
    height:'100%',
    // flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    width: '70%',
    borderWidth: 2,
    alignSelf: 'center',
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
});

export default AddEvent;
