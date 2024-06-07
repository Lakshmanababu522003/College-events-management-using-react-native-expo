import React, { useState, useEffect } from 'react';

import { View, Text, Button,Image, StyleSheet,ScrollView ,TouchableOpacity,ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
// import { Post_call } from '../Api/post.service';




const CandidateCard = ({ candidate }) => {
    const { email,  position, department } = candidate;
    const navigation = useNavigation();

    // const ViewVoterService=(name,position,department)=>{
    //   const Pass_Data={
    //     apiUrl:Api+"vote/voterData",
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
  
    return (
      <View style={styles.card}>
        {/* <Image source={{ uri: image }} style={styles.image} /> */}
        <View style={styles.details}>
          <Text style={styles.name}>{email}</Text>
          <Text style={styles.position}>{position}</Text>
          <Text style={styles.department}>{department}</Text>
        </View>
        
      </View>
    );
  };

const AdminStaffList = ({navigation}) => {
   

  const [candidates, setCandidates] = useState([]);


    useEffect(() => {
      fetchCandidates();
    }, [candidates]);
  
    const fetchCandidates = async () => {
      try {
        const response = await fetch('http://192.168.43.248:4000/staff/read');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error(error);
      }
    };
    
      return (
        <View style={styles.screen}>
          <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.background}
      >          
          <Text style={styles.title}>List of Staffs</Text>

          <TouchableOpacity style={{backgroundColor:'#1E90FF',height:40,marginTop:0,marginBottom:20,marginLeft:160,borderRadius:10,width:155,padding:5,}} onPress={()=>navigation.navigate('addstaff')}>
            <Text style={{fontWeight:'bold',marginLeft:15}}>+ Add Staffs</Text>
          </TouchableOpacity>

          <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          {candidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} />
          ))}
          </ScrollView>
          </ImageBackground>

        </View>
      );
}

export default AdminStaffList

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        // padding: 20,
        marginTop:30
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',

      },
      card: {
        height:150,
        paddingTop:100,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        width: '80%',
        marginLeft:40,
        // marginTop:100,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      eventcard: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      // image: {
      //   width: 100,
      //   height: 100,
      //   borderRadius: 50,
      // },
      details: {
        // flex: 1,
        marginTop:-70,
        // marginLeft: 130,
        
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        width:'100%',
        
      },
      position: {
        fontSize: 16,
        color: '#666',
      },
      department: {
        fontSize: 14,
        color: '#666',
      },
      voteButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop:25
      },
      voteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
      },
      Overviewcard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 3, // for Android
        shadowColor: '#000', // for iOS
        shadowOpacity: 0.2, // for iOS
        shadowOffset: { width: 0, height: 2 }, // for iOS
        shadowRadius: 2, // for iOS
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    background: {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: "center",
      
    },
})