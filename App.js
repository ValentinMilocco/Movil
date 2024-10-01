import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT} // Utiliza OpenStreetMap como proveedor de mapas
        style={styles.map}
        region={{
          latitude: -34.6037, // Coordenadas iniciales (Buenos Aires)
          longitude: -58.3816,
          latitudeDelta: 0.0922, // Nivel de zoom (más pequeño es más cerca)
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
