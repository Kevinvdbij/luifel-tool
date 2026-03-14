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
import { getEanBySku, getLuifelData } from './Maps';

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

    // Create variables for the pickers
    const [selectedBrand, setSelectedBrand] = useState("-1");
    const [selectedModel, setSelectedModel] = useState("-1");
    const [selectedYear, setSelectedYear] = useState("-1");
    const [selectedHeight, setSelectedHeight] = useState("-1");
    const [selectedLength, setSelectedLength] = useState("-1");
    const [selectedInfo, setSelectedInfo] = useState("-1");

    let luifelData = getLuifelData();

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
            resultProducts.push(getEanBySku(sku));
        });

        return resultProducts;
    }

    /** Check whether the current state of all the pickers is valid */
    function hasValidPickerState(): boolean {
        return selectedBrand !== "-1" 
        && selectedModel !== "-1" 
        && selectedYear !== "-1" 
        && selectedHeight !== "-1" 
        && selectedLength !== "-1" 
        && selectedInfo !== "-1";
    }

    if (!fontsLoaded) {
        return null;
    } return (
        <View style={styles.container}>
            <View>
                <View style={styles.pickerBody}>

                    <Text style={styles.subheading}>Merk</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedBrand}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedBrand(itemValue);
                            clearPickers(1);
                        }}>
                            {selectedBrand == "-1" ? <Picker.Item label="-- Kies een merk --" value={"-1"} key="" style={styles.pickerItemDisabled} /> : null }
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
                            {selectedModel == "-1" ? <Picker.Item label="-- Kies een model --" value={"-1"} key="" style={styles.pickerItemDisabled} /> : null }
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
                                {selectedYear == "-1" ? <Picker.Item label="-- Kies een jaar --" value={"-1"} key="" style={styles.pickerItemDisabled}/> : null}
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
                                {selectedHeight == "-1" ? <Picker.Item label="-- Kies een hoogte --" value={"-1"} key="" style={styles.pickerItemDisabled} />: null }
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
                                {selectedLength == "-1" ? <Picker.Item label="-- Kies een lengte --" value={"-1"} key="" style={styles.pickerItemDisabled} /> : null}
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
                                {selectedInfo == "-1" ? <Picker.Item label="-- Kies extra info --" value={"-1"} key="" style={styles.pickerItemDisabled}/> : null}
                                {availableInfos.map((info) => { return (<Picker.Item label={info} value={info} key={info} style={styles.pickerItem}/>) })}
                        </Picker></>
                </View>
                <View style={styles.footer}>
                    <Button enabled={hasValidPickerState()} label="Zoek" theme="primary" onPress={() => onPress(evaluateSearch())} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    },
    pickerBody: {
        flex: 1,
        backgroundColor: "#eff6f3",
        borderRadius: 6,
        padding: 15,
        paddingBottom: 0,
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
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
    pickerItemDisabled: {
        // Applies to the picker on android
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
        color:"#00000041",
    },
});