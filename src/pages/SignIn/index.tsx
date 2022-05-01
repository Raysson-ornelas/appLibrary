import React, { useEffect, useState } from 'react';
import {TextInput, Button} from 'react-native-paper';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Models';

import * as Animatable from 'react-native-animatable';

export default function SignIn(){
    const navigation = useNavigation<propsStack>();
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ showPassword, setShowPassword ] = useState(true);

    async function handleSignIn(email:string, password: string): Promise<void>{
        const res = await fetch('https://books.ioasys.com.br/api/v1/auth/sign-in', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': '*/*',
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        if (res.status === 200){
            const token = (res.headers as any)['map'].authorization;
            navigation.navigate('Books', {token});
        }
        if (res.status === 401 || res.status === 400 ){
            {alert('E-mail e/ou senha inválido(s). Tente novamente.')}
        }
    }

    useEffect(() =>{setEmail(''), setPassword('')},[]);

    function handleChangePassword(text: string): void {
        setPassword(text);
    }
    function handleChangeEmail(text: string): void {
        setEmail(text);
    }

    return (
            <Animatable.View animation='fadeInUp' delay={300} style={styles.container}>
                <ImageBackground
                        source={require('../../assets/background.png')}
                        style={styles.imgBg}
                        resizeMode='cover'
                    >
                    <KeyboardAvoidingView style={{ padding: 20}} behavior="position" enabled>
                        <View style={styles.logo}>
                            <Image
                                source={require('../../assets/Logo-white.png')}
                                resizeMode='contain'
                            />
                            <Text style={styles.title}>Books</Text>
                        </View>
                        <TextInput
                        selectionColor='#8C8C8C'
                        activeUnderlineColor='#8C8C8C'
                        mode='flat'
                        label='Email'
                        value={email}
                        style={styles.input}
                        onChangeText={(text) => handleChangeEmail(text)}
                        theme={{ colors: { placeholder: 'white' } }} children={undefined} onPressIn={undefined} onPressOut={undefined} focusable={undefined} textAlign={undefined} onTextInput={undefined} autoComplete={undefined} showSoftInputOnFocus={undefined}                        />
                        <TextInput
                            selectionColor='#8C8C8C'
                            activeUnderlineColor='#8C8C8C'
                            mode='flat'
                            label='Senha'
                            value={password}
                            style={styles.input}
                            secureTextEntry={showPassword}
                            onChangeText={(text) => handleChangePassword(text)}
                            theme={{ colors: { placeholder: 'white' } }}

                            right={showPassword ? (
                                <TextInput.Icon
                                    name='eye'
                                    size={25}
                                    color='#fff'
                                    onPress={() => setShowPassword(!showPassword)} />
                            ) : (
                                <TextInput.Icon
                                    name='eye-off'
                                    size={25}
                                    color='#fff'
                                    onPress={() => setShowPassword(!showPassword)} />
                            )} children={undefined} onPressIn={undefined} onPressOut={undefined} focusable={undefined} textAlign={undefined} onTextInput={undefined} autoComplete={undefined} showSoftInputOnFocus={undefined}                        />
                        <Button
                            mode='contained'
                            color='#BF3F7B'
                            labelStyle={styles.button}
                            onPress={() => handleSignIn(email, password)}
                        >
                            Entrar
                        </Button>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBg: {
        flex: 1,
    },
    logo: {
        marginTop: '55%',
        flexDirection: 'row',
        width: '50%',
        marginBottom: 50,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#00000052',
        marginBottom: 20,
    },
    button:{
        fontSize: 16,
        fontWeight: 'bold',
    }
});