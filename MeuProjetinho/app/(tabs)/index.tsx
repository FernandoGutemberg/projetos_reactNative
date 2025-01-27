import React from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PEGA LOCALIZAÇÃO</Text>
        <Text style={styles.title}>
          VAMOS PEGAR LOCALIZAÇÃO AQUI
        </Text>
        <Button
          title="BUSCAR"
          onPress={() => Alert.alert('A LOCALIZAÇÃO VAI APARECER AQUI')}
        />
      </View>

  
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;