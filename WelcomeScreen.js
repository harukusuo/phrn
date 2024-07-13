import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    console.log('Botão Login pressionado');
    navigation.navigate('Login'); // Navegar para a tela de login
  };

  const handleCadastroPress = () => {
    console.log('Botão Cadastro pressionado');
    navigation.navigate('Cadastro'); // Aqui você pode adicionar a lógica para navegar para a tela de cadastro, se necessário
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/pethelp_icone.png')}
        style={styles.logo}
      />
      <Text>Bem-vindo ao PetHelp!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Já possui uma conta? Clique e faça seu login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCadastroPress}>
        <Text style={styles.buttonText}>Clique aqui e crie uma conta agora mesmo! </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DD6A00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150, // Defina o tamanho da sua logo conforme necessário
    height: 150, // Defina o tamanho da sua logo conforme necessário
    marginBottom: 20, // Adiciona um espaço entre a logo e os outros elementos
  },
  button: {
    backgroundColor: '#960000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WelcomeScreen;
