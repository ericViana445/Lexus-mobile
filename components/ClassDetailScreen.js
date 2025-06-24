import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ClassDetailScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showArquivarModal, setShowArquivarModal] = useState(false);

  const alunos = [
    { name: 'Carmen', img: require('../assets/Profile.jpg') },
    { name: 'Júlio', img: require('../assets/profile1.jpg') },
    { name: 'Bianca', img: require('../assets/profile2.jpg') },
    { name: 'Diego', img: require('../assets/profile3.jpg') },
    { name: 'Felipe', img: require('../assets/profile4.jpg') },
    { name: 'Larissa', img: require('../assets/profile5.jpg') },
    { name: 'Allan', img: require('../assets/profile6.jpg') },
  ];

  const producoes = [
    {
      title: 'Hugo Calderano',
      img: require('../assets/hugo.png'),
      desc: 'Hugo Calderano, o mesatenista brasileiro, venceu a Copa do Mundo de tênis de mesa em Macau, na China. Ele é o primeiro atleta do país a conquistar o título.',
    },
    {
      title: 'Povos indígenas e COP30',
      img: require('../assets/indigena.png'),
      desc: 'Povos indígenas marcham durante o acampamento anual Terra Livre, onde discutem direitos e seu papel na COP30, que acontecerá pela primeira vez na Amazônia.',
    },
    {
      title: 'Barricadas em Porto Príncipe',
      img: require('../assets/porto.png'),
      desc: 'Mulheres correm passando por barricadas de rua em chamas no distrito de Solino, em Porto Príncipe (Haiti), enquanto moradores pedem ajuda ao governo.',
    },
  ];

  const handleExcluir = () => {
    setMenuVisible(false);
    setModalVisible(true);
  };

  const confirmarExclusao = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Português Instrumental</Text>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={styles.menuOverlay}>
            <View style={styles.menu}>
              <TouchableOpacity onPress={handleExcluir}>
                <Text style={styles.menuItem}>Excluir Turma</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowArquivarModal(true)}>
                <Text style={styles.menuItem}>Arquivar Turma</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalBox, { backgroundColor: '#F8E8C9' }]}>  
            <TouchableOpacity style={styles.modalClose} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={24} color="#263238" />
            </TouchableOpacity>
            <Text style={[styles.modalText, { marginTop: 32 }]}>Tem certeza que deseja excluir turma?</Text>
            <TouchableOpacity style={styles.modalBtnSim} onPress={confirmarExclusao}>
              <Text style={styles.modalBtnSimText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalBtnNao}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalBtnNaoText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={showArquivarModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalBox, { backgroundColor: '#F8E8C9' }]}>  
            <TouchableOpacity style={styles.modalClose} onPress={() => setShowArquivarModal(false)}>
              <Ionicons name="close" size={24} color="#263238" />
            </TouchableOpacity>
            <Text style={[styles.modalText, { marginTop: 32 }]}>Tem certeza que deseja arquivar turma?</Text>
            <TouchableOpacity style={styles.modalBtnSim}>
              <Text style={styles.modalBtnSimText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalBtnNao}
              onPress={() => setShowArquivarModal(false)}>
              <Text style={styles.modalBtnNaoText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.descricaoWrapper}>
          <View style={{ flex: 1 }}>
            <Text style={styles.descricaoTitle}>Descrição da Turma</Text>
            <Text style={styles.descricaoInfo}><Text style={{ fontStyle: 'italic' }}>Curso:</Text> Computação</Text>
            <Text style={styles.descricaoInfo}><Text style={{ fontStyle: 'italic' }}>Alunos:</Text> 24</Text>
            <Text style={styles.descricaoInfo}>
              <Text style={{ fontStyle: 'italic' }}>Objetivo:</Text> Aprimorar habilidades de leitura e escrita.
            </Text>
          </View>
          <Image source={require('../assets/turma2.png')} style={styles.descricaoImagem} />
        </View>

        <Text style={styles.sectionTitle}>Seus alunos</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.alunosRow}>
  {alunos.map((aluno, i) => (
    aluno.name === 'Júlio' ? (
      <TouchableOpacity key={i} onPress={() => navigation.navigate('StudentProfile')} style={styles.alunoCard}>
        <Image source={aluno.img} style={styles.alunoFoto} />
        <Text style={styles.alunoNome}>{aluno.name}</Text>
      </TouchableOpacity>
    ) : (
      <View key={i} style={styles.alunoCard}>
        <Image source={aluno.img} style={styles.alunoFoto} />
        <Text style={styles.alunoNome}>{aluno.name}</Text>
      </View>
    )
  ))}
</ScrollView>


        <Text style={styles.sectionTitle}>Mural de Produções</Text>
        {producoes.map((item, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.desc}</Text>
<TouchableOpacity
  style={styles.readMoreBtn}
  onPress={() => {
    if (item.title === 'Hugo Calderano') {
      navigation.navigate('ProductionDetail2');
    }
  }}
>
  <Text style={styles.readMoreText}>Ler mais</Text>
</TouchableOpacity>

            </View>
            <Image source={item.img} style={styles.cardImage} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('TeacherProfile')}>
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
  container: { flex: 1, backgroundColor: '#F8E8C9' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#226680',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  headerTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  content: { paddingBottom: 100 },
  descricaoWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 16,
  },
  descricaoTitle: { fontWeight: 'bold', fontSize: 14, color: '#000' },
  descricaoInfo: { fontSize: 12, marginTop: 2 },
  descricaoImagem: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 20,
    marginTop: 8,
    marginBottom: 6,
  },
  alunosRow: {
    paddingHorizontal: 20,
    gap: 12,
    alignItems: 'center',
  },
  alunoCard: { alignItems: 'center', marginRight: 12 },
  alunoFoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 4,
  },
  alunoNome: { fontSize: 12 },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(34, 102, 128, 0.61)',
    padding: 12,
    borderRadius: 14,
    marginHorizontal: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginLeft: 12,
  },
  cardContent: { flex: 1 },
  cardTitle: { fontWeight: 'bold', fontSize: 14, color: '#fff' },
  cardText: { fontSize: 12, color: '#fff', marginVertical: 6 },
  readMoreBtn: {
    alignSelf: 'flex-start',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  readMoreText: { color: '#fff', fontSize: 12 },
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
  menuOverlay: {
    position: 'absolute',
    top: 70,
    right: 10,
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  menu: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 14,
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
});