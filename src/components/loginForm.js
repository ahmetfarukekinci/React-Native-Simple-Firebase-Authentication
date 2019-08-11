import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import Input from './common/input';
import firebase from 'firebase';
import Spinner from './common/spinner';
class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onClick() {
        const { email, password } = this.state;

        this.setState({
            error: '',
            loading: true // Spinner starts 
        });
        /* 
        This then catch chain is the place where firebase controls whether 
        email and password are signed up and right to log in in the firt then block. 
        If the user has not signed up with this email before it creates a user in the first catch block. 
        If the email has signed up and email or password is wrong then at the last catch block authentication is fails. 
        */
        firebase.auth().signInWithEmailAndPassword(email, password).
            then(
                this.onLoginSuccess.bind(this) // user enter valid email and password 
            )
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password). // user enter unvalid email for firebase that it creates new user 
                    then(this.onLoginSuccess.bind(this)) // user is succesfully auth with new email
                    .catch(this.onLoginFail.bind(this)) // user entered wrong password or email 
            });
    };

    onLoginSuccess() {

        // auth is succeed. all states turns back to default 
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    };

    onLoginFail() {
        // auth failed. Error message is shows up. All states turns back to default  
        this.setState({
            email: '',
            password: '',
            error: 'err',
            loading: false
        });
    };

    failAlert() {
        // Text message that is between password text input and button 
        let errorMessage = null;
        const err = (
            <View style={{ paddingTop: 5, alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>Authentication Failed</Text>
            </View>
        )
        this.state.error !== '' ? errorMessage = err : null;
        return errorMessage;
    };


    buttonRender() {
        // this is for render button or spinner depending on loading state.  
        const { loading } = this.state;

        let button = null;

        const spinner = <Spinner />

        const logInButton = (
            <Button
                color='#05a05a'
                title='Log In'
                onPress={this.onClick.bind(this)}
            />
        );

        loading ? button = spinner : button = logInButton;

        return button;
    };


    render() {
        return (
            <View style={{ padding: 30 }}>

                <Input
                    text='E-Mail'
                    inputPlaceHolder='Enter Email'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    keyboardType='email-address'
                />
                <Input
                    text='Password'
                    inputPlaceHolder='Enter Password'
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry
                />

                {this.failAlert()}

                <View style={{ paddingTop: 8 }}>

                    {this.buttonRender()}

                </View>

            </View>

        );
    }
}

export default LoginForm;