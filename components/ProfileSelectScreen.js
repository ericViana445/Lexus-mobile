  import React, { useState } from 'react';
  import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';

  export default function EscolhaPerfil({navigation}) {
    const [perfilSelecionado, setPerfilSelecionado] = useState(null);

    const handleContinuar = () => {
      if (!perfilSelecionado) {
        Alert.alert('Atenção', 'Por favor, selecione um perfil para continuar.');
        return;
      }

      // Aqui você pode navegar ou fazer outra lógica
      Alert.alert('Perfil selecionado', `Você escolheu: ${perfilSelecionado}`);

      if (perfilSelecionado === 'Professor'){
        navigation.navigate('Teacher');
      }
      else if(perfilSelecionado === 'Estudante'){
        navigation.navigate('Student');
      }
    };

    return (
      <View style={styles.container}>
        {/* Botão de voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#263238" />
        </TouchableOpacity>

        {/* Ilustração */}
        <Image
          source={require('../assets/Booklover-bro.png')} // certifique-se de que a imagem está nesse caminho
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={styles.title}>
          Expresse sua criatividade e{'\n'}questione o mundo!
        </Text>

        {/* Parte inferior com fundo claro */}
        <View style={styles.bottomContainer}>
          <Text style={styles.subtitle}>Você é:</Text>

          {/* Opção: Professor */}
          <TouchableOpacity
            style={styles.option}
            onPress={() => setPerfilSelecionado('Professor')}
          >
            <View style={styles.radioCircle}>
              {perfilSelecionado === 'Professor' && <View style={styles.selectedDot} />}
            </View>
            <Text style={styles.optionText}>Professor</Text>
          </TouchableOpacity>

          {/* Opção: Estudante */}
          <TouchableOpacity
            style={styles.option}
            onPress={() => setPerfilSelecionado('Estudante')}
          >
            <View style={styles.radioCircle}>
              {perfilSelecionado === 'Estudante' && <View style={styles.selectedDot} />}
            </View>
            <Text style={styles.optionText}>Estudante</Text>
          </TouchableOpacity>

          {/* Botão continuar */}
          <TouchableOpacity style={styles.continueButton} onPress={handleContinuar}>
            <Text style={styles.continueText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0C5163',
      paddingTop: 40,
    },
    backButton: {
      marginLeft: 16,
    },
    illustration: {
      height: 236,
      alignSelf: 'center',
      resizeMode: 'contain',
      marginVertical: 2,
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: '#F5EBD5',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 24,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 12,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    radioCircle: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#1F6A7A',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    selectedDot: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: '#1F6A7A',
    },
    optionText: {
      fontSize: 16,
    },
    continueButton: {
      backgroundColor: '#1F6A7A',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 32,
    },
    continueText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });

