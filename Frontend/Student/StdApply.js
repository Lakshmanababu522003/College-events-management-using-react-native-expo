import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, ScrollView,Alert, TouchableOpacity } from 'react-native';
import{Post_call} from '../Api/post.service'
import{Api} from '../Api/config'
const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

const StdApply = ({navigation}) => {
    const [eventName, setEventName] = useState('');
    const [participants, setParticipants] = useState([]);
    const [collegeOrDepartment, setCollegeOrDepartment] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [participantName, setParticipantName] = useState('');


    const StdApplyService = (eventName,
        participants,
        collegeOrDepartment,
        phoneNo,
        email) => {
        const Pass_Data = {
            apiUrl: Api + "apply/add",
            requestBody: {
                eventName: eventName,
                participants: participants,
                collegeOrDepartment: collegeOrDepartment,
                phoneNo: phoneNo,
                email: email,
            }
        }
        Post_call(Pass_Data).then((res) => {
            console.log(res)
            Alert.alert('Sucess',"Applied Sucessfully")
            navigation.navigate('stddash')
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleApply = () => {

        if (!eventName || !participants || !collegeOrDepartment || !phoneNo || !email) {
            Alert.alert('Error', 'All fields are required');
            return;
          }
          
     
        StdApplyService(eventName,
            participants,
            collegeOrDepartment,
            phoneNo,
            email);

            setEventName('');
        setParticipants([]);
        setCollegeOrDepartment('');
        setPhoneNo('');
        setEmail('');
        setParticipantName('');

    };

    const addParticipant = () => {
        setParticipants([...participants, participantName]);
        setParticipantName('');
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/bg.png')}
                style={styles.background}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View style={{ padding: 20 }}>
                        <Text style={styles.label}>Event Name:</Text>
                        <TextInput
                            style={styles.input}
                            value={eventName}
                            onChangeText={text => setEventName(text)}
                        />
                        <Text style={styles.label}>Participants:</Text>
                        {participants.map((participant, index) => (
                            <Text key={index}>{participant}</Text>
                        ))}
                        <TextInput
                            style={styles.input}
                            value={participantName}
                            onChangeText={text => setParticipantName(text)}
                        />
                        <CustomButton
                            title="Add Participant"
                            onPress={addParticipant}
                            buttonStyle={styles.loginButton}
                            textStyle={styles.buttonText}
                        />
                        <Text style={styles.label}>College/Department:</Text>
                        <TextInput
                            style={styles.input}
                            value={collegeOrDepartment}
                            onChangeText={text => setCollegeOrDepartment(text)}
                        />
                        <Text style={styles.label}>Phone Number:</Text>
                        <TextInput
                            style={styles.input}
                            value={phoneNo}
                            onChangeText={text => setPhoneNo(text)}
                        />
                        <Text style={styles.label}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        <CustomButton
                            title="Apply"
                            onPress={handleApply}
                            buttonStyle={styles.loginButton}
                            textStyle={styles.buttonText}
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        width: "70%",
        borderWidth: 2,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000',
    },
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: '#00a67d',
    }
});

export default StdApply;
