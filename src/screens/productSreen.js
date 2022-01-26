import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet, Text, Button, ScrollView, Alert } from "react-native"



const ProductScreen = ({ route, navigation }) => {

    const [prodDescription, setProdDescription]  = useState('')
    const { product } = route.params

    const showAlert = () => Alert.alert(
        "Lo sentimos",
        "Las compras aun no estan habilitadas",
        [
            {
                text: "Aceptar"
            }
        ]
    )
    
    useEffect(() => {
        const fetchData = async() => {
            const req = await fetch(`https://api.mercadolibre.com/items/${product.id}/description`)
            const resp = await req.json()
            setProdDescription(resp.plain_text)
        }
        fetchData()
    },[])

    return(
        <ScrollView >
            <View style={styles.productPageContainer}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Image
                    style={styles.imageStyle}
                    source={{uri: `${product.thumbnail}`}}
                />
                <Text style={styles.productPrice}>${product.price}</Text>
                <Button title="Comprar" onPress={showAlert}/>
                <Text style={styles.productDescriptionTitle}>Descripcion del Producto:</Text>
                <Text style={styles.productDescription}>{prodDescription}</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    productPageContainer: {
        margin: 12,
    },
    imageStyle: {
        marginTop: 10,
        alignSelf: 'center',
        height: 230,
        minWidth: 230,
        resizeMode: 'contain',
    },
    productTitle: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 28,
        marginBottom: 11,
        marginLeft: 5,
        color: 'black',
    },
    productDescriptionTitle: {
        marginTop: 11,
        marginLeft: 2,
        fontSize: 20,
        color: 'black',
    },
    productDescription: {
        marginTop: 5,
        fontSize: 15,
        marginLeft: 3,
    }
})


export default ProductScreen