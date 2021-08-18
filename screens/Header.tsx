import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Categories from './Categories';

const categories = [
  {
    id: 1,
    name: 'Dctos',
    imageURI:
      'https://cdn1.iconfinder.com/data/icons/airline-flight-booking-mobile-app/15/promo-promotion-discount-deal-percent-ribbon-512.png',
  },
  {
    id: 2,
    name: 'Ropa',
    imageURI:
      'https://cdn3.iconfinder.com/data/icons/sketchy-basic-icons/94/t-shirt-512.png',
  },
  {
    id: 3,
    name: 'Super',
    imageURI:
      'https://cdn2.iconfinder.com/data/icons/aami-web-internet/64/aami7-96-512.png',
  },
  {
    id: 4,
    name: 'Zapatos',
    imageURI:
      'https://cdn4.iconfinder.com/data/icons/sports-basic/64/ballet-shoes-512.png',
  },
];

const Header: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <Categories categories={categories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#98c1d9',
    height: 170,
    margin: 12,
    marginTop: 15,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontFamily: '',
    color: '#023047',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default Header;
