import React from 'react';
import {Text, View, Image} from 'react-native';
import {StyleSheet} from 'react-native';

const Categories: React.FC<Props> = ({categories}) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowcont}>
        <Image
          resizeMode={'cover'}
          style={styles.arrows}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-04-512.png',
          }}
        />
      </View>

      {categories &&
        categories.map(cat => {
          return (
            <View key={cat.id} style={styles.card}>
              <Image
                style={styles.logo}
                source={{uri: `${cat.imageURI}`}}
                resizeMode={'cover'}
              />
              <Text style={styles.text}>{cat.name}</Text>
            </View>
          );
        })}
      <View style={styles.arrowcont}>
        <Image
          resizeMode={'cover'}
          style={styles.arrows}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-03-512.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    color: '#ffffff',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 75,
    height: 90,
    padding: 5,
    maxHeight: '100%',
    marginHorizontal: 2,
    borderColor: '#023047',
    borderWidth: 2,
    borderRadius: 20,
  },
  text: {
    color: '#023047',
    textAlign: 'center',
    fontSize: 13,
  },
  arrows: {
    width: 30,
    height: 30,
  },
});

export default Categories;
