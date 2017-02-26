import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';
import t from 'tcomb-form-native';

let Form = t.form.Form;

let LoginModel = t.struct({
    email: t.String,              // a required string
    password: t.String,
    // surname: t.maybe(t.String),  // an optional string
    // age: t.Number,               // a required number
    rememberMe: t.Boolean        // a boolean
});

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref="form"
                    type={LoginModel}
                />

                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});