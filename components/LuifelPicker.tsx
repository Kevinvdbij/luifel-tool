import Button from '@/components/Button';
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
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";



type Props = { 
    onPress: (result: string[]) => void;
}

export default function LuifelPicker({ onPress }: Props) {
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

    const [selectedBrand, setSelectedBrand] = useState("-1");
    const [selectedModel, setSelectedModel] = useState("-1");
    const [selectedYear, setSelectedYear] = useState("-1");
    const [selectedHeight, setSelectedHeight] = useState("-1");
    const [selectedLength, setSelectedLength] = useState("-1");
    const [selectedInfo, setSelectedInfo] = useState("-1");

    let luifelData = [{
            brand: "Citroën",
            model: "C25",
            year: "≥ 1981 ≤ 1994",
            height: "H1 = 2100 mm",
            length: "L = 4756 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=302852&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","302852"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 1994 ≤ 2006",
            height: "H2 = 2152 mm",
            length: "L2 = 5099 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=268551&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","268551"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 1994 ≤ 2006",
            height: "H2 = 2152 mm",
            length: "L3 = 5599 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529311&filter_sku=523084&filter_sku=268551&sort=NL+Prijs+oplopend#results"],
            skus: ["529311","523084","268551"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L1 = 4963 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413183&filter_sku=413139&filter_sku=413164&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413183","413139","413164","340539"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L1 = 4963 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516785&filter_sku=516742&filter_sku=459014&sort=NL+Prijs+oplopend#results"],
            skus: ["516785","516742","459014"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Dakrail Alu-line style",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523100&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523100"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413184&filter_sku=413144&filter_sku=413168&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413184","413144","413168","340539"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Imperiaal",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523099&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523099"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=459025&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","459025"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=268553&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=459014&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","459014"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Dakrail Alu-line style",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523100&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523100"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529295&filter_sku=569993&filter_sku=554521&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=749251&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["749251","340539"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Imperiaal",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523099&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523099"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=459026&sort=NL+Prijs+oplopend#results"],
            skus: ["516789","516750","459026"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=268553&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=459015&sort=NL+Prijs+oplopend#results"],
            skus: ["516789","516750","459015"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529295&filter_sku=569993&filter_sku=554521&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","340539"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=459026&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","459026"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=268554&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=459015&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","459015"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H3 = 2764 mm",
            length: "L3 = 5998 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=382190&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413185&filter_sku=413149&filter_sku=413172&filter_sku=420207&sort=NL+Prijs+oplopend#results"],
            skus: ["413185","413149","413172","420207"]
        },
        {
            brand: "Citroën",
            model: "Jumper",
            year: "≥ 2006",
            height: "H3 = 2764 mm",
            length: "L4 = 6363 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=382190&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=420207&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","420207"]
        },
        {
            brand: "Citroën",
            model: "Jumpy / Campster / Spacetourer",
            year: "≥ 2016",
            height: "H1 = 1895 mm",
            length: "L = 4959 mm",
            info: "Bevestigingspunten zonder zonnedak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749134&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749134"]
        },
        {
            brand: "Citroën",
            model: "Jumpy / Campster / Spacetourer",
            year: "≥ 2016",
            height: "H1 = 1895 mm",
            length: "L = 4959 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=741021&filter_sku=748128&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749134&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749134"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251110"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251111"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","251110"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","251111"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251110"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251111"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L2 = 5932 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251110"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L2 = 5932 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251111"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L3 = 6967 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251110"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L3 = 6967 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251111"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L4 = 7367 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529324&filter_sku=529321&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["529324","529321","251110"]
        },
        {
            brand: "Dodge",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L4 = 7367 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529324&filter_sku=529321&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["529324","529321","251111"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 1981 ≤ 1994",
            height: "H1 = 2100 mm",
            length: "L = 4756 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523097&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523097"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 1981 ≤ 1994",
            height: "H2 = 2415 mm",
            length: "L = 4756 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523097&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523097"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 1994 ≤ 2006",
            height: "H2 = 2152 mm",
            length: "L2 = 5099 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=268551&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","268551"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 1994 ≤ 2006",
            height: "H2 = 2152 mm",
            length: "L3 = 5599 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529311&filter_sku=523084&filter_sku=268551&sort=NL+Prijs+oplopend#results"],
            skus: ["529311","523084","268551"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L1 = 4963 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413183&filter_sku=413139&filter_sku=413164&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413183","413139","413164","340539"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L1 = 4963 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516785&filter_sku=516742&filter_sku=459014&sort=NL+Prijs+oplopend#results"],
            skus: ["516785","516742","459014"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Dakrail Alu-line style",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523100&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523100"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413184&filter_sku=413144&filter_sku=413168&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413184","413144","413168","340539"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Imperiaal",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523099&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523099"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=459025&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","459025"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=268553&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=459014&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","459014"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Dakrail Alu-line style",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523100&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523100"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529295&filter_sku=569993&filter_sku=554521&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=749251&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["749251","340539"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Imperiaal",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523099&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523099"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=459026&sort=NL+Prijs+oplopend#results"],
            skus: ["516789","516750","459026"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=268553&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=459015&sort=NL+Prijs+oplopend#results"],
            skus: ["516789","516750","459015"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443442&filter_sku=443459&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","340539"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=459026&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","459026"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=268554&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=459015&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","459015"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H3 = 2764 mm",
            length: "L3 = 5998 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=382190&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413185&filter_sku=413149&filter_sku=413172&filter_sku=420207&sort=NL+Prijs+oplopend#results"],
            skus: ["413185","413149","413172","420207"]
        },
        {
            brand: "Fiat",
            model: "Ducato",
            year: "≥ 2006",
            height: "H3 = 2764 mm",
            length: "L4 = 6363 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=382190&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=420207&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","420207"]
        },
        {
            brand: "Fiat",
            model: "Talento",
            year: "≥ 2016",
            height: "H1 = 1971 mm",
            length: "L1 = 4999 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=455373&filter_sku=554526&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413134&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["413134","340662"]
        },
        {
            brand: "Fiat",
            model: "Talento",
            year: "≥ 2016",
            height: "H1 = 1971 mm",
            length: "L2 = 5399 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=455373&filter_sku=554527&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340662"]
        },
        {
            brand: "Ford",
            model: "Cap Land / Cap Life",
            year: "≥ 2015 ≤ 2018",
            height: "H1 = 2020 mm",
            length: "L2 = 5339 mm",
            info: "Rapido met hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443515&filter_sku=443513&filter_sku=523114&sort=NL+Prijs+oplopend#results"],
            skus: ["443515","443513","523114"]
        },
        {
            brand: "Ford",
            model: "Cap Land / Cap Life",
            year: "≥ 2018",
            height: "H1 = 2020 mm",
            length: "L1 = 4972 mm",
            info: "Rapido met hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=554570&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","554570"]
        },
        {
            brand: "Ford",
            model: "Nugget",
            year: "≥ 2013",
            height: "N.v.t.",
            length: "N.v.t.",
            info: "Regengoten met hoog dak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=420241&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","420241"]
        },
        {
            brand: "Ford",
            model: "Nugget Plus",
            year: "≥ 2013",
            height: "N.v.t.",
            length: "N.v.t.",
            info: "Regengoten met hoog dak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=420241&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","420241"]
        },
        {
            brand: "Ford",
            model: "Transit",
            year: "≥ 2015",
            height: "H3 = 2780 mm",
            length: "L2 = 5585 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413184&filter_sku=413144&filter_sku=413168&filter_sku=749137&sort=NL+Prijs+oplopend#results"],
            skus: ["413184","413144","413168","749137"]
        },
        {
            brand: "Ford",
            model: "Transit",
            year: "≥ 2015",
            height: "H3 = 2780 mm",
            length: "L3 = 5981 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413185&filter_sku=413149&filter_sku=413172&filter_sku=749137&sort=NL+Prijs+oplopend#results"],
            skus: ["413185","413149","413172","749137"]
        },
        {
            brand: "Ford",
            model: "Transit",
            year: "≥ 2015",
            height: "H3 = 2780 mm",
            length: "L4 = 6703 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=749137&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","749137"]
        },
        {
            brand: "Ford",
            model: "Transit Custom Nugget",
            year: "≥ 2012 ≤ 2023",
            height: "H2 = 2389 mm",
            length: "L2 = 5339 mm",
            info: "Westfalia hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=523109&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","523109"]
        },
        {
            brand: "Ford",
            model: "Transit/Tourneo Custom",
            year: "≥ 2012 ≤ 2023",
            height: "H1 = 2020 mm",
            length: "L1 = 4972 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=523110&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749136&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749136"]
        },
        {
            brand: "Ford",
            model: "Transit/Tourneo Custom",
            year: "≥ 2012 ≤ 2023",
            height: "H1 = 2020 mm",
            length: "L2 = 5339 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523110&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523110"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251110"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251111"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","251110"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","251111"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251110"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251111"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L2 = 5932 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251111"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L3 = 6967 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251110"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L3 = 6967 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251111"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L4 = 7367 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529324&filter_sku=529321&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["529324","529321","251110"]
        },
        {
            brand: "Freightliner",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L4 = 7367 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529324&filter_sku=529321&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["529324","529321","251111"]
        },
        {
            brand: "Iveco",
            model: "Daily",
            year: "≥ 2006 ≤ 2014",
            height: "H2 = 2760 mm",
            length: "L2 = 5477 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=302864&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","302864"]
        },
        {
            brand: "Iveco",
            model: "Daily",
            year: "≥ 2006 ≤ 2014",
            height: "H2 = 2760 mm",
            length: "L3 = 5977 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=302864&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","302864"]
        },
        {
            brand: "MAN",
            model: "TGE",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L3 = 5986 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=479416&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","479416"]
        },
        {
            brand: "MAN",
            model: "TGE",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L3 = 5986 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=523115&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=518442&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","518442"]
        },
        {
            brand: "MAN",
            model: "TGE",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L4 = 6836 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=479416&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","479416"]
        },
        {
            brand: "MAN",
            model: "TGE",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L4 = 6836 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=523115&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=518442&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","518442"]
        },
        {
            brand: "MAN",
            model: "TGE",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L5 = 7391 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516791&filter_sku=516756&filter_sku=518442&sort=NL+Prijs+oplopend#results"],
            skus: ["516791","516756","518442"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","251111"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "T-profiel",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=541581&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","541581"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251111&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=611824&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","611824"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "T-profiel",
            link: ["https://www.obelink.nl/luifels/?filter_sku=548472&filter_sku=516754&filter_sku=541581&sort=NL+Prijs+oplopend#results"],
            skus: ["548472","516754","541581"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=251111&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=548472&filter_sku=516754&filter_sku=611824&sort=NL+Prijs+oplopend#results"],
            skus: ["548472","516754","611824"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L4 = 7360 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2006 ≤ 2018",
            height: "H2 = 2440-2560 mm",
            length: "L4 = 7360 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251111&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516791&filter_sku=516756&filter_sku=611824&sort=NL+Prijs+oplopend#results"],
            skus: ["516791","516756","611824"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L1 = 5932 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L1 = 5932 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","251111"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L2 = 5932 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L2 = 5932 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","251111"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L3 = 6967 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L3 = 6967 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251111"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L4 = 7367 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529324&filter_sku=529321&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["529324","529321","251110"]
        },
        {
            brand: "Mercedes",
            model: "Sprinter",
            year: "≥ 2018",
            height: "H2 = 2610-2640 mm",
            length: "L4 = 7367 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529324&filter_sku=529321&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["529324","529321","251111"]
        },
        {
            brand: "Mercedes",
            model: "V Classe / Vito",
            year: "≥ 2014",
            height: "H1 = 1890 / 1910 mm",
            length: "L2 = 5140 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=455373&filter_sku=554524&sort=NL+Prijs+oplopend#results"],
            skus: ["455373","554524"]
        },
        {
            brand: "Mercedes",
            model: "V Classe / Vito",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5140 mm",
            info: "Handmatig hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=523108&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","523108"]
        },
        {
            brand: "Mercedes",
            model: "Vito / Viano",
            year: "≥ 1996 ≤ 2003",
            height: "H1 = 1890 mm",
            length: "L1 = 4660 mm",
            info: "Handmatig hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=336582&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","336582"]
        },
        {
            brand: "Mercedes",
            model: "Vito / Viano",
            year: "≥ 1996 ≤ 2003",
            height: "H1 = 1890 mm",
            length: "L1 = 4660 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=336582&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","336582"]
        },
        {
            brand: "Mercedes",
            model: "Vito / Viano",
            year: "≥ 2003 ≤ 2013",
            height: "H1 = 1903 mm",
            length: "L2 = 4993 - 5008 mm",
            info: "Handmatig hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443518&filter_sku=443516&filter_sku=443517&filter_sku=336583&sort=NL+Prijs+oplopend#results"],
            skus: ["443518","443516","443517","336583"]
        },
        {
            brand: "Mercedes",
            model: "Vito / Viano",
            year: "≥ 2003 ≤ 2013",
            height: "H1 = 1903 mm",
            length: "L2 = 4993 - 5008 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443518&filter_sku=443516&filter_sku=443517&filter_sku=336583&sort=NL+Prijs+oplopend#results"],
            skus: ["443518","443516","443517","336583"]
        },
        {
            brand: "Mitsubishi",
            model: "Delica",
            year: "≥ 2007",
            height: "H1 = 1871 mm",
            length: "L1 = 4729 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=523111&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","523111"]
        },
        {
            brand: "Nissan",
            model: "Evalia",
            year: "≥ 2010",
            height: "H1 = 1860 mm",
            length: "L1 = 4400 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=523111&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","523111"]
        },
        {
            brand: "Nissan",
            model: "Interstar",
            year: "≥ 1998 ≤ 2011",
            height: "H2 = 2486 mm",
            length: "L2 = 5399 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=302862&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","302862"]
        },
        {
            brand: "Nissan",
            model: "Interstar",
            year: "≥ 1998 ≤ 2011",
            height: "H2 = 2486 mm",
            length: "L3 = 5899 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529311&filter_sku=523084&filter_sku=302862&sort=NL+Prijs+oplopend#results"],
            skus: ["529311","523084","302862"]
        },
        {
            brand: "Nissan",
            model: "NV200",
            year: "≥ 2009",
            height: "H1 = 1860 mm",
            length: "L1 = 4400 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=523111&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","523111"]
        },
        {
            brand: "Nissan",
            model: "NV300",
            year: "≥ 2016",
            height: "H1 = 1971 mm",
            length: "L1 = 4999 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413134&filter_sku=340662&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=523107&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","523107"]
        },
        {
            brand: "Nissan",
            model: "NV300",
            year: "≥ 2016",
            height: "H1 = 1971 mm",
            length: "L2 = 5399 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413183&filter_sku=413139&filter_sku=413164&filter_sku=340662&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=497020&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","497020"]
        },
        {
            brand: "Nissan",
            model: "NV400",
            year: "≥ 2011",
            height: "H2 = 2502 mm",
            length: "L2 = 5548 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=340481&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=268555&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","268555"]
        },
        {
            brand: "Nissan",
            model: "NV400",
            year: "≥ 2011",
            height: "H2 = 2502 mm",
            length: "L3 = 6198 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=340481&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=268555&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","268555"]
        },
        {
            brand: "Nissan",
            model: "NV400",
            year: "≥ 2011",
            height: "H2 = 2502 mm",
            length: "L4 = 6848 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=340481&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","340481"]
        },
        {
            brand: "Nissan",
            model: "NV400",
            year: "≥ 2011",
            height: "H3 = 2749 mm",
            length: "L2 = 5548 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413184&filter_sku=413144&filter_sku=413168&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413184","413144","413168","490710"]
        },
        {
            brand: "Nissan",
            model: "NV400",
            year: "≥ 2011",
            height: "H3 = 2749 mm",
            length: "L3 = 6198 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413185&filter_sku=413149&filter_sku=413172&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413185","413149","413172","490710"]
        },
        {
            brand: "Nissan",
            model: "NV400",
            year: "≥ 2011",
            height: "H3 = 2749 mm",
            length: "L4 = 6848 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","490710"]
        },
        {
            brand: "Nissan",
            model: "Primastar",
            year: "≥ 2001 ≤ 2014",
            height: "H1 = 1955 / 1963 mm",
            length: "L1 = 4782 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413134&filter_sku=340662&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=336584&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","336584"]
        },
        {
            brand: "Nissan",
            model: "Primastar",
            year: "≥ 2001 ≤ 2014",
            height: "H1 = 1955 / 1963 mm",
            length: "L2 = 5182 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413183&filter_sku=413139&filter_sku=413164&filter_sku=340662&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=249903&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","249903"]
        },
        {
            brand: "Nissan",
            model: "Primastar",
            year: "≥ 2001 ≤ 2014",
            height: "H2 = 2464 mm",
            length: "L2 = 5182 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=336484&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","336484"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 1998 ≤ 2010",
            height: "H2 = 2486 mm",
            length: "L2 = 5399 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=302862&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","302862"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 1998 ≤ 2010",
            height: "H2 = 2486 mm",
            length: "L3 = 5899 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529311&filter_sku=523084&filter_sku=302862&sort=NL+Prijs+oplopend#results"],
            skus: ["529311","523084","302862"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2011 ≤ 2021",
            height: "H2 = 2502 mm",
            length: "L2 = 5548 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=340481&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=268555&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","268555"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2011 ≤ 2021",
            height: "H2 = 2502 mm",
            length: "L3 = 6198 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=340481&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=268555&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","268555"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2011 ≤ 2021",
            height: "H2 = 2502 mm",
            length: "L4 = 6848 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=340481&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","340481"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2011 ≤ 2021",
            height: "H3 = 2749 mm",
            length: "L2 = 5548 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413184&filter_sku=413144&filter_sku=413168&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413184","413144","413168","490710"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2011 ≤ 2021",
            height: "H3 = 2749 mm",
            length: "L3 = 6198 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413185&filter_sku=413149&filter_sku=413172&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413185","413149","413172","490710"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2011 ≤ 2021",
            height: "H3 = 2749 mm",
            length: "L4 = 6848 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","490710"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523112&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523112"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=268553&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","268553"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529295&filter_sku=569993&filter_sku=554521&filter_sku=523112&sort=NL+Prijs+oplopend#results"],
            skus: ["529295","569993","523112"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=268553&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","268553"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443442&filter_sku=443459&filter_sku=523112&sort=NL+Prijs+oplopend#results"],
            skus: ["443442","443459","523112"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=612235&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","612235"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H3 = 2764 mm",
            length: "L3 = 5998 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=382190&sort=NL+Prijs+oplopend#results"],
            skus: ["523089","382190"]
        },
        {
            brand: "Opel",
            model: "Movano",
            year: "≥ 2022",
            height: "H3 = 2764 mm",
            length: "L4 = 6363 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=382190&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","382190"]
        },
        {
            brand: "Opel",
            model: "Vivaro",
            year: "≥ 2001 ≤ 2014",
            height: "H1 = 1959 mm",
            length: "L1 = 4782 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=336584&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413134&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["413134","340662"]
        },
        {
            brand: "Opel",
            model: "Vivaro",
            year: "≥ 2001 ≤ 2014",
            height: "H1 = 1959 mm",
            length: "L2 = 5182 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=249903&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340662"]
        },
        {
            brand: "Opel",
            model: "Vivaro",
            year: "≥ 2001 ≤ 2014",
            height: "H2 = 2497 mm",
            length: "L2 = 5182 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=336484&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","336484"]
        },
        {
            brand: "Opel",
            model: "Vivaro",
            year: "≥ 2014 ≤ 2018",
            height: "H1 = 1971 mm",
            length: "L1 = 4998 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=523107&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413134&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["413134","340662"]
        },
        {
            brand: "Opel",
            model: "Vivaro",
            year: "≥ 2014 ≤ 2018",
            height: "H1 = 1971 mm",
            length: "L2 = 5398 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=497020&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340662"]
        },
        {
            brand: "Opel",
            model: "Vivaro",
            year: "≥ 2019",
            height: "H1 = 1881 / 1940 mm",
            length: "L = 4959 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443518&filter_sku=443516&filter_sku=443517&filter_sku=554569&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749134&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749134"]
        },
        {
            brand: "Opel",
            model: "Zafira Life",
            year: "≥ 2019",
            height: "H1 = 1890 / 1930 mm",
            length: "L = 4956 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443518&filter_sku=443516&filter_sku=443517&filter_sku=554569&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749134&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749134"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 1994 ≤ 2006",
            height: "H2 = 2152 mm",
            length: "L2 = 5099 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=268551&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","268551"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 1994 ≤ 2006",
            height: "H2 = 2152 mm",
            length: "L3 = 5599 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529311&filter_sku=523084&filter_sku=268551&sort=NL+Prijs+oplopend#results"],
            skus: ["529311","523084","268551"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L1 = 4963 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413183&filter_sku=413139&filter_sku=413164&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413183","413139","413164","340539"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L1 = 4963 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516785&filter_sku=516742&filter_sku=459014&sort=NL+Prijs+oplopend#results"],
            skus: ["516785","516742","459014"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Dakrail Alu-line style",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523100&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523100"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413184&filter_sku=413144&filter_sku=413168&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413184","413144","413168","340539"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Imperiaal",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=523099&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","523099"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=459025&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=459026&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","459026"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L2 = 5413 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=268553&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=459014&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","459014"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Dakrail Alu-line style",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523100&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523100"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529295&filter_sku=569993&filter_sku=554521&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=749251&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["749251","340539"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Imperiaal",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=523099&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","523099"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Thule SmartClamp System",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=459026&sort=NL+Prijs+oplopend#results"],
            skus: ["516789","516750","459026"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L3 = 5998 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=268553&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=459015&sort=NL+Prijs+oplopend#results"],
            skus: ["516789","516750","459015"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443442&filter_sku=443459&filter_sku=523112&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=340539&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","340539"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H2 = 2524 mm",
            length: "L4 = 6363 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=268554&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=459015&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","459015"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H3 = 2764 mm",
            length: "L3 = 5998 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=382190&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413185&filter_sku=413149&filter_sku=413172&filter_sku=420207&sort=NL+Prijs+oplopend#results"],
            skus: ["413185","413149","413172","420207"]
        },
        {
            brand: "Peugeot",
            model: "Boxer",
            year: "≥ 2006",
            height: "H3 = 2764 mm",
            length: "L4 = 6363 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=382190&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=420207&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","420207"]
        },
        {
            brand: "Peugeot",
            model: "Expert",
            year: "≥ 2016",
            height: "H1 = 1881 / 1940 mm",
            length: "L = 4959 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443518&filter_sku=443516&filter_sku=443517&filter_sku=554569&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749134&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749134"]
        },
        {
            brand: "Peugeot",
            model: "J5",
            year: "≥ 1981 ≤ 1994",
            height: "H1 = 2100 mm",
            length: "L = 4756 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=302852&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","302852"]
        },
        {
            brand: "Peugeot",
            model: "J5",
            year: "≥ 1981 ≤ 1994",
            height: "H2 = 2415 mm",
            length: "L = 4756 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=302852&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","302852"]
        },
        {
            brand: "Peugeot",
            model: "Traveller",
            year: "≥ 2016",
            height: "H1 = 1881 / 1980 mm",
            length: "L = 4959 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443518&filter_sku=443516&filter_sku=443517&filter_sku=554569&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749134&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749134"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 1997 ≤ 2009",
            height: "H2 = 2486 mm",
            length: "L2 = 5399 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=302862&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=340485&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","340485"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 1997 ≤ 2009",
            height: "H2 = 2486 mm",
            length: "L3 = 5899 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529311&filter_sku=523084&filter_sku=302862&sort=NL+Prijs+oplopend#results"],
            skus: ["529311","523084","302862"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 2010 ≥ 2024",
            height: "H2 = 2502 mm",
            length: "L2 = 5548 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=268555&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=340481&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","340481"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 2010 ≥ 2024",
            height: "H2 = 2502 mm",
            length: "L3 = 6198 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523089&filter_sku=268555&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516789&filter_sku=516750&filter_sku=340481&sort=NL+Prijs+oplopend#results"],
            skus: ["516789","516750","340481"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 2010 ≥ 2024",
            height: "H2 = 2502 mm",
            length: "L4 = 6875 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516790&filter_sku=516752&filter_sku=340481&sort=NL+Prijs+oplopend#results"],
            skus: ["516790","516752","340481"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 2010 ≥ 2024",
            height: "H3 = 2749 mm",
            length: "L2 = 5548 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413184&filter_sku=413144&filter_sku=413168&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413184","413144","413168","490710"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 2010 ≥ 2024",
            height: "H3 = 2749 mm",
            length: "L3 = 6198 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413185&filter_sku=413149&filter_sku=413172&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413185","413149","413172","490710"]
        },
        {
            brand: "Renault",
            model: "Master",
            year: "≥ 2010 ≥ 2024",
            height: "H3 = 2749 mm",
            length: "L4 = 6875 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=413186&filter_sku=413154&filter_sku=413177&filter_sku=490710&sort=NL+Prijs+oplopend#results"],
            skus: ["413186","413154","413177","490710"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 1981 ≤ 1988",
            height: "H1 = 2056 mm",
            length: "L1 = 4337 mm",
            info: "Regengoot",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=302852&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","302852"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 1981 ≤ 1988",
            height: "H1 = 2056 mm",
            length: "L2 = 4434 mm",
            info: "Regengoot",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=302852&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","302852"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 1989 ≤ 2001",
            height: "H2 = 2454 / 2457 mm",
            length: "L2 = 4834 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443458&filter_sku=443440&filter_sku=336484&sort=NL+Prijs+oplopend#results"],
            skus: ["443458","443440","336484"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 2001 ≤ 2014",
            height: "H1 = 1955 / 1969 mm",
            length: "L1 = 4782 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=336584&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413134&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["413134","340662"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 2001 ≤ 2014",
            height: "H1 = 1955 / 1969 mm",
            length: "L2 = 5182 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=249903&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340662"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 2001 ≤ 2014",
            height: "H2 = 2464 mm",
            length: "L2 = 5182 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=336484&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","336484"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 2014",
            height: "H1 = 1967 - 1971 mm",
            length: "L1 = 4999 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=523107&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=413134&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["413134","340662"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 2014",
            height: "H1 = 1967 - 1971 mm",
            length: "L2 = 5399 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=497020&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340662&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340662"]
        },
        {
            brand: "Renault",
            model: "Trafic",
            year: "≥ 2015",
            height: "H1 = 1971 mm",
            length: "L1 = 4999 mm",
            info: "Rapido hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=681839&filter_sku=459909&filter_sku=523107&sort=NL+Prijs+oplopend#results"],
            skus: ["681839","459909","523107"]
        },
        {
            brand: "Toyota",
            model: "Proace",
            year: "≥ 2016",
            height: "H1 = 1899 / 1940 mm",
            length: "L = 4959 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443518&filter_sku=443516&filter_sku=443517&filter_sku=554569&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=749134&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","749134"]
        },
        {
            brand: "Volkswagen",
            model: "California T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4892 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=435027&filter_sku=435025&sort=NL+Prijs+oplopend#results"],
            skus: ["435027","435025"]
        },
        {
            brand: "Volkswagen",
            model: "California T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4904 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=435027&filter_sku=435025&sort=NL+Prijs+oplopend#results"],
            skus: ["435027","435025"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2006 ≤ 2016",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","251110"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2006 ≤ 2016",
            height: "H2 = 2440-2560 mm",
            length: "L1 = 5245 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=529281&filter_sku=251111&sort=NL+Prijs+oplopend#results"],
            skus: ["529281","251111"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2006 ≤ 2016",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251110&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=541581&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","541581"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2006 ≤ 2016",
            height: "H2 = 2440-2560 mm",
            length: "L2 = 5910 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=251111&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=516787&filter_sku=516746&filter_sku=611824&sort=NL+Prijs+oplopend#results"],
            skus: ["516787","516746","611824"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2006 ≤ 2016",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251110&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","251110"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2006 ≤ 2016",
            height: "H2 = 2440-2560 mm",
            length: "L3 = 6945 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=251111&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=548472&filter_sku=516754&filter_sku=611824&sort=NL+Prijs+oplopend#results"],
            skus: ["548472","516754","611824"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2006 ≤ 2016",
            height: "H2 = 2440-2560 mm",
            length: "L4 = 7345 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=516791&filter_sku=516756&filter_sku=541581&sort=NL+Prijs+oplopend#results"],
            skus: ["516791","516756","541581"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L3 = 5986 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=479416&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","479416"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L3 = 5986 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523082&filter_sku=523115&sort=NL+Prijs+oplopend#results"],
            skus: ["523082","523115"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L4 = 6836 mm",
            info: "Roof rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=479416&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","479416"]
        },
        {
            brand: "Volkswagen",
            model: "Crafter",
            year: "≥ 2017",
            height: "H3 = 2590-2640 mm",
            length: "L4 = 6836 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=523093&filter_sku=523090&filter_sku=523091&filter_sku=523115&sort=NL+Prijs+oplopend#results"],
            skus: ["523093","523115"]
        },
        {
            brand: "Volkswagen",
            model: "Kepler one/Kepler six/Kepler sixty",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5304 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443515&filter_sku=443513&filter_sku=502607&sort=NL+Prijs+oplopend#results"],
            skus: ["443515","443513","502607"]
        },
        {
            brand: "Volkswagen",
            model: "T2",
            year: "≥ 1968 ≤ 1979",
            height: "N.v.t.",
            length: "N.v.t.",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340440&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340440"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T3",
            year: "≥ 1979 ≤ 1990",
            height: "H1 = 1965 mm",
            length: "L = 4570 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=268546&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340440&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340440"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T4",
            year: "≥ 1990 ≤ 2003",
            height: "H1 = 1940 mm",
            length: "L1 = 4707 mm",
            info: "Brandup/multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=741021&filter_sku=406921&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340435&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T4",
            year: "≥ 1990 ≤ 2003",
            height: "H1 = 1940 mm",
            length: "L1 = 4707 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=302851&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340441&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","340441"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T4",
            year: "≥ 1990 ≤ 2003",
            height: "H1 = 1940 mm",
            length: "L2 = 5107 mm",
            info: "Brandup/multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=741022&filter_sku=406921&sort=NL+Prijs+oplopend#results"],
            skus: ["741022","406921"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T4",
            year: "≥ 1990 ≤ 2003",
            height: "H1 = 1940 mm",
            length: "L2 = 5107 mm",
            info: "N.v.t.",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=302851&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","302851"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4892 mm",
            info: "Brandup/multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340435&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4892 mm",
            info: "C rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=435026&filter_sku=435024&sort=NL+Prijs+oplopend#results"],
            skus: ["435026"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4892 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=748129&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=733938&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","733938"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4892 mm",
            info: "Multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=336478&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","336478"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4892 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=336479&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=733938&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","733938"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5292 mm",
            info: "Brandup/multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642363&filter_sku=733936&filter_sku=340435&sort=NL+Prijs+oplopend#results"],
            skus: ["642363","733936"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5292 mm",
            info: "C rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=488868&filter_sku=443460&sort=NL+Prijs+oplopend#results"],
            skus: ["488868","443460"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5292 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=748129&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642363&filter_sku=733936&filter_sku=733938&sort=NL+Prijs+oplopend#results"],
            skus: ["642363","733936","733938"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5292 mm",
            info: "Multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=336478&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","336478"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T5",
            year: "≥ 2003 ≤ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5292 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642363&filter_sku=733936&filter_sku=733938&sort=NL+Prijs+oplopend#results"],
            skus: ["642363","733936","733938"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4904 mm",
            info: "Brandup/multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=340435&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642363&filter_sku=733936&filter_sku=340435&sort=NL+Prijs+oplopend#results"],
            skus: ["642363","733936"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4904 mm",
            info: "C rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=435026&filter_sku=435024&sort=NL+Prijs+oplopend#results"],
            skus: ["435026"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4904 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=748129&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","748129"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4904 mm",
            info: "Multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=336478&sort=NL+Prijs+oplopend#results"],
            skus: ["443456","443436","336478"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L1 = 4904 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443456&filter_sku=443436&filter_sku=443437&filter_sku=336479&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642362&filter_sku=733937&filter_sku=733938&sort=NL+Prijs+oplopend#results"],
            skus: ["642362","733937","733938"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5304 mm",
            info: "C rail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=488868&filter_sku=443460&sort=NL+Prijs+oplopend#results"],
            skus: ["488868","443460"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5304 mm",
            info: "Hefdak",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=748129&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","748129"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5304 mm",
            info: "Multirail",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=336478&sort=NL+Prijs+oplopend#results"],
            skus: ["443438","443457","336478"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5304 mm",
            info: "Vaste bevestigingspunten",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443438&filter_sku=443457&filter_sku=336479&sort=NL+Prijs+oplopend#results","https://www.obelink.nl/luifels/?filter_sku=642363&filter_sku=733936&filter_sku=733938&sort=NL+Prijs+oplopend#results"],
            skus: ["642363","733936","733938"]
        },
        {
            brand: "Volkswagen",
            model: "Transporter/Caravelle/Multivan T6",
            year: "≥ 2014",
            height: "H1 = 1990 mm",
            length: "L2 = 5304 mm",
            info: "Westfalia Kepler",
            link: ["https://www.obelink.nl/luifels/?filter_sku=443515&filter_sku=443513&filter_sku=502607&sort=NL+Prijs+oplopend#results"],
            skus: ["443515","443513","502607"]
        }];
    
    let eanBySKU: { [key: string]: string } = {
        "249903":"8004815269036","251110":"8004815247898","251111":"8004815220266","268546":"8004815033644","268551":"8004815144807","268553":"8004815411947","268554":"8004815292577","268555":"8004815281236","302851":"8004815098438","302852":"8004815033613","302862":"8004815218751","302864":"8004815208462","336478":"8004815439255","336479":"8004815312848","336484":"8004815217457","336582":"8004815174408","336583":"8004815281342","336584":"8004815290061","340481":"5415182007795","340485":"5415182005012","340539":"5415182007801","340662":"5415182004619","382190":"8004815318192","406921":"8004815336905","413134":"5415182048507","413139":"5415182052191","413144":"5415182048668","413149":"5415182048798","413154":"5415182048927","413164":"5415182048613","413168":"5415182052375","413172":"5415182048842","413177":"5415182048972","413183":"5415182048637","413184":"5415182048736","413185":"5415182048866","413186":"5415182048996","420207":"5415182046336","420241":"5415182046350","435025":"8004815355050","435026":"8004815354749","435027":"8004815354763","443436":"8004815352073","443438":"8004815351717","443440":"8004815351878","443442":"8004815350444","443456":"8004815354701","443457":"8004815354725","443458":"8004815355104","443459":"8004815350451","443460":"8004815355067","443513":"8004815354350","443515":"8004815350925","443516":"8004815354367","443517":"8004815350499","443518":"8004815354640","455373":"8004815349141","459014":"5415182045681","459015":"5415182045698","459025":"5415182045704","459026":"5415182045711","459909":"8004815354343","479416":"8004815363741","488868":"8004815355098","490710":"5415182005050","497020":"8004815348694","502607":"8004815363598","516742":"5415182049290","516746":"5415182049344","516750":"5415182049405","516752":"5415182049436","516754":"5415182049467","516756":"5415182049498","516785":"5415182049733","516787":"5415182049764","516789":"5415182049801","516790":"5415182049825","516791":"5415182049849","518442":"5415182046480","523082":"8004815468965","523084":"8004815390105","523089":"8004815468989","523093":"8004815386689","523097":"8004815095239","523099":"8004815234515","523100":"8004815306304","523107":"8004815348687","523108":"8004815348700","523109":"8004815348717","523110":"8004815452490","523111":"8004815348748","523112":"8004815348762","523114":"8004815363611","523115":"8004815380793","529281":"8004815377625","529295":"8004815383527","529311":"8004815386672","529321":"8004815390143","529324":"8004815386702","541581":"5415182050340","548472":"5415182053006","554524":"8004815401238","554526":"8004815401320","554527":"8004815401337","554569":"8004815404215","554570":"8004815348755","569993":"8004815391249","611824":"5415182005067","612235":"8004815411749","642362":"5415182061438","642363":"5415182061476","681839":"8004815363130","733936":"5415182061599","733937":"5415182061575","733938":"5415182066341","741021":"8004815452568","741022":"8004815452575","748128":"8004815460075","748129":"8004815441524","749134":"5415182066402","749136":"5415182066426","749137":"5415182071017","749251":"5415182058698"
    };


    // Initialize variables for the pickers

    let availableBrands = Array.from(new Set(luifelData.map((x) => x.brand)));

    let availableModels = selectedBrand == undefined ? [] : 
        Array.from(new Set(luifelData.filter((data) => 
            data.brand == selectedBrand)
            .map((x) => x.model)));

    let availableYears = selectedModel == undefined ? [] :
        Array.from(new Set(luifelData.filter((data) => 
            data.brand == selectedBrand && 
            data.model == selectedModel)
            .map((x) => x.year)));

    let availableHeights = selectedYear == undefined ? [] :
        Array.from(new Set(luifelData.filter((data) => 
            data.brand == selectedBrand && 
            data.model == selectedModel && 
            data.year == selectedYear)
            .map((x) => x.height)));

    let availableLengths = selectedHeight == undefined ? [] :
        Array.from(new Set(luifelData.filter((data) => 
            data.brand == selectedBrand && 
            data.model == selectedModel && 
            data.year == selectedYear && 
            data.height == selectedHeight)
            .map((x) => x.length)));

    let availableInfos = selectedLength == undefined ? [] :
        Array.from(new Set(luifelData.filter((data) => 
            data.brand == selectedBrand && 
            data.model == selectedModel && 
            data.year == selectedYear && 
            data.height == selectedHeight && 
            data.length == selectedLength)
            .map((x) => x.info)));

    /** Function to clear the pickers when a higher level picker is changed, for example when the brand is changed, all other pickers will be reset to default value
     * 
     * @param index location from which the pickers should be cleared
     */
    function clearPickers(index: number) {
        if (index <= 0) setSelectedBrand("-1");
        if (index <= 1) setSelectedModel("-1");
        if (index <= 2) setSelectedYear("-1");
        if (index <= 3) setSelectedHeight("-1");
        if (index <= 4) setSelectedLength("-1");
        if (index <= 5) setSelectedInfo("-1");
    }

    /** Evaluate the selected state and return a list of compatible products by EAN */
    function evaluateSearch(): string[] {
        let results = luifelData.filter((data) => 
            data.brand == selectedBrand && 
            data.model == selectedModel && 
            data.year == selectedYear && 
            data.height == selectedHeight && 
            data.length == selectedLength && 
            data.info == selectedInfo);

        let resultProducts: string[] = [];
        results[0].skus.forEach((sku) => {
            resultProducts.push(eanBySKU[sku]);
        });

        return resultProducts;
    }

    function validPickerState(): boolean {
        return selectedBrand !== "-1" 
        && selectedModel !== "-1" 
        && selectedYear !== "-1" 
        && selectedHeight !== "-1" 
        && selectedLength !== "-1" 
        && selectedInfo !== "-1";
    }

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Zoek uw voertuig</Text>
            </View>
            <View style={styles.body}>

                <Text style={styles.subheading}>Merk</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={selectedBrand}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedBrand(itemValue);
                        clearPickers(1);
                    }}>
                        <Picker.Item label="-- Kies een merk --" value={-1} key="" enabled={false} style={styles.pickerItem} />
                        {availableBrands.map((brand) => { return (<Picker.Item label={brand} value={brand} key={brand} style={styles.pickerItem} />) })}
                </Picker>

                    <Text style={styles.subheading}>Model</Text>
                    <Picker
                        enabled={availableModels.length > 0}
                        style={styles.picker}
                        selectedValue={selectedModel}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedModel(itemValue);
                            clearPickers(2);
                        }}>
                        <Picker.Item label="-- Kies een model --" value={-1} key="" enabled={false} style={styles.pickerItem} />
                        {availableModels.map((model) => { return (<Picker.Item label={model} value={model} key={model} style={styles.pickerItem} />); })}
                    </Picker>

                    <><Text style={styles.subheading}>Bouwjaar</Text>
                    <Picker
                        enabled={availableYears.length > 0}
                        style={styles.picker}
                        selectedValue={selectedYear}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedYear(itemValue);
                            clearPickers(3);
                            }
                        }>
                            <Picker.Item label="-- Kies een jaar --" value={-1} key="" enabled={false} style={styles.pickerItem}/>
                            {availableYears.map((year) => { return (<Picker.Item label={year} value={year} key={year} style={styles.pickerItem} />) })}
                    </Picker></>

                    <><Text style={styles.subheading}>Hoogte</Text>
                    <Picker
                        enabled={availableHeights.length > 0}
                        style={styles.picker}
                        selectedValue={selectedHeight}
                        onValueChange={(itemValue, itemIndex) => {
                                setSelectedHeight(itemValue);
                                clearPickers(4);
                            }
                        }>
                            <Picker.Item label="-- Kies een hoogte --" value={-1} key="" enabled={false} style={styles.pickerItem} />
                            {availableHeights.map((height) => { return (<Picker.Item label={height} value={height} key={height} style={styles.pickerItem} />) })}
                    </Picker></>

                    <><Text style={styles.subheading}>Lengte</Text>
                    <Picker
                        enabled={availableLengths.length > 0}
                        style={styles.picker}
                        selectedValue={selectedLength}
                        onValueChange={(itemValue, itemIndex) => {
                                setSelectedLength(itemValue);
                                clearPickers(5);
                            }
                        }>
                            <Picker.Item label="-- Kies een lengte --" value={-1} key="" enabled={false} style={styles.pickerItem} />
                            {availableLengths.map((length) => { return (<Picker.Item label={length} value={length} key={length} style={styles.pickerItem} />) })}
                    </Picker></>

                    <><Text style={styles.subheading}>Extra info</Text>
                    <Picker
                        enabled={availableInfos.length > 0}
                        style={styles.picker}
                        selectedValue={selectedInfo}
                        onValueChange={(itemValue, itemIndex) => {
                                setSelectedInfo(itemValue);
                            }
                        }>
                            <Picker.Item label="-- Kies extra info --" value={-1} key="" enabled={false} style={styles.pickerItem}/>
                            {availableInfos.map((info) => { return (<Picker.Item label={info} value={info} key={info} style={styles.pickerItem}/>) })}
                    </Picker></>
            </View>
            <View style={styles.footer}>
                <Button enabled={validPickerState()} label="Zoek" theme="primary" onPress={() => onPress(evaluateSearch())} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        minWidth: 400,
        minHeight: 700,
        width: "100%",
        height: "100%",
        maxWidth: 800,
        borderRadius: 6,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        margin: 20,
    },
    heading: {
        fontFamily: "Roboto_900Black",
        color: "#3E5F42",
        fontSize: 45,
        textAlign: "center",
    },
    subheading: {
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
        color: "#3E5F42",
        marginBottom: 5,
    },
    header: {
        minHeight: 50,
        paddingBottom: 10,
        //backgroundColor: "lightcoral",
    },
    body: {
        flex: 4,
        //paddingHorizontal: 10,
        backgroundColor: "#eff6f3",
        borderRadius: 6,
        padding: 15,
        //backgroundColor: "lightblue",
    },
    footer: {
        flex: 1/2,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 10,
        //backgroundColor: "lightgreen",
    },
    picker: {
        marginBottom: 10,
        height: 54,
        // Appies to the picker on web
        fontSize: 16,
        fontFamily: "Roboto_400Regular",
        backgroundColor: "#eff6f3",
        borderColor: "#eff6f3",
    },
    pickerItem: {
        // Applies to the picker on android
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
    },
});