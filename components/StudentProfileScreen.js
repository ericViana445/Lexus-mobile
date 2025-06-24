import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function StudentProfileScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const producoes = [
    {
      id: '1',
      titulo: 'O uso de Tecnologias Digitais na Educação em...',
      data: '13 de março de 2025',
      revisado: true,
      nota: '9.5',
      anexos: 1,
      texto: 'Texto da produção sobre tecnologia...',
    },
    {
      id: '2',
      titulo: 'Os Aros de Basquete nas Estruturas de Dados',
      data: '19 de março de 2025',
      revisado: true,
      nota: '10',
      anexos: 1,
      texto: 'Texto sobre basquete...',
    },
    {
      id: '3',
      titulo: 'Hugo Calderano',
      data: '20 de Abril de 2025',
      revisado: true,
      nota: '9.8',
      anexos: 1,
      texto: 'Texto sobre Hugo Calderano...',
    },
    {
      id: '4',
      titulo: 'Café, o passatempo da vez',
      data: '4 de maio de 2025',
      revisado: false,
      nota: '-',
      anexos: 1,
      texto: 'Texto completo sobre o café...',
    },
  ];

const renderProducao = ({ item }) => (
  <TouchableOpacity
    onPress={() => {
      if (item.titulo === 'Hugo Calderano') {
        navigation.navigate('ProductionDetailStudent', { producao: item });
      }
    }}
    style={styles.producaoItem}
  >
    <View style={styles.producaoTexto}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.data}>Publicado em {item.data}</Text>
      <Text style={item.revisado ? styles.revisado : styles.naoRevisado}>
        {item.revisado ? 'Revisado' : 'Não Revisado'}
      </Text>
    </View>
    <View style={styles.infoDireita}>
      <Text style={styles.nota}>
        {item.nota !== '-' ? `${item.nota}/10` : '-/10'}
      </Text>
      <View style={styles.anexo}>
        <Entypo name="attachment" size={14} color="#333" />
        <Text style={styles.anexoTexto}>{item.anexos}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


  const confirmarRemocao = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Entypo name="dots-three-vertical" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Menu suspenso */}
      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.menuItem}>Conversar com Júlio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenuVisible(false);
              setModalVisible(true);
            }}
          >
            <Text style={styles.menuItem}>Remover da Turma</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMenuVisible(false)}
            style={styles.menuClose}
          >
            <Ionicons name="close" size={18} color="brown" />
          </TouchableOpacity>
        </View>
      )}

      {/* Modal de confirmação */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={24} color="#263238" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Tem certeza que deseja remover da turma?
            </Text>
            <TouchableOpacity
              style={styles.modalBtnSim}
              onPress={confirmarRemocao}
            >
              <Text style={styles.modalBtnSimText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalBtnNao}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalBtnNaoText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Perfil */}
      <Image source={require('../assets/profile1.jpg')} style={styles.foto} />
      <Text style={styles.nome}>Júlio Franco Alencar</Text>
      <Text style={styles.email}>Julio.728714@uni.edu.br</Text>

      {/* Lista de Produções */}
      <Text style={styles.subtitulo}>Produções</Text>
      <FlatList
        data={producoes}
        keyExtractor={(item) => item.id}
        renderItem={renderProducao}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('TeacherProfile')}>
          <Ionicons name="person" size={28} color="#2E353A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ClassDetail')}>
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
  container: { flex: 1, backgroundColor: '#F8E8C9', paddingTop: 60 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  menuItem: { paddingVertical: 6, fontSize: 13, color: '#333' },
  menuClose: { position: 'absolute', top: 4, right: 4 },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 16,
  },
  nome: { textAlign: 'center', fontWeight: 'bold', fontSize: 16, marginTop: 6 },
  email: { textAlign: 'center', fontSize: 13, color: '#555' },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#226680',
    paddingBottom: 4,
    color: '#000',
  },
  producaoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  producaoTexto: { flex: 1, paddingRight: 8 },
  titulo: { fontWeight: 'bold', fontSize: 13, color: '#000' },
  data: { fontSize: 11, color: '#555' },
  revisado: { fontSize: 11, color: 'green', fontWeight: 'bold' },
  naoRevisado: { fontSize: 11, color: 'brown', fontWeight: 'bold' },
  infoDireita: { alignItems: 'flex-end', justifyContent: 'center' },
  nota: { fontSize: 13, fontWeight: 'bold', color: '#000' },
  anexo: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  anexoTexto: { fontSize: 11, marginLeft: 2 },
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#F8E8C9',
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
    marginTop: 32,
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
