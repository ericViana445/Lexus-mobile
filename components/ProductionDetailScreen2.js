import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReadOnlyProductionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ClassDetail')}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Imagem */}
      <Image source={require('../assets/hugo.png')} style={styles.image} />

      {/* Conteúdo */}
      <View style={styles.box}>
        <Text style={styles.title}>Hugo Calderano</Text>

        <Text style={styles.label}>Autor(a):</Text>
        <Text style={styles.text}>Júlio Franco Alencar</Text>

        <Text style={styles.label}>Data de Publicação:</Text>
        <Text style={styles.text}>20 de Abril de 2025</Text>

        <Text style={styles.label}>Produção Revisada por:</Text>
        <Text style={styles.text}>Lana Andrade</Text>

        <Text style={styles.label}>Produção:</Text>
        <Text style={styles.text}>
          Hugo Calderano, o mesatenista brasileiro, venceu a Copa do Mundo de tênis de mesa em Macau, na China. Ele é o primeiro atleta não asiático ou europeu a conquistar o título.
        </Text>
      </View>

      {/* Barra inferior */}
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
  container: {
    flex: 1,
    backgroundColor: 'rgba(251, 240, 218, 1)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 60,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
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
});
