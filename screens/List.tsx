import React, {useState} from 'react';
import {Text, SafeAreaView, View, FlatList, Image} from 'react-native';
import Header from './Header'
import {StyleSheet} from 'react-native';

const List = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Fundas para Iphone',
      description: 'Fundas para Iphone 10, 11 y 12. 12cm x 18cm',
      price: 200,
      imageURI:
        'https://http2.mlstatic.com/D_NQ_NP_788334-MLA42767132497_072020-O.jpg',
    },
    {
      id: 2,
      name: 'Impresora 3D Crealty',
      description: 'Impresora 3D color negro. ',
      price: 4500,
      imageURI:
        'https://d2r9epyceweg5n.cloudfront.net/stores/093/345/products/fab12a1-d630fddd49595b43e315877652462432-1024-1024.jpg',
    },
    {
      id: 3,
      name: 'Tenis para Dama',
      description: 'Tenis para dama 22.5 cm',
      price: 180,
      imageURI:
        'https://i.pinimg.com/236x/d2/02/31/d20231df0abfb398a281b0e7d1d2b0e8.jpg',
    },
    {
      id: 4,
      name: 'Campera de Hombre Levis',
      description: 'Varios talles disponibles. Color verde y azul.',
      price: 12000,
      imageURI:
        'https://http2.mlstatic.com/D_698168-MLA43080713248_082020-O.jpg',
    },
    {
      id: 5,
      name: 'Utiles Escolares',
      description: 'Lote completo de utiles escolares.',
      price: 2000,
      imageURI:
        'https://resizer.glanacion.com/resizer/JnOOwf6wI1l28sQWGOwXurCqXa0=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/DZSXR5ILXBHIFMKQBLN475P3OU.jpg',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visto Recientemente</Text>
      <FlatList
        data={items}
        ListHeaderComponent={<Header />}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.firstCol}>
              <Image
                style={styles.image}
                source={{uri: `${item.imageURI}`}}
                resizeMode={'cover'}
              />
            </View>
            <View style={styles.secondCol}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>$ {item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    height: 500,
  },
  row: {
    color: '#ffffff',
    width: 350,
    borderRadius: 15,
    height: 110,
    backgroundColor: '#98c1d9',
    marginVertical: 6,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 90,
  },
  firstCol: {
    width: '50%',
    maxHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondCol: {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 5,
  },
  itemTitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 5,
  },
  price: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
});

export default List;
