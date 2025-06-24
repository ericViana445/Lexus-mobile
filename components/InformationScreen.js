import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InformationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#263238" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo rolável */}
      <View style={styles.scrollWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            source={require('../assets/porto.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.card}>
            <Text style={styles.title}>Barricadas em Porto Príncipe</Text>

            <Text style={styles.label}>Autor(a):</Text>
            <Text style={styles.text}>Izabelle Drummond</Text>

            <Text style={styles.label}>Data de Publicação:</Text>
            <Text style={styles.text}>21 de Fevereiro de 2025</Text>

            <Text style={styles.label}>Produção Revisada por:</Text>
            <Text style={styles.text}>Lana Andrade</Text>

            <Text style={styles.label}>Produção:</Text>
            <Text style={styles.text}>
              Mulheres correm passando por barricadas de rua em chamas no distrito de Solino, em Porto Príncipe (Haiti), enquanto moradores pedem ajuda ao governo e protestam contra a falta de segurança da cidade. A mais recente tentativa externa de ajudar o governo interino a retomar o controle – uma "missão multinacional de apoio à segurança" liderada por tropas quenianas – está subfinanciada e passando por dificuldades após uma onda de massacres de gangues que matou mais de 350 pessoas.
            </Text>
            <TouchableOpacity
              style={styles.chat}
              onPress={() => navigation.navigate('Chat')}>
              <Text style={styles.chatText}>Debater temática</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Rodapé */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Ionicons name="person" size={28} color="#263238" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#263238" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble" size={28} color="#263238" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF4E6',
    paddingTop: 40,
  },
  scrollWrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF7E9',
    padding: 16,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  chat: {
    borderColor: '#226680',
    borderWidth: 2,
    width: '60%',
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: '20%',
  },
  chatText: {
    color: '#226680',
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
    backgroundColor: '#226680',
  },
});
