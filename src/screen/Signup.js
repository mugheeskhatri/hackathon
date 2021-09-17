import { View , Text, TextInput, TouchableOpacity , Image, ScrollView , StyleSheet, ImageBackground} from "react-native";
import React , {useState , useEffect , useRef} from 'react';
import { signUp  } from "../config/action";
import Icon from 'react-native-vector-icons/EvilIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function SignUp({navigation}){
    const [userName , setUserName] = useState('mughees')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [age , setAge] = useState('')
    const [phone , setPhone] = useState('')
    const [ imgSrc , setImgSrc ] = useState('')
    const [uri , setUri ] = useState('')
    const work = ()=>{
        let data = {
            userName,email,password,phone,age,uri
        }
        console.log('done')
        signUp(data,navigation)
    }

    let gallery = ()=> {
        let options = {
            mediaType:'photo'
        }
        launchImageLibrary(options, (response)=>{
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                console.log(response.assets[0].uri)
                setImgSrc(response.assets[0].uri)
            }
        });
    }
    
    let camera = ()=> {
        let options = {
            mediaType:'photo'
        }
        launchCamera(options, (response)=>{
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                console.log(response.assets[0].uri)
                setImgUrl(response.assets[0].uri)
                
            }
        });
    }


          return(
          <ImageBackground source={require('../assets/images/bg.png')} resizeMode="cover" style={{width:'100%',flex:1}} >
              <View style={{flex:1}}>
                  <View style={{marginTop:40,height:50,justifyContent:'center',alignItems:'center',width:'70%'}}>
                  <Text style={{fontSize:32,fontWeight:'bold',}}>UH FASHION</Text>
                  </View>
        <View style={{flex:3,justifyContent:'center', alignItems:'center'}}>

            <View style={{width:"85%",backgroundColor:'white'}}>
        <View style={{backgroundColor:'#7732E7',width:'40%',padding:20,alignItems:'center',justifyContent:'center',marginTop:20,borderTopEndRadius:35,borderBottomEndRadius:35}}><Text style={{fontWeight:'bold',fontSize:20,color:'#F3C128'}}>Sign Up</Text></View>
               <View style={{alignItems:'center'}}>
               <View style={{marginTop:20,width:"100%",alignItems:'center'}}>
                <TextInput onChangeText={(e)=> setUserName(e)} style={style.input} placeholder="Enter Name" />
<TextInput keyboardType="email-address" onChangeText={(e)=> setEmail(e)} style={style.input} placeholder="Enter username or email" />
 <TextInput secureTextEntry={true} onChangeText={(e)=> setPassword(e)} style={style.input} placeholder="Enter password" />
 <TextInput onChangeText={(e)=> setAge(e)} style={style.input} placeholder="Enter Age" />
 <TextInput keyboardType={"number-pad"} onChangeText={(e)=> setPhone(e)} style={style.input} placeholder="Enter Phone" />
 <TouchableOpacity style={style.socialBtn} onPress={gallery}>
<View style={{width:'30%',alignItems:'flex-end'}}>
<Icon name="camera" size={25} color="#7732E7" style={{padding:8}} />

    </View>
    <View style={{width:'70%'}}>
    <Text style={{color:'#134c70',fontSize:13,marginLeft:20}}>Add Image</Text>
    </View>
</TouchableOpacity>
<View style={{width:'100%',alignItems:'center'}}>
<TouchableOpacity style={style.signup} onPress={work}>
    <Text style={{color:'#F3C128',fontSize:24,fontWeight:'bold'}}>Sign Up</Text>
</TouchableOpacity>
<TouchableOpacity style={{marginTop:15,paddingBottom:10}} onPress={()=> navigation.navigate('Login2')}>          
  <Text style={{fontSize:16,color:'#6066D0'}}>Already have an account?</Text>
</TouchableOpacity> 
</View>

                </View>
               </View>
            </View>
            </View>
            
          </View>
          </ImageBackground>

)
}

export default SignUp;



const style = StyleSheet.create({
    input:{
        width:'90%',
        borderRadius:50,
        fontSize:15,
        padding:10,
        paddingLeft:25,
        borderBottomWidth:1,
        borderColor:'#c3c5c7',
        marginTop:10
    },
    btn:{
        width:'80%',
        borderRadius:10,
        fontSize:15,
        padding:10,
        backgroundColor:'#6066D0',
        marginTop:24,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        zIndex:2
    },
    socialBtn:{
        flexDirection:'row',
        width:'80%',
        borderRadius:20,
        fontSize:12,
        padding:5,
        marginTop:10,alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#6066D0'
    },
    imageBtn:{
        flexDirection:'row',
        width:'80%',
        borderRadius:20,
        fontSize:12,
        padding:10,
        marginTop:10,
        height:50,
        borderWidth:1,
        borderColor:'#6066D0',
        justifyContent:'center',
        alignItems:'center'
    },
   signup : {
       backgroundColor:'#7732E7',
   alignItems:'center',
   justifyContent:'center',
   padding:10,
   width:275,
   marginTop:20,
    borderRadius:10
}
})
{/* {camera1 ? <View style={{flex:1,marginTop:-500 }}>
<Camera camera={camera}/>
<TouchableOpacity>
<Text onPress={()=>setFlip(!flip)}>Flip Camera</Text>
</TouchableOpacity>
<TouchableOpacity onPress={takePicture}>
<Text style={{ fontSize: 14 }}> SNAP </Text>
</TouchableOpacity>
</View> : null} */}




// takePicture = async () => {
//     const options = { quality: 0.5, base64: true };
//     const data = await camera.current.takePictureAsync(options);
//     console.log("uri===>",data.uri);
//     setCamera1(false);
//     setUri(data.uri)
// };