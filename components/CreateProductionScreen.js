import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, Image, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView, StatusBar, Modal
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

export default function CreateProductionScreen({ navigation }) {
  const [tipoSelecionado, setTipoSelecionado] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [data, setData] = useState('');
  const [revisor, setRevisor] = useState('');
  const [producao, setProducao] = useState('');
  const [showModalRedacao, setShowModalRedacao] = useState(false);
  const [showModalPodcast, setShowModalPodcast] = useState(false);
  const [showModalImagem, setShowModalImagem] = useState(false);
  const [modalCapaVisivel, setModalCapaVisivel] = useState(false);

  const tipos = ['Redação', 'Imagem', 'Podcast'];

  const abrirArquivosUsuario = async () => {
    const resultado = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (resultado.type === 'success') {
      console.log('Arquivo selecionado:', resultado.uri);
      setShowModalRedacao(false);
      setShowModalPodcast(false);
      setModalCapaVisivel(true); // Exibe o segundo modal
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#000" />
        </View>

        <View style={styles.tipoWrapper}>
          <Image source={require('../assets/producao.png')} style={styles.image} />
          <View style={styles.tipoContainer}>
            {tipos.map((tipo) => (
              <TouchableOpacity
                key={tipo}
                style={[
                  styles.tipoButton,
                  tipoSelecionado === tipo && styles.tipoButtonAtivo
                ]}
                onPress={() => {
                  setTipoSelecionado(tipo);
                  if (tipo === 'Redação') setShowModalRedacao(true);
                  if (tipo === 'Podcast') setShowModalPodcast(true);
                  if (tipo === 'Imagem') setShowModalImagem(true);
                }}
              >
                <Text style={styles.tipoButtonText}>{tipo}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formBox}>
          <TextInput
            style={styles.input}
            placeholder="Título da Produção"
            value={titulo}
            onChangeText={setTitulo}
          />
          <Text style={styles.label}>Autor(a):</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={autor}
            onChangeText={setAutor}
          />
          <Text style={styles.label}>Data de Publicação:</Text>
          <TextInput
            style={styles.input}
            placeholder="Data"
            value={data}
            onChangeText={setData}
          />
          <Text style={styles.label}>Produção Revisada por:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do Professor(a)"
            value={revisor}
            onChangeText={setRevisor}
          />
          <Text style={styles.label}>Produção:</Text>
          <TextInput
            style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
            multiline
            placeholder="Digite aqui sua produção..."
            value={producao}
            onChangeText={setProducao}
          />
        </View>
      </ScrollView>

      {/* Modal Imagem */}
  <Modal visible={showModalImagem} transparent animationType="fade">
    <View style={styles.modalOverlay}>
      <View style={styles.modalBox}>
        <TouchableOpacity style={styles.modalClose} onPress={() => setShowModalImagem(false)}>
          <Ionicons name="close" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.modalText}>
          Incrível! Sua produção terá como tema um Registro Visual. Adicione aqui a imagem que será a capa da sua produção.
        </Text>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => {
            abrirArquivosUsuario();
            setShowModalImagem(false);
          }}
        >
          <Text style={styles.modalButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>


      {/* Modal Redação */}
      <Modal visible={showModalRedacao} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowModalRedacao(false)}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Legal! Sua produção é uma Redação. Adicione aqui o texto de apoio que você utilizou para criar seu repertório.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={abrirArquivosUsuario}>
              <Text style={styles.modalButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Podcast */}
      <Modal visible={showModalPodcast} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowModalPodcast(false)}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Perfeito! Sua produção terá um podcast como inspiração para a escrita. Adicione o arquivo aqui.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={abrirArquivosUsuario}>
              <Text style={styles.modalButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      

      {/* Modal para adicionar capa */}
      <Modal visible={modalCapaVisivel} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity style={styles.modalClose} onPress={() => setModalCapaVisivel(false)}>
              <Ionicons name="close" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Ótimo! Seu arquivo foi anexado com sucesso. Agora, por favor, adicione uma capa à sua produção, pois ela será visualizada por toda a turma.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalCapaVisivel(false);
              }}
            >
              <Text style={styles.modalButtonText}>Adicionar</Text>
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: 'rgba(251, 240, 218, 1)',
  },
  container: {
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 60,
  },
  tipoWrapper: {
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
    borderRadius: 12,
    marginBottom: 12,
  },
  tipoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  tipoButton: {
    backgroundColor: '#226680',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 10,
  },
  tipoButtonAtivo: {
    backgroundColor: '#114B5F',
  },
  tipoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formBox: {
    backgroundColor: 'rgba(251, 240, 218, 1)',
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
    backgroundColor: 'rgba(251, 240, 218, 1)',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#F8E8C9',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 10,
  },
  modalClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  modalButton: {
    backgroundColor: '#226680',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
