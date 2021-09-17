import React , {useState} from 'react'
import {View,Text , StyleSheet , TextInput , Image , ImageBackground} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { logIn , onFacebookButtonPress,onGoogleButtonPress } from '../config/action';
import Icon from 'react-native-vector-icons/Entypo';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';


function Login({navigation}) {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [imgUrl , setImgUrl] = useState('')
    const work = ()=> {
        let data = {
            email,password
        }
        console.log('mughees')
        logIn(data,navigation)
    }

  

//    let gallery = ()=> {
//         let options = {
//             mediaType:'photo'
//         }
//         launchImageLibrary(options, (response)=>{
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//               } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//               } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//               } else {
//                 console.log(response.assets[0].uri)
//                 setImgUrl(response.assets[0].uri)
//             }
//         });
//     }

    // let camera = ()=> {
    //     let options = {
    //         mediaType:'photo'
    //     }
    //     launchCamera(options, (response)=>{
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //           } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //           } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //           } else {
    //             console.log(response.assets[0].uri)
    //             setImgUrl(response.assets[0].uri)
                
    //         }
    //     });
    // }
    
    return (
        <View style={style.main}>
            <View style={{flex:1,backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>Login Form</Text>  
            </View>
            <View style={{flex:7,alignItems:'center'}}>
                <ScrollView>

            {imgUrl ?<Image source={{uri:imgUrl}} style={{width:300,height:400}} /> : null}
            <Icon name="user" size={100} color="#900" style={{padding:15}} />
                <TextInput onChangeText={(e)=> setEmail(e)} style={style.input} placeholder='Enter email' />
                <View>
                <TextInput onChangeText={(e)=> setPassword(e)} style={style.input} placeholder='Enter Password' />
                <Icon name="eye" size={50} color="black" style={{padding:15}} />

                </View>
            <TouchableOpacity style={style.input} onPress={work}>
                <Text>
                    Log In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onFacebookButtonPress().then(() => navigation.navigate('Home') )}>
            <Text>LogIn with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
            <Text>LogIn with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
            <Text>Register Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={gallery}>
                <Text>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={camera}>
                <Text>Camera</Text>
            </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}


let style = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'whitesmoke'
    },

    input:{
    borderColor:'black',
    borderWidth:1,
    width:'80%',
    padding:10,
    marginTop:20,
    borderRadius:10,
    fontSize:15
}

})
export default Login;