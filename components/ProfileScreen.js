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

export default function PerfilScreen({ navigation }) {
  const [editandoCampo, setEditandoCampo] = useState(null);
  const [nome, setNome] = useState('Carmen Câmara Souza');
  const [email, setEmail] = useState('aluno@uni.edu.br');
  const [senha, setSenha] = useState('*****');
  const [showSalvarModal, setShowSalvarModal] = useState(false);
  const [showExcluirModal, setShowExcluirModal] = useState(false);

  const primeiroNome = nome.split(' ')[0];

  const handleSalvarCampo = () => {
    setShowSalvarModal(true);
  };

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#263238" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>
      </View>

      {/* Foto e primeiro nome */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarWrapper}>
          <Image source={require('../assets/Profile.jpg')} style={styles.avatar} />
          <Ionicons name="camera" size={20} color="#fff" style={styles.cameraIcon} />
        </View>
        <Text style={styles.nome}>{primeiroNome}</Text>
      </View>

      {/* Ações */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateProduction')}>
  <Text style={styles.acao}><Ionicons name="pencil" /> Produzir Texto</Text>
</TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Productions')}>
  <Text style={styles.acao}><Ionicons name="book" /> Visualizar Produções</Text>
</TouchableOpacity>

        <TouchableOpacity onPress={() => setShowExcluirModal(true)}>
          <Text style={styles.acao}><Ionicons name="trash" /> Excluir conta</Text>
        </TouchableOpacity>
      </View>

      {/* Campos editáveis */}
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

      {/* Modal salvar */}
      <Modal transparent visible={showSalvarModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalBox, { backgroundColor: '#F8E8C9' }]}>            
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowSalvarModal(false)}>
              <Ionicons name="close" size={24} color="#263238" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Deseja salvar alteração?</Text>
            <TouchableOpacity
              style={styles.modalBtnSim}
              onPress={() => {
                setEditandoCampo(null);
                setShowSalvarModal(false);
              }}>
              <Text style={styles.modalBtnSimText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalBtnNao}
              onPress={() => setShowSalvarModal(false)}>
              <Text style={styles.modalBtnNaoText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal excluir */}
      <Modal transparent visible={showExcluirModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalBox, { backgroundColor: '#F8E8C9' }]}>  
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowExcluirModal(false)}>
              <Ionicons name="close" size={24} color="#263238" />
            </TouchableOpacity>
            <Text style={[styles.modalText, { marginTop: 32 }]}>Tem certeza que deseja excluir conta?</Text>
            <TouchableOpacity style={styles.modalBtnSim}><Text style={styles.modalBtnSimText}>Sim</Text></TouchableOpacity>
            <TouchableOpacity style={styles.modalBtnNao} onPress={() => setShowExcluirModal(false)}><Text style={styles.modalBtnNaoText}>Não</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
  <TouchableOpacity>
    <Ionicons name="person" size={28} color="#2E353A" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
    <Ionicons name="home" size={28} color="#2E353A" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('MessagesList')}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    width: '80%',
    alignItems: 'center',
    position: 'relative',
    gap: 16,
  },
  modalClose: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
  },
  modalBtnSim: {
    width: '100%',
    backgroundColor: '#226680',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  modalBtnSimText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalBtnNao: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#226680',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  modalBtnNaoText: {
    color: '#226680',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
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