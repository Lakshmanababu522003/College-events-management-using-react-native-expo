import React,{useEffect,useState} from 'react';
import { View, Text, Button,Image, StyleSheet,ScrollView ,TouchableOpacity,ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Logout from '../Pages/Logout';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from './CustomDrawer';


const Stack = createStackNavigator();



  

  const Overview = ({navigation}) =>{
  const [candidates, setCandidates] = useState([]);
  const [voterDetails, setVoterDetails] = useState([]);
  const [events, setEvents] = useState([]);
  const [stdDetails, setStdDetails] = useState([]);



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
  useEffect(() => {
    fetchEvents();
}, [events]);

const fetchEvents = async () => {
    try {
        const response = await fetch('http://192.168.43.248:4000/event/read');
        const data = await response.json();
        setEvents(data);
    } catch (error) {
        console.error(error);
    }
};
useEffect(() => {
  fetchstudent();
}, [stdDetails]);

const fetchstudent = async () => {
  try {
    const response = await fetch('http://192.168.43.248:4000/users/read');
    const data = await response.json();
    setStdDetails(data);
  } catch (error) {
    console.error(error);
  }
};
    return(
        
        <View style={styles.screen}>
            <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.background}
      >
            
       
        <TouchableOpacity onPress={() => navigation.navigate('astafflist')}>
            <View style={styles.Overviewcard}>
                <Text style={styles.cardTitle}>Staffs</Text>
                <Text>{candidates.length} Members</Text>
            </View>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => navigation.navigate('aeventlist')}>
            <View style={styles.Overviewcard}>
                <Text style={styles.cardTitle}>Events</Text>
                <Text>{events.length} events</Text>
            </View>
        </TouchableOpacity>

       
        <TouchableOpacity onPress={() => navigation.navigate('astdlist')}>
            <View style={styles.Overviewcard}>
                <Text style={styles.cardTitle}>Students</Text>
                <Text>{stdDetails.length} Members</Text>
            </View>
        </TouchableOpacity>
        </ImageBackground>
    </View>
    )
  }
  

const AdminDashboard = () => {
  const Drawer = createDrawerNavigator();

  return (
    
      <Drawer.Navigator drawerContent={props=><CustomDrawer {...props} />}>
        <Drawer.Screen name="Dashboard" component={Overview} />

      </Drawer.Navigator>
    
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        // padding: 20,
        marginTop:0,


      },
      background: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center",
      },
      
      Overviewcard: {
        width:'70%',
marginLeft:50,
        marginTop:70,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        elevation: 3, // for Android
        shadowColor: '#000', // for iOS
        shadowOpacity: 0.2, // for iOS
        shadowOffset: { width: 0, height: 2 }, // for iOS
        shadowRadius: 2,
        alignItems:'center'
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
    
});

export default AdminDashboard;
