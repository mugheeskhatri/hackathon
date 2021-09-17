import React from 'react'
import {View,Text} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import {useState , useEffect} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {signOut} from '../config/action'
function Home({navigation}) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;

    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=>signOut(navigation)} style={{marginTop:20,borderWidth:1}}><Text>Sign Out</Text></TouchableOpacity>
            </View>
    )
}

export default Home;
