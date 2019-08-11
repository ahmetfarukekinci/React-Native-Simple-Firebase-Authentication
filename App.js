import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Banner from './src/components/banner';
import LoginForm from './src/components/loginForm';
import firebase from 'firebase'; 
import Spinner from './src/components/common/Spinner';

const firebaseApiKey = {
  // please sign up firebase and get your own key 
  apiKey: 'get your own key',
  authDomain: 'get your own key',
  databaseURL: 'get your own key',
  projectId: 'get your own key',
  storageBucket: 'get your own key',
  messagingSenderId: 'get your own key',
}; 


export default class App extends React.Component {

  state= {
    loggedIn: null
  }
  
  componentWillMount(){
    // this is where we call firebase to initialize app. 
    firebase.initializeApp(firebaseApiKey);

    
    /* 
      this is the place that we control auth state. 
      if we have user in the callback function it means we are still in auth state. 
      if we dont its vice versa. 
      so in this function I update const loggedIn to make switch case pattern. 
      switch case basically return page components to auth state. 
    */
    firebase.auth().onAuthStateChanged( (user) => {
      const loggedIn = user ? true : false; 

      this.setState({ 
        loggedIn
      })
    }); 
  };

  renderContent(){
    
    const {loggedIn} = this.state; 

    switch (loggedIn) {
      case true:
          return(
              // return a page for logged in 
              <View style= {{ padding: 30}}>
              <Button 
              color= '#05a05a'
              onPress= { ()=>  firebase.auth().signOut()} // func to sign out 
              title= 'Log Out'
              /> 
              </View>
          ); 
        case false: 

        return <LoginForm/> // not auth state 

        default: 

        return <Spinner /> 
    }
  }


  render() {
    return (
      <View style= {styles.container}>
      <Banner text='Authentication' />
      {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1, 
    backgroundColor: '#F3F3F3'
  }
}); 