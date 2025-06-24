import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreateClassScreen({ navigation }) {
  const [instituicao, setInstituicao] = useState('Universidade Nacional Iva');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [emails, setEmails] = useState('');
  const [conteudos, setConteudos] = useState('');
  const [objetivo, setObjetivo] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Criar Turma</Text>
      </View>

      {/* Conteúdo com scroll */}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarPlaceholder}>
            <Ionicons name="person" size={60} color="#ccc" />
          </View>
          <Ionicons name="camera" size={20} color="#fff" style={styles.cameraIcon} />
        </View>

        {/* Campos */}
        <Text style={styles.label}>Nome da Instituição</Text>
        <TextInput style={styles.input} value={instituicao} onChangeText={setInstituicao} placeholder="Nome da Instituição" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Curso</Text>
        <TextInput style={styles.input} value={curso} onChangeText={setCurso} placeholder="Curso" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Período</Text>
        <TextInput style={styles.input} value={periodo} onChangeText={setPeriodo} placeholder="Período" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Disciplina</Text>
        <TextInput style={styles.input} value={disciplina} onChangeText={setDisciplina} placeholder="Disciplina" placeholderTextColor="#aaa" />

        <Text style={styles.label}>E-mail dos Estudantes</Text>
        <TextInput style={styles.input} value={emails} onChangeText={setEmails} placeholder="E-mail dos Estudantes" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Conteúdos</Text>
        <TextInput style={styles.input} value={conteudos} onChangeText={setConteudos} placeholder="Conteúdos" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Objetivo</Text>
        <TextInput style={styles.input} value={objetivo} onChangeText={setObjetivo} placeholder="Objetivo" placeholderTextColor="#aaa" />

        {/* Botão */}
        <TouchableOpacity style={styles.btnCriar}>
          <Text style={styles.btnCriarText}>Criar</Text>
        </TouchableOpacity>
      </ScrollView>
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
    alignItems: 'flex-end',
    gap: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 24,
    gap: 8,
    paddingBottom: 40,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: '35%',
    backgroundColor: '#263238',
    padding: 6,
    borderRadius: 20,
  },
  label: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#226680',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
  },
  btnCriar: {
    backgroundColor: '#226680',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
  },
  btnCriarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
