import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Topo com botão voltar e busca */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#263238" />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={20} color="#263238" style={styles.searchIcon} />
          <TextInput style={styles.searchBar} placeholder="Buscar..." />
        </View>
      </View>

      {/* Categorias ilustradas */}
      <View style={styles.categorias}>
        <View style={styles.categoriaItem}>
          <TouchableOpacity>
            <Image source={require('../assets/Notes-bro1.png')} style={styles.categoriaIcon} />
          </TouchableOpacity>
          <Text style={styles.categoriaLabel}>Redação</Text>
        </View>
        <View style={styles.categoriaItem}>
          <TouchableOpacity>
            <Image source={require('../assets/Imagefolder-bro1.png')} style={styles.categoriaIcon} />
          </TouchableOpacity>
          <Text style={styles.categoriaLabel}>Fotografia</Text>
        </View>
        <View style={styles.categoriaItem}>
          <TouchableOpacity>
            <Image source={require('../assets/Pressplay-bro1.png')} style={styles.categoriaIcon} />
          </TouchableOpacity>
          <Text style={styles.categoriaLabel}>Podcast</Text>
        </View>
      </View>

      {/* Título da seção de conteúdos */}
      <Text style={styles.sectionTitle}>Adicionados Recentemente</Text>

      {/* Lista de conteúdos */}
      <ScrollView contentContainerStyle={styles.contentList}>
        <Conteudo
          image={require('../assets/hugo.png')}
          title="Hugo Calderano"
          text="Hugo Calderano, o mesatenista brasileiro, venceu a Copa do Mundo de tênis de mesa em Macau, na China. Ele é o primeiro atleta não asiático ou europeu a conquistar o título."
          navigation={navigation}
        />
        <Conteudo
          image={require('../assets/indigena.png')}
          title="Povos indígenas e COP30"
          text="Povos indígenas marcham durante o acampamento anual Terra Livre, onde discutem direitos, proteção territorial e seu papel na COP30, que acontecerá pela primeira vez na Amazônia."
          navigation={navigation}
        />
        <Conteudo
          image={require('../assets/porto.png')}
          title="Barricadas em Porto Príncipe"
          text="Mulheres correm passando por barricadas de rua em chamas no distrito de Solino..."
          navigation={navigation}
        />

      </ScrollView>

      {/* Menu inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={28} color="#2E353A" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" size={28} color="#2E353A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MessagesList')}>
          <Ionicons name="chatbubble" size={28} color="#2E353A" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Conteudo = ({ image, title, text, navigation }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <View style={{ flex: 1 }}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
      <TouchableOpacity
        style={styles.readMore}
        onPress={() => navigation.navigate('ProductionDetail', {
          title,
          image,
          text,
          autor: 'Izabelle Drummond',
          data: '21 de Fevereiro de 2025',
          revisor: 'Lana Andrade',
        })}
      >
        <Text style={styles.readMoreText}>Ler mais</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E8C9',
    paddingTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    height: 40,
    borderRadius: 20,
    marginLeft: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  categoriaItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoriaIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  categoriaLabel: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#263238',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 32,
    marginBottom: 12,
  },
  contentList: {
    paddingHorizontal: 32,
    paddingBottom: 120,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(231, 229, 229, 1)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    gap: 16,
    alignItems: 'flex-start',
    minHeight: 130,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  cardText: {
    fontSize: 13,
    marginVertical: 6,
    color: '#333',
    textAlign: 'left',
  },
  readMore: {
    alignSelf: 'flex-start',
    borderColor: '#0C5163',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginTop: 6,
  },
  readMoreText: {
    color: '#0C5163',
    fontSize: 14,
    fontWeight: 'bold',
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
