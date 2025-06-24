import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ForgetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleEnviar = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    }
    Alert.alert('Sucesso', 'Instruções de redefinição de senha foram enviadas para seu e-mail.');
    navigation.navigate('NewPassword');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#263238" />
      </TouchableOpacity>

      <Image
        source={require('../assets/Forgotpassword-bro.png')}
        style={styles.image}
      />

      <Text style={styles.info}>
        Informe um e-mail para o qual deseja redefinir a senha.      
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
          <Text style={styles.botaoTexto}>Continuar</Text>
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
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'contain',
    marginTop: 60,
  },
  card: {
    flex: 1,
    backgroundColor: '#FDF3E7',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 24,
    marginTop: -20,
  },
  info: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  input: {
    backgroundColor: '#fff',
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 4,
    color: '#263238',
  },
  botao: {
    backgroundColor: '#004B5B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

