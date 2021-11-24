import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

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
              <Text style={styles.txt_bouton} >Réserver cette salle</Text>
          </View>
        )
      } else{
        return(
          <View  style={styles.bouton} >
            <Text style={styles.txt_bouton} >Voir les horaires libres</Text>
          </View>
        )
      }
    };

    return (
        <View style={styles.container}>
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0E4452',
    width: '100%', 
    alignItems: 'center'
  },
  content: {
    marginHorizontal: 30,
    marginVertical: 100,
    height: 300,
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FF8038'
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
    width: '100%',
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