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

export default function NewPasswordScreen({ navigation }) {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrar, setMostrar] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const handleConfirmar = () => {
    if (!senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    Alert.alert('Sucesso', 'Senha redefinida com sucesso.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#263238" />
      </TouchableOpacity>

      <Image
        source={require('../assets/Login-bro.png')}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputSenha}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!mostrar}
            value={senha}
            onChangeText={setSenha}
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => setMostrar(!mostrar)}>
            <Ionicons name={mostrar ? 'eye-off' : 'eye'} size={24} color="#5a6b6c" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar Senha</Text>
        <View style={styles.inputSenha}>
          <TextInput
            placeholder="Confirmar Senha"
            secureTextEntry={!mostrarConfirmar}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
            <Ionicons name={mostrarConfirmar ? 'eye-off' : 'eye'} size={24} color="#5a6b6c" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleConfirmar}>
          <Text style={styles.botaoTexto}>Confirmar</Text>
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
  label: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 4,
    color: '#263238',
  },
  inputSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  inputText: {
    flex: 1,
    color: '#000',
  },
  botao: {
    backgroundColor: '#004B5B',
    marginTop: 42,
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

