import React , {useState} from 'react'
import {View,Text , StyleSheet , TextInput , Image , ImageBackground} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { logIn , onFacebookButtonPress , forgot} from '../config/action';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useSelector } from 'react-redux';


function Login2({navigation}) {
    const state = useSelector(state => state);
    console.log(state)
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [imgUrl , setImgUrl] = useState('')
    const work = ()=> {
        let data = {
            email,password
        }
        if(email === ''){
            alert('Enter email')
        }else if(password === ''){
            alert('Enter password')
        }else{

            console.log('mughees')
            logIn(data,navigation)
        }
    }

    let forgetPass = ()=>{
        let data = {
            email
        }
        forgot(data)
    }

    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../assets/images/bg.png')} resizeMode="cover" style={{width:'100%',flex:1}}>
        <View style={style.head}>
        <View style={{width:'60%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#7732E7'}}>UH FASHION</Text>
        </View>
        <View style={{width:'40%',alignItems:'flex-end',justifyContent:'center'}}>
            <TouchableOpacity  onPress={()=> navigation.navigate('SignUp')} style={{backgroundColor:'#F3C128',padding:10,marginRight:20}}>
                <Text>Sign Up</Text>
                </TouchableOpacity>
        </View>
        </View>
        <View style={style.formContainer}>
        <View style={style.form}>
        <Icon name="user" size={80} color="#7732E7" style={{padding:8}} />
        <View style={{width:'100%',alignItems:'center',marginTop:20}}>
        <View style={{...style.input,flexDirection:'row'}}>
        <Icon name="user" size={20} color="#6C88DB" style={{padding:8}} />
    <TextInput onChangeText={(e)=> setEmail(e)} placeholder='Enter email' />
        </View>
        <View style={{...style.input,flexDirection:'row'}}>
        <Icon3 name="lock" size={20} color="#6C88DB" style={{padding:8}} />
    <TextInput secureTextEntry={true} onChangeText={(e)=> setPassword(e)} placeholder='Enter Password' />
        </View>
        <TouchableOpacity onPress={work} style={style.loginBtn}>
            <Text style={{color:'#F3C128',fontSize:24,fontWeight:'bold'}}>Log In</Text>
            </TouchableOpacity>
<TouchableOpacity style={{marginTop:10}} onPress={forgetPass}>
<Text style={{color:'#7732E7',fontSize:18}}>Forgot Password?</Text>
</TouchableOpacity>
        </View>
        </View>
        </View>
        <View style={{flex:2,alignItems:'center'}}>
    <Text style={{fontSize:25,marginTop:30}}>_________    Or   _________</Text>
<View style={{...style.socialContainer,marginTop:50}}>
<View style={{flex:1,alignItems:'center'}}>
<TouchableOpacity onPress={()=> onFacebookButtonPress().then(()=> console.log('Logged In successfully'))}>
<Icon name="facebook-with-circle" size={45} color="#036EE4" style={{padding:10}} />
    </TouchableOpacity>
</View>
<View style={{flex:1,alignItems:'center'}}>
<TouchableOpacity>
<Icon name="google--with-circle" size={45} color="#EB483B" style={{padding:10}} />
</TouchableOpacity>
</View>
<View style={{flex:1,alignItems:'center'}}>
<TouchableOpacity>
<Icon2 name="md-logo-apple-appstore" size={45} color="black" style={{padding:10}} />
</TouchableOpacity>
</View>
</View>
</View>
    </ImageBackground>
        </View>
    )
}


let style = StyleSheet.create({

    head : {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    },
    formContainer :{
        flex:4,
        justifyContent:'flex-end',
        alignItems:'center',
        width:'100%'
    },
    form : {
        width:'85%',
        flex:1,
        borderRadius:20,
        backgroundColor:'whitesmoke',
        height:400,
        alignItems:'center'
    },
    input:{
        width:'90%',
        borderRadius:50,
        fontSize:15,
        paddingLeft:25,
        borderBottomWidth:1,
        borderColor:'#c3c5c7',
        marginTop:10
},
socialContainer : {
    width:'70%',
    backgroundColor:'#ffdb6b',
    alignItems:'center',
    marginTop:10,
    borderRadius:30,
    flexDirection:'row',
    justifyContent:'center'},

    loginBtn : {backgroundColor:'#7732E7',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    width:275,
    marginTop:55,
    borderRadius:10}
}
)
export default Login2;
{/* <View style={{flex:1,backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
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

<TouchableOpacity onPress={() => onFacebookButtonPress().then(() => navigation.navigate('Home') )}>
<Text>LogIn with Facebook</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
<Text>LogIn with Google</Text>
</TouchableOpacity>
<TouchableOpacity onPress={gallery}>
    <Text>Gallery</Text>
</TouchableOpacity>
<TouchableOpacity onPress={camera}>
    <Text>Camera</Text>
</TouchableOpacity>
<TouchableOpacity onPress={contacts}>
    <Text>Contacts</Text>
</TouchableOpacity>
    </ScrollView>
</View> */}