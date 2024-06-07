import React, { useState,useEffect } from 'react';
import { View, ScrollView, StyleSheet,ImageBackground,Text,TouchableOpacity} from 'react-native';
// import PostCard from './PostCard';
import { useNavigation } from '@react-navigation/native';


const PostCard = ({ events, navigation }) => {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.card}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.background}
      >
        <View style={styles.postContent}>
          <Text style={styles.eventName}>{events.eventname}</Text>
          <Text style={styles.eventDetails}>Place: {events.place}</Text>
          <Text style={styles.eventDetails}>Organized By: {events.organized}</Text>
          <Text style={styles.eventDetails}>Date: {events.date}</Text>
          {/* <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus vel metus volutpat varius. Mauris nec lorem quis nulla dictum cursus.</Text> */}
          <TouchableOpacity onPress={increaseLikes} style={styles.likeButton}>
            <Text style={styles.likeButtonText}>Like</Text>
          </TouchableOpacity>
          <Text style={styles.likeCount}>{likes} likes</Text>
          <TouchableOpacity  style={styles.applyButton} onPress={() => navigation.navigate('stdapply')}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};


const StdDashboard = () => {
  const [likes, setLikes] = useState(0);
  const [events, setEvents] = useState([]);


  const increaseLikes = () => {
    setLikes(likes + 1);
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

  // const EventService=(studentId,UserName,dept,sem,email,password)=>{
  //   const Pass_Data={
  //     apiUrl:Api+"users/signup",
  //     requestBody:{
  //       studentId:studentId,
  //       username: UserName,
  //       department: dept,
  //       semester:sem,
  //       email:email,
  //       password:password
  //     }
  //   }
  //   Post_call(Pass_Data).then((res)=>{
  //     console.log(res)
  //     navigation.navigate('stddash')
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }

  // Sample event details array, replace this with actual event data
  // const eventDetailsArray = [
  //   {
  //     eventname: 'Tech Event 1',
  //     place: 'Tech Center 1',
  //     organized: 'Tech Company 1',
  //     date: '2024-03-01',
  //   },
  //   {
  //     eventname: 'Tech Event 2',
  //     place: 'Tech Center 2',
  //     organized: 'Tech Company 2',
  //     date: '2024-03-02',
  //   },
  //   {
  //     eventname: 'Tech Event 3',
  //     place: 'Tech Center 3',
  //     organized: 'Tech Company 3',
  //     date: '2024-03-03',
  //   },
  // ];
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {events.map((eventDetails, index) => (
        <PostCard key={index} events={eventDetails} navigation={navigation} />
        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flexGrow: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingVertical: 20,
  // },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  postContent: {
    padding: 10,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  likeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  likeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  likeCount: {
    fontSize: 14,
    color: '#666666',
  },
  applyButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  applyButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default StdDashboard;
