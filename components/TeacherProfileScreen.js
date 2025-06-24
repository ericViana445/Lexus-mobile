import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TeacherProfileScreen({ navigation }) {
  const [editandoCampo, setEditandoCampo] = useState(null);
  const [nome, setNome] = useState('Lana Andrade');
  const [instituicao, setInstituicao] = useState('Universidade Nacional Iva');
  const [email, setEmail] = useState('daest@uni.edu.br');
  const [senha, setSenha] = useState('*****');
  const [showSalvarModal, setShowSalvarModal] = useState(false);
  const [showExcluirModal, setShowExcluirModal] = useState(false);

  const primeiroNome = nome.split(' ')[0];

  const handleSalvarCampo = () => {
    setShowSalvarModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>
      </View>

      <View style={styles.profileHeader}>
        <View style={styles.avatarWrapper}>
          <Image source={require('../assets/teacher.jpg')} style={styles.avatar} />
          <Ionicons name="camera" size={20} color="#fff" style={styles.cameraIcon} />
        </View>
        <Text style={styles.nome}>{primeiroNome} <Ionicons name="create-outline" size={14} /></Text>
      </View>

      <View style={styles.actions}>
<TouchableOpacity onPress={() => navigation.navigate('CreateClass')}>
  <Text style={styles.acao}><Ionicons name="add-circle-outline" /> Criar Turma</Text>
</TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Class')}>
  <Text style={styles.acao}>
    <Ionicons name="people" /> Gerenciar Turmas
  </Text>
</TouchableOpacity>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowExcluirModal(true)}>
          <Text style={styles.acao}><Ionicons name="trash" /> Excluir conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Ionicons name="person" size={20} color="#263238" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Nome</Text>
            {editandoCampo === 'nome' ? (
              <TextInput
                style={styles.infoInput}
                value={nome}
                onChangeText={setNome}
                onBlur={handleSalvarCampo}
                autoFocus
              />
            ) : (
              <Text style={styles.infoText}>{nome}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => setEditandoCampo('nome')}>
            <Ionicons name="create-outline" size={18} color="#263238" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="business" size={20} color="#263238" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Nome da Instituição</Text>
            {editandoCampo === 'instituicao' ? (
              <TextInput
                style={styles.infoInput}
                value={instituicao}
                onChangeText={setInstituicao}
                onBlur={handleSalvarCampo}
                autoFocus
              />
            ) : (
              <Text style={styles.infoText}>{instituicao}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => setEditandoCampo('instituicao')}>
            <Ionicons name="create-outline" size={18} color="#263238" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="mail" size={20} color="#263238" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>E-mail</Text>
            {editandoCampo === 'email' ? (
              <TextInput
                style={styles.infoInput}
                value={email}
                onChangeText={setEmail}
                onBlur={handleSalvarCampo}
                autoFocus
              />
            ) : (
              <Text style={styles.infoText}>{email}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => setEditandoCampo('email')}>
            <Ionicons name="create-outline" size={18} color="#263238" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="lock-closed" size={20} color="#263238" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Senha</Text>
            {editandoCampo === 'senha' ? (
              <TextInput
                style={styles.infoInput}
                value={senha}
                onChangeText={setSenha}
                onBlur={handleSalvarCampo}
                secureTextEntry
                autoFocus
              />
            ) : (
              <Text style={styles.infoText}>{senha}</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => setEditandoCampo('senha')}>
            <Ionicons name="create-outline" size={18} color="#263238" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Ionicons name="person" size={28} color="#2E353A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ClassDetail')}>
          <Ionicons name="home" size={28} color="#2E353A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MessagesList2')}>
          <Ionicons name="chatbubble" size={28} color="#2E353A" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E8C9',
  },
  header: {
    backgroundColor: '#226680',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 60,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#263238',
    padding: 6,
    borderRadius: 20,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  actions: {
    paddingHorizontal: 24,
    gap: 8,
    marginBottom: 20,
  },
  acao: {
    fontSize: 15,
    color: '#000',
  },
  infoBox: {
    paddingHorizontal: 24,
    gap: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  infoContent: {
    flex: 1,
    gap: 4,
  },
  infoLabel: {
    fontSize: 13,
    color: 'gray',
  },
  infoText: {
    fontSize: 15,
    color: '#000',
  },
  infoInput: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: '#999',
    paddingVertical: 2,
    color: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 102, 128, 1)',
  },
});
