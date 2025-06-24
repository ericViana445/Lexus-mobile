import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductionDetailStudent({ navigation }) {
  const [nota, setNota] = useState('');
  const [status, setStatus] = useState('Revisado');
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Ionicons name="arrow-back" size={24} color="#000" />
  </TouchableOpacity>
</View>


      {/* Perfil */}
      <Image source={require('../assets/profile1.jpg')} style={styles.foto} />
      <Text style={styles.nome}>Júlio Franco Alencar</Text>
      <Text style={styles.email}>Julio.728714@uni.edu.br</Text>
      <View style={styles.linha} />

      {/* Imagem da produção */}
      <Image source={require('../assets/hugo.png')} style={styles.capa} />
      <Text style={styles.titulo}>Café: o passatempo da vez</Text>
      <Text style={styles.texto}>
        Em tempos em que o ritmo da vida parece cada vez mais acelerado, o café ressurge
        não apenas como bebida, mas como um verdadeiro ritual de pausa, encontro e
        contemplação. Muito além de um simples estimulante matinal, o café tem se
        tornado o passatempo de muitos. {'\n\n'}
        Nas cafeterias modernas, o ato de tomar café ganhou status de evento. Seja sozinho
        com um bom livro, seja entre amigos em uma conversa demorada, o café convida à
        desaceleração. A diversidade de métodos de preparo — como o coado, o espresso,
        a aeropress e o cold brew — transformou o preparo da bebida em um hobby para
        muitos. {'\n\n'}
        Além disso, as redes sociais impulsionaram uma verdadeira cultura do café. Fotos
        de xícaras fumegantes, vídeos mostrando a arte do latte, receitas de cafeterias
        escondidas... tudo isso mostra como o café se tornou protagonista de momentos
        compartilhados e apreciados. Para alguns, o café é quase um estilo de vida.
      </Text>

      {/* Avaliação */}
      <View style={styles.avaliacao}>
        {/* Nota */}
        <View style={styles.avaliacaoItem}>
          <Text style={styles.label}>Nota</Text>
          <TextInput
            placeholder="Sem Nota"
            value={nota}
            onChangeText={setNota}
            keyboardType="numeric"
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        {/* Status */}
        <View style={styles.avaliacaoItem}>
          <TouchableOpacity
            style={styles.statusHeader}
            onPress={() => setMostrarOpcoes(!mostrarOpcoes)}
          >
            <Text style={styles.label}>Status</Text>
            <Ionicons
              name={mostrarOpcoes ? 'caret-up' : 'caret-down'}
              size={16}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setMostrarOpcoes(!mostrarOpcoes)}
          >
            <Text style={{ color: status === 'Revisado' ? 'green' : 'brown' }}>
              {status}
            </Text>
          </TouchableOpacity>

          {/* Opções de status */}
          {mostrarOpcoes && (
            <View style={styles.opcoesStatus}>
              <TouchableOpacity
                onPress={() => {
                  setStatus('Não Revisado');
                  setMostrarOpcoes(false);
                }}
              >
                <Text style={{ color: 'brown' }}>Não Revisado</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setStatus('Revisado');
                  setMostrarOpcoes(false);
                }}
              >
                <Text style={{ color: 'green' }}>Revisado</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
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
  container: { flex: 1, backgroundColor: '#F8E8C9', paddingTop: 50 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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

  foto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 8,
  },
  nome: { textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  email: { textAlign: 'center', fontSize: 13, color: '#555' },
  linha: {
    height: 2,
    backgroundColor: '#226680',
    marginHorizontal: 60,
    marginVertical: 8,
  },
  capa: {
    width: 200,
    height: 120,
    borderRadius: 12,
    alignSelf: 'center',
    marginVertical: 12,
    resizeMode: 'contain',
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  texto: {
    fontSize: 13,
    textAlign: 'justify',
    marginHorizontal: 20,
    color: '#333',
  },
  avaliacao: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  avaliacaoItem: {
    width: '45%',
  },
  label: {
    backgroundColor: '#226680',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    fontSize: 13,
  },
  statusHeader: {
    backgroundColor: '#226680',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    fontSize: 13,
  },
  opcoesStatus: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: 2,
  },
});
