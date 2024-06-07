import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventCard = ({ event,navigation }) => {
    const { eventname, place, organized, date } = event;

    return (
        <View style={styles.card}>
            {/* <Image source={{ uri: image }} style={styles.image} /> */}
            <View style={styles.details}>
                <Text style={styles.name}>{eventname}</Text>
                <Text style={styles.info}>Place: {place}</Text>
                <Text style={styles.info}>Organized By: {organized}</Text>
                <Text style={styles.info}>Date: {date}</Text>
                <TouchableOpacity style={styles.voteButton} onPress={() => navigation.navigate('applyDetails')} >
                    <Text style={styles.voteButtonText}>Apply Detais</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const AdminEventList = () => {
  const navigation = useNavigation();

    const [events, setEvents] = useState([]);

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

    return (
        <View style={styles.screen} >
            <ImageBackground
                source={require('../assets/bg.png')}
                style={styles.background}
            >
                <Text style={styles.title}>Ongoing Events</Text>
                <TouchableOpacity style={{ backgroundColor: '#1E90FF', height: 40, marginTop: 0, marginBottom: 20, marginLeft: 190, borderRadius: 10, width: 140, padding: 5, }} onPress={() => navigation.navigate('addevent')}>
                    <Text style={{ fontWeight: 'bold', marginLeft: 9 }}>+ Add Events</Text>
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} navigation={navigation} />
                    ))}
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default AdminEventList;

const styles = StyleSheet.create({
  
    screen: {
        flex: 1,
        marginTop: 30,
    },
    voteButton: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 25
    },
    voteButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
      height:'auto',
        width: '90%',
        marginLeft: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    // marginTop:100
    },
    details: {
        marginTop: -10,
        // marginLeft: 130,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%'
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
    },
})
