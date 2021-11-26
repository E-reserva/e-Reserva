import React from 'react'
import { StyleSheet, View, TouchableOpacity, Pressable, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import Salle from '../../data/dataSalle';

class CardDetailSalle extends React.Component{
  constructor(props){
    super(props);
    this.state = { salle: Salle } 
    }

  
  render(){
    const { id } = this.props.route.params;
    const salleFromState = this.state.salle;
    const salle = salleFromState[`${id - 1}`]
    const disponible = salle.reserve;

     const disponibilite = () =>{
      if(disponible){
        return(
          <View  style={styles.bouton} >
              <Pressable onPress={() => {this.props.navigation.navigate('Faites votre choix')}} >
                <Text style={styles.txt_bouton} >Réserver cette salle</Text>
              </Pressable>
          </View>
        )
      } else{
        return(
          <View style={styles.cont_bouton}>
              <View  style={styles.bouton} >
                <Text style={styles.txt_bouton} >Voir les horaires libres</Text>
              </View>
            <View  style={styles.bouton} >
              <Pressable onPress={() => {this.props.navigation.navigate('Faites votre choix', { ext: true })}} >
                <Text style={styles.txt_bouton} >Réserver pour autre jour</Text>
              </Pressable>
            </View>
          </View>
        )
      }
    };

    return (
        <View style={styles.container}>
          <Pressable onPress={() => {this.props.navigation.navigate("Listes des salles")}}>
            <Icon name="arrow-left" size={30} color='#FF8038' style={styles.bout_retour} />
          </Pressable>
             <View style={styles.content} >
                  <Text style={styles.cle} >
                    Numéro de la salle : <Text style={styles.valeur} >{salle.nom}</Text>
                 </Text>
                 <Text style={styles.cle} > 
                   Capacité de la salle : <Text style={styles.valeur} >{salle.capacite} personnes</Text>
                 </Text>
                 <Text style={styles.cle} >
                   Matériel : <Text style={styles.valeur} >Projecteur, Tableau, Chaise, Table</Text>
                 </Text>
                 <Text style={styles.cle} >
                   Disponibilité (aujourd'hui): <Text style={styles.valeur} >{disponible ? "encore disponible" : "déjà réservé pour aujourd'hui"}</Text>
                 </Text>
            </View>
            <TouchableOpacity>
              {disponibilite()}
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bout_retour: {
    marginRight: 320,
    marginTop: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0E4452',
    width: '100%', 
    alignItems: 'center'
  },
  content: {
    marginHorizontal: 30,
    marginVertical: 60,
    height: 300,
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FF8038'
  },
  cont_bouton: {
    flexDirection: 'row'
  },
  cle: {
    color: '#FF8038',
    fontSize: 20,
    paddingVertical: 8,
  },
  valeur: {
    color: 'white',
    fontSize: 20, 
    paddingVertical: 8,
  },
  bouton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    width: 140,
    borderRadius: 16, 
    backgroundColor: '#FF8038',
    borderColor: '#FF8038'
  },
  txt_bouton: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0E4452'
  }
})

export default CardDetailSalle;