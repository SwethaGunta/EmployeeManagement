import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './reusable';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange = (text) =>{
        this.props.emailChanged(text)
    }
    onPasswordChange = (text)=>
    {
        this.props.passwordChanged(text)
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        placeholder = "user@gmail.com"
                        underlineColorAndroid = 'transparent'
                        onChangeText = {this.onEmailChange()}
                        value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                            label = "Password"
                            placeholder = "password"
                            underlineColorAndroid = 'transparent'
                            secureTextEntry
                            onChangeText = {this.onPasswordChange()}
                            value = {this.props.password}
                        />
                </CardSection>
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}
const mapStateToProps = state =>
{
    return { email: state.auth.email, password: state.auth.password }
}
export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm)