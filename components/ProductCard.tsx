import { Roboto_100Thin } from '@expo-google-fonts/roboto/100Thin';
import { Roboto_100Thin_Italic } from '@expo-google-fonts/roboto/100Thin_Italic';
import { Roboto_200ExtraLight } from '@expo-google-fonts/roboto/200ExtraLight';
import { Roboto_200ExtraLight_Italic } from '@expo-google-fonts/roboto/200ExtraLight_Italic';
import { Roboto_300Light } from '@expo-google-fonts/roboto/300Light';
import { Roboto_300Light_Italic } from '@expo-google-fonts/roboto/300Light_Italic';
import { Roboto_400Regular } from '@expo-google-fonts/roboto/400Regular';
import { Roboto_400Regular_Italic } from '@expo-google-fonts/roboto/400Regular_Italic';
import { Roboto_500Medium } from '@expo-google-fonts/roboto/500Medium';
import { Roboto_500Medium_Italic } from '@expo-google-fonts/roboto/500Medium_Italic';
import { Roboto_600SemiBold } from '@expo-google-fonts/roboto/600SemiBold';
import { Roboto_600SemiBold_Italic } from '@expo-google-fonts/roboto/600SemiBold_Italic';
import { Roboto_700Bold } from '@expo-google-fonts/roboto/700Bold';
import { Roboto_700Bold_Italic } from '@expo-google-fonts/roboto/700Bold_Italic';
import { Roboto_800ExtraBold } from '@expo-google-fonts/roboto/800ExtraBold';
import { Roboto_800ExtraBold_Italic } from '@expo-google-fonts/roboto/800ExtraBold_Italic';
import { Roboto_900Black } from '@expo-google-fonts/roboto/900Black';
import { Roboto_900Black_Italic } from '@expo-google-fonts/roboto/900Black_Italic';
import { useFonts } from '@expo-google-fonts/roboto/useFonts';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Linking, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Button from './Button';
import GetProductByEan, { ProductInfo } from './ShopwareIntegration';

type Props = {
    ean: string;
    style: StyleProp<ViewStyle>;
}

export default function ProductCard({ean, style}: Props) {
    let [productInfo, setProductInfo] = useState<ProductInfo>();
    if (!productInfo) { 
        GetProductByEan(ean).then(info => { setProductInfo(info) });
    }

    let [fontsLoaded] = useFonts({
        Roboto_100Thin, 
        Roboto_200ExtraLight, 
        Roboto_300Light, 
        Roboto_400Regular, 
        Roboto_500Medium, 
        Roboto_600SemiBold, 
        Roboto_700Bold, 
        Roboto_800ExtraBold, 
        Roboto_900Black, 
        Roboto_100Thin_Italic, 
        Roboto_200ExtraLight_Italic, 
        Roboto_300Light_Italic, 
        Roboto_400Regular_Italic, 
        Roboto_500Medium_Italic, 
        Roboto_600SemiBold_Italic, 
        Roboto_700Bold_Italic, 
        Roboto_800ExtraBold_Italic, 
        Roboto_900Black_Italic
    });

    if (!fontsLoaded) {
        return null;
    } 
    
    return (
        <View style={style}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{productInfo?.name || 'Loading...'}</Text>
                </View>
                <View style={styles.cover}>
                    <Image style={styles.coverImage} source={productInfo?.imageUrl || ""} contentFit="cover" />
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyRowContainer}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.textSubHeading}>Product Info</Text>
                            <Text style={styles.text}>Prijs: €{productInfo?.price}</Text>
                            <Text style={styles.text}>EAN: {productInfo?.ean}</Text>
                            <Text style={styles.text}>Merk: {productInfo?.manufacturer}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            {productInfo?.url !== "" ? 
                                <Button enabled={true}  label="Website" theme="website" onPress={() => {Linking.openURL(productInfo?.url || "")}} /> : null}
                        </View>
                        <View style={styles.buttonContainer}>
                            {productInfo?.manufacturer === "Fiamma" || productInfo?.manufacturer === "" ? 
                            <Button enabled={true}  label="Fiamma" theme="manufacturer" onPress={() => {
                                Linking.openURL(("https://www.bade.biz/search?q=") + ean)}}>
                            </Button> : null}

                            {productInfo?.manufacturer === "Thule" || productInfo?.manufacturer === ""? 
                            <Button enabled={true}  label="Thule" theme="manufacturer" onPress={() => {
                                Linking.openURL(("https://www.gimeg.nl/nl-nl/search?q=") + ean)}}>
                            </Button> : null}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: 300,
        minHeight: 300,
        width: "100%",
    },
    header:{
        flex: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#3E5F42',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        minHeight: 50,
    },
    cover: {
        flex: 3,
        borderColor: '#cccccc',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        minHeight: 125
    },
    body: {
        flex: 3,
        flexDirection: "column",
        borderColor: '#cccccc',
        borderWidth: 1,
        borderTopWidth: 0,
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: "#ebebeb",
        minHeight: 150
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    },
    text: {
        color: '#000000',
        fontSize: 14,
        fontFamily: "Roboto_400Regular",
        paddingInline: 5,
    },
    textSubHeading: {
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
        color: "#689F69",
        paddingBottom: 5,
    },
    infoContainer: {
        flex: 1,
        paddingInline: 20,
        paddingBottom:10,
        minHeight: "auto",
        justifyContent: "center",
    },
    buttonContainer: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 5,
    },
    bodyRowContainer: {
        flex: 1,
        flexDirection: "row"
    },
    coverImage: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    }
});