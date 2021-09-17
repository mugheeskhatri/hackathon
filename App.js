import 'react-native-gesture-handler';
import React from 'react';
import {View , Text} from 'react-native'
import MyStack from './src/config/Stack';
import { Provider } from 'react-redux';
import store from './src/store';
function App() {
  return(
    <Provider store={store}>

      <MyStack />
    </Provider>
  
  )
}

export default App;