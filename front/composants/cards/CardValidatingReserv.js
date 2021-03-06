import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';

import Salle from '../../data/dataSalle';
import CardRadioButton from './CardRadioButton';
import CardPickerChaise from './CardPickerChaise';

class CardValidatingReserv extends React.Component{
  constructor(props){
    super(props);
    this.state = { salle: [] } 
    }

  render(){
    const CHOIX = [
      {
        key: 'nuit',
        text: 'Nuit',
      },
      {
        key: 'jour',
        text: 'Jour',
      },
    ];
    // const salleFromState = this.state.salle;
    // const salle = salleFromState[`${id - 1}`]
    // const disponible = salle.reserve;

    return (
        <View style={styles.container}>
          <Pressable onPress={() => {this.props.navigation.navigate("Listes des salles")}}>
            <Icon name="arrow-left" size={30} color='#FF8038' style={styles.bout_retour} />
          </Pressable>
          <View style={styles.content} >
            <Text style={styles.titre} >Remplir les informations [1/2]</Text>
            <View  style={styles.journee} >
                <Text style={styles.label} >Faites votre choix: </Text>
                <View style={styles.choix}>
                  <CardRadioButton PROP={CHOIX} />
                </View>
            </View>
            <View  style={styles.place} >
              <Text style={styles.label} >Choisissez le numéro de votre chaise: </Text>
              <View style={styles.chaise} >
                 <CardPickerChaise />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.bouton} >
            <Link to={{ screen: 'Faites votre choix suite'}} style={styles.txt_bouton} >
                    <Text >Continuer  >>></Text>
                </Link>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bout_retour: {
    marginRight: 320,
    marginBottom: 20
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0E4452',
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  choix: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titre: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  content: {
    height: 440,
    borderWidth: 2,
    borderColor: '#FF8038',
    marginBottom: 10
  },
  journee: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5
  },
  place: {
    flex: 1,
    paddingHorizontal: 10
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

export default CardValidatingReserv;