import React, { useState } from "react"
import { Image, TextInput, View, StyleSheet, Pressable, Alert } from "react-native"




const Navbar = ({handlePress}) => {

    const [inputText, setInputText] = useState()

    const handleInputChange = (e) => {
      setInputText(e)
    }

    const showAlert = () => Alert.alert(
        "Lo sentimos",
        "Su carrito aun no esta habilitado",
        [
            {
                text: "Aceptar"
            }
        ]
    )


    return (
        <View style={styles.navbar}>
            <Image
                style={styles.logo} 
                source={require('../images/images.png')}
            />
            <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder=' Buscar en Mercado Libre'
                    onChangeText={(e) => handleInputChange(e)}
                    value={inputText}
                />
                <Pressable onPress={() => handlePress(inputText)}>
                    <Image
                        style={styles.buscarIcon} 
                        source={require('../images/lupa.png')}
                    />
                </Pressable>
            </View>
            <Pressable onPress={showAlert}>
                <Image
                    style={styles.carrito}
                    source={require('../images/carrito.png')}
                />  
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        padding: 9,
    },
    logo: {
        marginTop: 2.5,
        width: 36,
        height: 37,
    },
    carrito: {
        width: 28,
        height: 28,
        marginTop: 4.5
    },
    textInputContainer: {
        flexDirection: 'row',
        height: 37,
        width: '75%',
        margin: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5
    },
    textInput: {
        height: 35, 
        width: '89%',
    },
    buscarIcon: {
        margin: 3,
        width: 20,
        height: 20,
    },
})


export default Navbar