import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// ...

const CardTurma = ({ titulo, subtitulo, imagem, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <View style={{ flex: 1 }}>
      <Text style={styles.cardTitle}>{titulo}</Text>
      <Text style={styles.cardSubtitle}>{subtitulo}</Text>
    </View>
    <Image source={imagem} style={styles.cardImage} />
  </TouchableOpacity>
);

export default function ClassScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Topo com botão voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Turmas</Text>
      </View>

      {/* Lista de cards */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <CardTurma
          titulo="Comunicação e Expressão"
          subtitulo="Engenharia Naval"
          imagem={require('../assets/turma1.png')}
        />
        <CardTurma
          titulo="Português Instrumental"
          subtitulo="Computação"
          imagem={require('../assets/turma2.png')}
          onPress={() => navigation.navigate('ClassDetail')}
        />
        <CardTurma
          titulo="Oficina de Leitura e Produção de Textos"
          subtitulo="Engenharia Química"
          imagem={require('../assets/turma3.png')}
        />
        <CardTurma
          titulo="Metodologia Científica"
          subtitulo="Sistemas de Informação"
          imagem={require('../assets/turma4.png')}
        />
      </ScrollView>

      {/* Menu inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('TeacherProfile')}>
          <Ionicons name="person" size={28} color="#2E353A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Class')}>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#226680',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    gap: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(34, 102, 128, 0.61)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 0,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#fff',
  },
  cardImage: {
    width: 140,
    height: 130,
    resizeMode: 'contain',
    marginLeft: 12,
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
