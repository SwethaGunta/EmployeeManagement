import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './reusable';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange = (text) =>{
        this.props.emailChanged(text)
    }
    onPasswordChange = (text)=>
    {
        this.props.passwordChanged(text)
    }
    onButtonPress = ()=>
    {   
        const { email, password } = this.props;
        this.props.loginUser({ email , password })
    }
    renderError = ()=>{
        if(this.props.error)
        {
            return (
                <View style={{backgroundColor: '#ffffff'}}>
                    <Text style={{
                        color: '#800000',
                        fontSize: 20,
                        alignSelf: 'center'}}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    renderButtonOrSpinner = () =>
    {
        if(this.props.isLoading)
        {
          return <Spinner size = 'large' />
        }
        return(
            <Button onPress={()=>this.onButtonPress()}>
                Log In
            </Button>  
        )
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        placeholder = "user@gmail.com"
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(text)=>this.onEmailChange(text)}
                        value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                            label = "Password"
                            placeholder = "password"
                            underlineColorAndroid = 'transparent'
                            secureTextEntry
                            onChangeText = {(text)=>this.onPasswordChange(text)}
                            value = {this.props.password}
                        />
                </CardSection>
                    {this.renderError()}
                <CardSection>
                    {this.renderButtonOrSpinner()}
                </CardSection>
            </Card>
        )
    }
}
const mapStateToProps = state =>
{
    return { 
        email:state.auth.email, 
        password: state.auth.password, 
        error: state.auth.error, 
        isLoading: state.auth.isLoading
    }
}
export default connect(mapStateToProps, 
    {
        emailChanged, passwordChanged, loginUser
    })(LoginForm)