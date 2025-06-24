// components/ProductionsListScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductionsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="arrow-back" size={24} color="#263238" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Produções</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('ProductionDetail')}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>Povos indígenas e COP30</Text>
          <Text style={styles.nota}>10/10</Text>

          <View style={styles.revisorBox}>
            <Image
              source={require('../assets/Profile.jpg')}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.revisadoPor}>Revisado por</Text>
              <Text style={styles.revisorNome}>Lana Andrade</Text>
            </View>
          </View>
        </View>

        <Image
          source={require('../assets/indigena.png')}
          style={styles.image}
        />
      </TouchableOpacity>

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
    backgroundColor: '#F8E8C9',
  },

  header: {
    backgroundColor: '#226680',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 60,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(34, 102, 128, 0.61)',
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  nota: {
    fontSize: 13,
    marginVertical: 6,
    color: '#fff',
    textAlign: 'left',
  },
  revisadoPor: {
    fontSize: 12,
    color: '#fff',
  },
  revisorNome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },

  revisorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  image: {
    width: 100,
    height: 130,
    borderRadius: 8,
    marginLeft: 16,
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
