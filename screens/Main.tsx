import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import Header from './Header';
import List from './List';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Main: React.FC<Props> = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Text style={styles.maintitle}>Fidex</Text>
          <List />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023047',
  },
  maintitle: {
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Main;
