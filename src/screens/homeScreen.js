/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

const APIURL = 'https://api.mercadolibre.com/sites/MLA/search?q='
//para la descripcion: https://api.mercadolibre.com/items/{productId}/description

import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import Navbar from '../components/navbar'
import Card from '../components/card'
 


const HomeScreen = ({ navigation }) => {
 
   //const [inputText, setInputText] = useState('')
  const [results, setResults] = useState([])
  const [slicedResults, setSlicedResults] = useState([])
  const [actualPage, setActualPage] = useState(0)


  const handleInputChange = async(e) => {
    const resp = await fetch(`${APIURL}${e}`)
    const json = await resp.json()
    setResults(json.results)
    setSlicedResults(json.results.slice(0, 10))
  }
 
  const handleSlicedResults = (n) => {
    setSlicedResults(results.slice(10*n, 10*(n+1)))
    setActualPage(n)
  }
 
  const handleCardPress = (product) => {
    navigation.navigate('Product', {
      product: product
    })
  }
 
 
  return (
    <View>      
      <Navbar
        handlePress={handleInputChange}
      />
      <View>
        {results.length != 0 ?
          <ScrollView style={styles.cardsContainer}>
            {slicedResults.map((resp) => 
              <Card
                key={resp.id}
                product={resp}
                handlePress={handleCardPress}
              />
            )}

            <View style={styles.resultPages}>
              <Pressable onPress={() => handleSlicedResults(0)}>
                <Text style={actualPage == 0 ? styles.resultPageSelected : styles.resultPagesText}> 1 |</Text>
              </Pressable>
              <Pressable onPress={() => handleSlicedResults(1)}>
                <Text style={actualPage == 1 ? styles.resultPageSelected : styles.resultPagesText}> 2 |</Text>
              </Pressable>
              <Pressable onPress={() => handleSlicedResults(2)}>
                <Text style={actualPage == 2 ? styles.resultPageSelected : styles.resultPagesText}> 3 |</Text>
              </Pressable>
              <Pressable onPress={() => handleSlicedResults(3)}>
                <Text style={actualPage == 3 ? styles.resultPageSelected : styles.resultPagesText}> 4 |</Text>
              </Pressable>
              <Pressable onPress={() => handleSlicedResults(4)}>
                <Text style={actualPage == 4 ? styles.resultPageSelected : styles.resultPagesText}> 5 </Text>
              </Pressable>
            </View>
          </ScrollView>
        :
        <View>
          <Text style={styles.resultPageSelected}>
            Realize una busqueda
          </Text>
        </View>
        }
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  cardsContainer: {
    display: 'flex',
    height: '90%'
  },
  resultPages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 20,
  },
  resultPagesText: {
    fontSize: 18
  },
  resultPageSelected: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 225
  },
  infomationText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default HomeScreen





