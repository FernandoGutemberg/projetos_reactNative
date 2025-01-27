import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';

const App = () => {
  // Função para buscar a localização
  const fetchLocation = async () => {
    try {
      // Solicitar permissão para acessar a localização
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Erro', 'Permissão para acessar localização foi negada');
        return;
      }

      // Buscar a localização atual
      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      // Exibir a localização no Alert
      Alert.alert(
        'Localização Atual',
        `Latitude: ${latitude}\nLongitude: ${longitude}`
      );
    } catch (error) {
      Alert.alert('Erro', `Erro ao buscar localização: ${error.message}`);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>PEGA LOCALIZAÇÃO</Text>
          <Text style={styles.subtitle}>VAMOS PEGAR LOCALIZAÇÃO AQUI</Text>
          
          {/* Botão para buscar localização */}
          <Button title="BUSCAR" onPress={fetchLocation} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16,
  },
});

export default App;
