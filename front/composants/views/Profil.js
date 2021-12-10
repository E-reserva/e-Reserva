import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, Pressable, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profil extends React.Component{
    render(){
        return(
                <ScrollView>
                    <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <View style={styles.body}>
                        <View style={styles.nom}>
                            <Text style={styles.txt_nom}>Dama RKTVO</Text>
                        </View>
                        <View style={styles.description}>
                            <View style={styles.mail}>
                                <Icon 
                                    name="envelope"
                                    size={40}
                                    color={couleur}
                                />
                                <View style={styles.content}>
                                    <Text style={styles.title}>Email</Text>
                                    <Text style={styles.valeur}>diamondrap20.aps1b@gmail.com</Text>
                                </View>
                            </View>
                            <View style={styles.numero}>
                                <Icon 
                                    name="phone"
                                    size={50}
                                    color={couleur}
                                />
                                <View style={styles.content}>
                                    <Text style={styles.title}>Numéro téléphone</Text>
                                    <Text style={styles.valeur}>+261 34 56 484 25</Text>
                                </View>
                            </View>
                            <View style={styles.about}> 
                                <Icon 
                                    name="address-card"
                                    size={35}
                                    color={couleur}
                                    style={styles.icone}
                                />
                                <View style={styles.content}>
                                    <Text style={styles.title}>A propos de moi:</Text>
                                    <Text style={styles.valeur}>Je suis un garçon motivé et blablablblblbldkdkd...
                                        Et je suis prêt à faire tout votre désir et surtout surtout je ne sais plus dire parce
                                        parce que mon Lorem ne marche pas je sais pas pourquoi du coup j'improvise pour remplir
                                        du texte avec ce qui passe dans ma tête je suis déolé mais je peux rien y faire.
                                        Et je suis prêt à faire tout votre désir et surtout surtout je ne sais plus dire parce
                                        parce que mon Lorem ne marche pas je sais pas pourquoi du coup j'improvise pour remplir
                                        du texte avec ce qui passe dans ma tête je suis déolé mais j'y peux rien.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
        )
    }
}
const couleur = Platform.OS === 'ios' ? '#007AFF' : '#2196F3';
const styles = StyleSheet.create({
      header:{
        backgroundColor: couleur,
        height:120,
      },
      avatar: {
        width: 160,
        height: 160,
        borderRadius: 83,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:30
      },
      body: {
          position: 'relative',
          top: 70,
          marginHorizontal: 20, 
          width: '85%'
      },
      nom :{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
      },
      txt_nom :{
        fontSize: 20,
        fontWeight: 'bold',
        color: couleur
      },
      description: {
          display: 'flex',
          flexDirection: 'column',
          height: 500, 
          marginVertical: 10
      },
      mail: {
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center'
      },
      numero: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
      about: {
        display: 'flex',
        flexDirection: 'row',
        flex: 4, 
        marginBottom: 10
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15, 
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        width: '85%'
    },
    icone: {
        marginTop: 90
    }, 
    title: {
        fontSize: 16,
        color: couleur,
        marginBottom: 5
    },
    valeur: {
        textAlign: 'left',
        marginBottom: 6
    }

});

export default Profil;