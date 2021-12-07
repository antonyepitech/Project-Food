import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";


class Home extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> PETIT TEST EN PLUS §§§§§ Ainsi parle le Seigneur l’Éternel : Parce que les Philistins se sont livrés à la vengeance, et qu’ils se sont vengés à outrance, le mépris dans l’âme, pour exterminer, haine éternelle, à cause de cela, ainsi parle le Seigneur l’Éternel : Je vais étendre ma main contre les Philistins, j’écraserai les Crétois et détruirai le reste qui habite le rivage de la mer ; et j’exercerai sur eux de grandes vengeances, les châtiant avec fureur, et ils sauront que je suis l’Éternel quand je leur ferai sentir ma vengeance. J’abattrai alors le bras d’une terrible colère, d’une vengeance furieuse et effrayante sur les hordes impies qui pourchassent et réduisent à néant les brebis de Dieu. Et tu connaîtras pourquoi mon nom est l’éternel quand sur toi s’abattra la vengeance du Tout-Puissant </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        flex: 1,
        height: 260,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer:{
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'space-between',
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 5,
        flexWrap: "wrap",
    },

    button: {
        borderWidth: 2,
        height: 100,
        width: 170,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        color: "black",
    },
})

export default Home;