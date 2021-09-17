import auth, { firebase } from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

const signUp = (data,navigation)=> {
    return auth().createUserWithEmailAndPassword(data.email,data.password)
    .then(()=> {
        database().ref(`/users/`).push(data);
        navigation.navigate('Home')
    })
}

const logIn = ({email,password},navigation)=> {
    return auth().signInWithEmailAndPassword(email,password).then(()=> navigation.navigate('Home')).catch((e)=> alert('Something went wrong'))
}

const signOut = (navigation)=>{
    return auth().signOut()
    .then(()=>{
        navigation.navigate('Login')
    })
}

async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  let forgot = ({email})=>{
    auth().sendPasswordResetEmail(email)
    .then(()=>{
        alert('Code sent to your email')
    })
    .catch((e)=>{
        console.log(e)
    })
  
  }
  
  


export {
    signOut,
    signUp,
    logIn,
    onFacebookButtonPress,
    forgot
}