import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatScreen({ navigation }) {
  const route = useRoute();
  const { name, avatar } = route.params;

  const messages = [
    { id: 1, text: 'Oi, tudo bem?', sender: 'other' },
    { id: 2, text: 'Sim! E você?', sender: 'me' },
    { id: 3, text: 'Tudo certo!', sender: 'other' },
    { id: 4, text: 'Vamos começar a aula.', sender: 'other' },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Fundo fixo */}
      <View style={styles.fixedBackground} />

      {/* Conteúdo que se adapta ao teclado */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#263238" />
              </TouchableOpacity>
              <Image source={avatar} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.status}>online</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Mensagens */}
          <ScrollView
            contentContainerStyle={styles.messagesContainer}
            keyboardShouldPersistTaps="handled"
          >
            {messages.map((msg) => (
              <View
                key={msg.id}
                style={[
                  styles.message,
                  msg.sender === 'me' ? styles.myMessage : styles.otherMessage,
                ]}
              >
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Campo de mensagem */}
          <View style={styles.inputContainer}>
            <View style={styles.innerInput}>
              <TextInput
                placeholder="Mensagem"
                placeholderTextColor="#555"
                style={styles.input}
              />
              <TouchableOpacity>
                <Ionicons
                  name="attach"
                  size={20}
                  color="#263238"
                  style={styles.iconInside}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="camera"
                  size={20}
                  color="#263238"
                  style={styles.iconInside}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Ionicons name="mic" size={24} color="#263238" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  fixedBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAEFD9',
    zIndex: -1,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#226680',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    color: '#d0f0ff',
    fontSize: 12,
  },
  messagesContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  message: {
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: '#B2C4C8',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#D9D9D9',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FAEFD9',
  },
  innerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  iconInside: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 8,
    color: '#000',
  },
});
