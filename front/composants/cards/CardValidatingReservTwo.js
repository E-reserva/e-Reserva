import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Pressable } from 'react-native'
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Salle from '../../data/dataSalle';
import CardPickerDateTime from './CardPickerDateTime';

class CardValidatingReservTwo extends React.Component{
  constructor(props){
    super(props);
    this.state = { salle: [] } 
    }

  render(){
    return (
        <View style={styles.container}>
          <Pressable onPress={() => {this.props.navigation.navigate("Faites votre choix")}}>
            <Icon name="arrow-left" size={30} color='#FF8038' style={styles.bout_retour} />
          </Pressable>
          <View style={styles.content} >
            <Text style={styles.titre} >Remplir les informations [2/2]</Text>
            <View  style={styles.journee} >
                <Text style={styles.label} >Choisissez la date et le jour: </Text>
                <View style={styles.choix}>
                  <CardPickerDateTime />
                </View>
            </View>
          </View>
          <TouchableOpacity style={styles.bouton} >
                <Link to={{ screen: 'Connexion'}} style={styles.txt_bouton} >
                    <Text >Continuer  >>></Text>
                </Link>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E4452',
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  bout_retour: {
    marginRight: 320
  },
  choix: {
    flex: 1,
    marginVertical: 100
  },
  titre: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  content: {
    height: 450,
    borderWidth: 2,
    borderColor: '#FF8038',
    marginVertical: 10
  },
  journee: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5
  },
  label: {
    color: '#FF8038',
    fontSize: 20,
    paddingVertical: 8,
  },
  bouton: {
    paddingVertical: 15,
    width: 190,
    borderRadius: 20, 
    backgroundColor: '#FF8038'
  },
  txt_bouton: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0E4452'
  }
})

export default CardValidatingReservTwo;