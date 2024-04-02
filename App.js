import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./images/fondo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Hello Tatto World!</Text>
        <TextInput style={styles.textinput} defaultValue="Realiza tu búsqueda" />
        <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications" />
      </View>
    </ImageBackground>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./images/fondo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </ImageBackground>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: 'black' }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
