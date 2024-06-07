import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator,ImageBackground } from 'react-native';

const Applydetails = () => {
  const [allformData, setAllFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://192.168.43.248:4000/apply/applyDetails');
      const data = await response.json();
      setAllFormData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00a67d" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
                <Text style={styles.title}>Apply Details</Text>
              

      {allformData.map((formData, index) => (
        <View key={index} style={styles.formDataContainer}>
              <ImageBackground
                source={require('../assets/bg.png')}
                style={styles.background}
            >
          <Text style={styles.label}>Event Name:</Text>
          <Text>{formData.eventName}</Text>
          <Text style={styles.label}>Participants:</Text>
          {formData.participants.map((participant, index) => (
            <Text key={index}>{participant}</Text>
          ))}
          <Text style={styles.label}>College/Department:</Text>
          <Text>{formData.collegeOrDepartment}</Text>
          <Text style={styles.label}>Phone Number:</Text>
          <Text>{formData.phoneNo}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text>{formData.email}</Text>
      </ImageBackground>
          
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
},
background: {
    // flex: 1,
    resizeMode: "cover",
},
  formDataContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default Applydetails;
