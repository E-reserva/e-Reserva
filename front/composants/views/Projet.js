import React from 'react';
import {  StyleSheet, View, Text, SafeAreaView, ScrollView, Platform } from 'react-native';


import CardForProjet from '../cards/CardForProjet';

class Projet extends React.Component{
    render(){
        const description = "C'est un projet qui aide les gens à suivre les évolutions des projets en cours ";
        const condition = "Pour l'utiliser il faut installer Nodejs et expo-cli ainsi utiliser certaines commandes";
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <View style={styles.logo}>

                        </View>
                        <View style={styles.nom}>
                            <Text style={styles.txt_nom}>
                                Nom du projet
                            </Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <CardForProjet titre="Description" iconName="question" content={description} />
                        <CardForProjet titre="Condition d'utilisation" iconName="check-square" content={condition} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const couleur = Platform.OS === 'ios' ? '#007AFF' : '#2196F3';
const styles = StyleSheet.create({
    container: {
        backgroundColor: couleur,
        height: 605,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    head:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    logo: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        height: 110,
        width: 110,
        marginLeft: 15
    },
    nom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    }, 
    txt_nom: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Projet;