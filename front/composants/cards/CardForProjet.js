import React from "react";
import {  StyleSheet, View, Text, SafeAreaView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CardForProjet extends React.Component{
    render(){
        const { titre, content, iconName } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.titre}>
                    <Icon 
                        name={iconName}
                        size={30}
                        color={couleur}
                    />
                    <Text style={styles.txt_titre}>
                        {titre}
                    </Text>
                </View>
                <View style={styles.contenu}>
                    <ScrollView>
                        <Text style={styles.txt_contenu}>
                            {content}
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const couleur = Platform.OS === 'ios' ? '#007AFF' : '#2196F3';
const styles= StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        width: '83%',
        height: 200,
        marginHorizontal: 29,
        marginVertical: 15,
        padding: 15,
        borderRadius: 15
    },
    titre:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    txt_titre: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold', 
        color: couleur,
        marginLeft: 8
    }, 
    txt_contenu: {
        fontSize: 15, 
    },
    contenu :{
        height: 140
    }

});

export default CardForProjet;