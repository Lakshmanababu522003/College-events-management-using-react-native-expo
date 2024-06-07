import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View,Image, Alert } from 'react-native';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

export default function Welcome({navigation}) {
    const handleStudent = () => {
        // Handle sign up logic
        // Alert.alert('you are moved to signup page');
        // console.log('Sign up button pressed');
        navigation.navigate('stdlogin')
      };
    
      const handleStaff = () => {
        // Handle sign in logic
        console.log('Sign in button pressed');
        navigation.navigate('slogin')

      };
      const handleAdmin = () => {
        // Handle sign in logic
        console.log('Sign in button pressed');
        navigation.navigate('alogin')

      };
  return (
      <View style={{width:"100%",backgroundColor:"#00BFFF", height: "55%", borderBottomRightRadius: 60,borderBottomLeftRadius:60 }}>
         <View style={{marginLeft:80,marginTop:50,width:"100%"}}>
         <Image
        style={{width:200,height:200,}}
        source={require('../assets/logo.png')}
        transition={1000}
      />
      </View>
      <View>
        <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}}>EMG EVENTS</Text>
      <Text style={{marginTop:20,fontSize:12,width:"100%",textAlign:"center",lineHeight:30,fontWeight:"bold",color:'yellow'}}> "அன்பும் அறிவும் பண்பும் யாதவம் " -{'\n'} " மகளிர்
              அறிவு குடும்ப உயர்வு" </Text>
      </View>
        <View >
            
        
        <CustomButton
        title="Student"
        onPress={handleStudent}
        buttonStyle={styles.stdButton}
        textStyle={styles.buttonText}
      />
      <CustomButton
        title="Staff"
        onPress={handleStaff}
        buttonStyle={styles.staffButton}
        textStyle={styles.buttonText}
      />
      <CustomButton
        title="Admin"
        onPress={handleAdmin}
        buttonStyle={styles.adminButton}
        textStyle={styles.buttonText}
      />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        marginTop:120,
        marginLeft:30,
      alignItems: 'center',
      padding: 10,
      borderRadius: 90,
      width:"80%"
    },
    buttonText: {
      fontSize: 16,
      color: '#000',
      fontWeight:'bold',

    },
    stdButton: {
      backgroundColor: '#00BFFF',
    },
    staffButton: {
        marginTop:40,
      backgroundColor: '#00BFFF',
    },
    adminButton: {
        marginTop:40,
      backgroundColor: '#00BFFF',
    },
  });
