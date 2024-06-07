import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDashboard';
import AdminStaffList from './Admin/AdminStaffList';
import AddStaff from './Admin/AddStaff';
import AdminEventList from './Admin/AdminEventList';
import AddEvent from './Admin/AddEvent';
import Logout from './Screens/Logout';
import AdminStudentList from './Admin/AdminStudentList';
import StaffLogin from './Staff/StaffLogin';
import StaffDashboard from './Staff/StaffDashboard';
import StaffStudentList from './Staff/StaffStudentList';
import StdSignup from './Student/StdSignup';
import StdLogin from './Student/StdLogin';
import StdDashboard from './Student/StdDashboard';
import StdApply from './Student/StdApply';
import Applydetails from './Admin/Applydetails';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="alogin" component={AdminLogin} options={{
            headerShown: false
          }}/>
            <Stack.Screen name="slogin" component={StaffLogin} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="adash" component={AdminDashboard} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="sdash" component={StaffDashboard} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="astafflist" component={AdminStaffList} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="aeventlist" component={AdminEventList} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="astdlist" component={AdminStudentList} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="sstdlist" component={StaffStudentList} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="addstaff" component={AddStaff} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="addevent" component={AddEvent} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="logout" component={Logout} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="stdsignup" component={StdSignup} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="stdlogin" component={StdLogin} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="stddash" component={StdDashboard} options={{
            headerShown: false
          }}/>
           <Stack.Screen name="stdapply" component={StdApply} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="applyDetails" component={Applydetails} options={{
            headerShown: false
          }}/>
       



  


      </Stack.Navigator>  
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
