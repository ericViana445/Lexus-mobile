import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet, Modal,
  Platform, StatusBar, TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductionDetailScreen({ navigation }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [editingField, setEditingField] = useState(null);

  const [titulo, setTitulo] = useState('Povos indígenas e COP30');
  const [producao, setProducao] = useState(
    'Povos indígenas marcham durante o acampamento anual Terra Livre, onde discutem direitos, proteção territorial e seu papel na COP30, que acontecerá pela primeira vez na Amazônia. O protesto foi dispersado com bombas de efeito moral e gás lacrimogênio.'
  );
  const [dataPublicacao, setDataPublicacao] = useState('10 de Abril de 2025');

  const abrirModalSalvar = () => setShowSaveModal(true);

  const confirmarSalvar = () => {
    const hoje = new Date();
    const formatada = hoje.toLocaleDateString('pt-BR', {
      day: '2-digit', month: 'long', year: 'numeric'
    });
    setDataPublicacao(formatada);
    setEditingField(null);
    setShowSaveModal(false);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Productions')}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {editingField === 'all' ? (
          <TouchableOpacity style={styles.saveButton} onPress={abrirModalSalvar}>
            <Text style={styles.saveText}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
            <Ionicons name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        )}

        {showMenu && (
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => { setEditingField('all'); setShowMenu(false); }}>
              <Text style={styles.menuItem}>Editar Produção</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowDeleteModal(true)}>
              <Text style={styles.menuItem}>Excluir Produção</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Imagem */}
      <Image source={require('../assets/indigena.png')} style={styles.image} />

      {/* Conteúdo */}
      <View style={styles.box}>
        {editingField === 'all' ? (
          <TextInput
            style={[styles.title, styles.editable]}
            value={titulo}
            onChangeText={setTitulo}
            autoFocus
          />
        ) : (
          <Text style={styles.title}>{titulo}</Text>
        )}

        <Text style={styles.label}>Autor(a):</Text>
        <Text style={styles.text}>Carmen Câmara Souza</Text>

        <Text style={styles.label}>Data de Publicação:</Text>
        <Text style={styles.text}>{dataPublicacao}</Text>

        <Text style={styles.label}>Produção Revisada por:</Text>
        <Text style={styles.text}>Lana Andrade</Text>

        <Text style={styles.label}>Produção:</Text>
        {editingField === 'all' ? (
          <TextInput
            style={[styles.text, styles.editable]}
            value={producao}
            onChangeText={setProducao}
            multiline
          />
        ) : (
          <Text style={styles.text}>{producao}</Text>
        )}
      </View>

      {/* Modal Salvar */}
      <Modal transparent visible={showSaveModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowSaveModal(false)}>
              <Ionicons name="close" size={24} color="#263238" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Deseja salvar alteração?</Text>

            <TouchableOpacity style={styles.modalBtnSim} onPress={confirmarSalvar}>
              <Text style={styles.modalBtnSimText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalBtnNao} onPress={() => setShowSaveModal(false)}>
              <Text style={styles.modalBtnNaoText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Exclusão */}
      <Modal transparent visible={showDeleteModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowDeleteModal(false)}>
              <Ionicons name="close" size={24} color="#263238" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Tem certeza que deseja excluir produção?</Text>

            <TouchableOpacity style={styles.modalBtnSim}>
              <Text style={styles.modalBtnSimText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalBtnNao} onPress={() => setShowDeleteModal(false)}>
              <Text style={styles.modalBtnNaoText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={28} color="#2E353A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
    backgroundColor: 'rgba(251, 240, 218, 1)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 60,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  box: {
    backgroundColor: 'rgba(251, 240, 218, 1)',
    margin: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  editable: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#000',
    marginTop: 10,
  },
  text: {
    fontSize: 13,
    marginVertical: 2,
    color: '#333',
    textAlign: 'justify',
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
    backgroundColor: '#226680',
  },
  menu: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 50 : 70,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 6,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  menuItem: {
    padding: 8,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#226680',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#F8E8C9',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    gap: 16,
  },
  modalClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
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
});
