import React, { Component } from 'react';
import { View, Text } from  'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentDidMount(){
        var config = {
            apiKey: 'AIzaSyAw8PI1T4mZdd6-yTUvsU0MSqeXJppMrfg',
            authDomain: 'employeemanagement-bd97a.firebaseapp.com',
            databaseURL: 'https://employeemanagement-bd97a.firebaseio.com',
            projectId: 'employeemanagement-bd97a',
            storageBucket: 'employeemanagement-bd97a.appspot.com',
            messagingSenderId: '459059513670'
          };
          firebase.initializeApp(config);
    }
    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}

export default App