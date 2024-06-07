import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert ,ImageBackground} from 'react-native';
import{Post_call} from '../Api/post.service'
import{Api} from '../Api/config'

// import * as ImagePicker from 'expo-image-picker';


const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const AddStaff = ( {navigation}) => {
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [staffid, setStaffid] = useState('');

//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
// }

// const EditCandidateService=(name,position,department)=>{
//   const Pass_Data={
//     apiUrl:Api+"candidate/add",
//     requestBody:{
//       username: name,
//       department:department,
//       position:position,
      
//     }
//   }
//   Post_call(Pass_Data).then((res)=>{
//     console.log(res)
//     Alert.alert('Sucess','Candidate Added Sucessfully' );
//     navigation.navigate('clist')
//   }).catch((err)=>{
//     console.log(err)
//   })
// }


const AddStaffService=(email,position,department,staffid)=>{
  const Pass_Data={
    apiUrl:Api+"staff/signup",
    requestBody:{
      email: email,
      department:department,
      position:position,
      password:staffid
      
    }
  }
  Post_call(Pass_Data).then((res)=>{
    console.log(res)
    Alert.alert('Sucess','staff Added Sucessfully' );
    navigation.navigate('astafflist')
  }).catch((err)=>{
    console.log(err)
  })
}

  const handleAddCandidate = () => {
    // Validate inputs
    if (!email || !position || !department || !staffid) {
      alert('Please fill in all fields');
      return;
    }

    AddStaffService(email,position,department,staffid)

    // // Create candidate object
    // const candidate = { image, name, position, department };

    // // Pass the candidate object to the parent component
    // onAddCandidate(candidate);

    // Reset form fields
    setEmail('');
    setPosition('');
    setDepartment('');
    setStaffid('');

    // setImage(null);
  };

  return (
    <View style={styles.container}>
          <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.background}
      >     
      <View style={{padding:20,marginTop:100}}>
       <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.label}>Position:</Text>
      <TextInput
        style={styles.input}
        value={position}
        onChangeText={text => setPosition(text)}
      />
      <Text style={styles.label}>Department:</Text>
      <TextInput
        style={styles.input}
        value={department}
        onChangeText={text => setDepartment(text)}
      />
      <Text style={styles.label}>StaffId:</Text>

      <TextInput
        style={styles.input}
        value={staffid}
        onChangeText={text => setStaffid(text)}
      />
      {/* <View style={styles.imageContainer}>
      <CustomButton title="Choose Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View> */}
      <CustomButton title="Add Staff" onPress={handleAddCandidate} />
      </View>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default AddStaff;
