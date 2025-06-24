import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

const handleLogin = () => {
  if (!email || !senha) {
    Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    return;
  }

  // Login de aluno
  if (email === 'aluno@uni.edu.br' && senha === 'aluno123') {
    navigation.navigate('Home');
    return;
  }

  // Login de professor
  if (email === 'daest@uni.edu.br' && senha === 'un1@__') {
    navigation.navigate('Class');
    return;
  }

  // Erro genérico
  Alert.alert('Erro', 'E-mail ou senha inválidos.');
};


  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#263238" />
      </TouchableOpacity>

      {/* Topo com imagem */}
      <View style={styles.top}>
        <Image
          source={require('../assets/Mobilelogin-bro.png')}
          style={styles.image}
        />
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Ionicons
              name={mostrarSenha ? 'eye-off' : 'eye'}
              size={24}
              color="#263238"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.esqueci} onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.esqueciTexto}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004B5B',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  image: {
    width: 236,
    height: 236,
    resizeMode: 'contain',
  },
  form: {
    flex: 2,
    backgroundColor: '#FDF3E7',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 24,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 4,
    color: '#263238',
  },
  input: {
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 44,
  },
  inputSenha: {
    flex: 1,
  },
  esqueci: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  esqueciTexto: {
    color: '#004B5B',
    fontSize: 13,
  },
  botao: {
    backgroundColor: '#004B5B',
    marginTop: 32,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

