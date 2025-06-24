import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';

export default function StartScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/logo.png')} // imagem de fundo com o padrão "lexus"
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>Logar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} 
            onPress={() => navigation.navigate('ProfileSelect')}
          >
            <Text style={styles.registerText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#226680', // fundo inferior azul
    justifyContent: 'center',
    alignItems: 'center',
    height: '76%'
  },
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 60,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 18,
  },
  loginButton: {
    backgroundColor: '#FBF0DA',
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#226680',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    borderColor: '#FBF0DA',
    borderWidth: 2,
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#FBF0DA',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
