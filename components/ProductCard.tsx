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
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    title?: string;
    ean?: string;
}

export default function ProductCard({title, ean}: Props) {
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
        <View style={styles.container}>
            <View style={styles.header}>    
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>{ean}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 100,
        margin: 5,
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
        minHeight: 30,
    },
    body: {
        flex: 3,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderTopWidth: 0,
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 10,
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    },
    text: {
        color: '#000000',
        fontSize: 16,
        fontFamily: "Roboto_400Regular",
    }
});