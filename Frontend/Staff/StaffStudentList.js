
import { View, Text, StyleSheet,ScrollView,ImageBackground } from 'react-native';
// import{Get_Call} from '../../Api/get.service'
// import{Api} from '../../Api/config'
import React, {useState,useEffect  } from 'react';


// VoterCard component to display individual voter details
const VoterCard = ({ voter }) => {
  const {studentId, username, department, semester, email } = voter;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={styles.background}
      >
        <Text style={styles.label}>studentId:</Text>
        <Text style={styles.value}>{studentId}</Text>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{username}</Text>
        <Text style={styles.label}>Department:</Text>
        <Text style={styles.value}>{department}</Text>
        <Text style={styles.label}>Semester:</Text>
        <Text style={styles.value}>{semester}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </ImageBackground>
    </View>
  );
};

// VoterList component to display a list of voters
const StaffStudentList = () => {
  const [stdDetails, setStdDetails] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const apiUrl = {
  //         apiUrl: Api + 'users/read',
  //       };
  //       const res = await Get_Call(apiUrl);
  //       console.log('Response:', res);
  //       console.log('Type of response:', typeof res);

  //       if (res.status) {
  //         setVoterDetails(res.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students List</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '80%' }}>
        {stdDetails.map((voter, index) => (
          <VoterCard key={index} voter={voter} />
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    marginTop: 40,
    margin:40,
    width:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
    marginLeft:60

  },
  card: {
    width: '95%',
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
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    
  },
});

export default StaffStudentList;
