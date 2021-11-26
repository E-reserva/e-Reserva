import React from 'react';
import { StyleSheet, Button, View, Text, FlatList, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Salle from '../../data/dataSalle';
import CardSalle from '../cards/CardSalle';


class AllSalle extends React.Component {

	constructor(props){
		super(props)
		this.state = { salle: Salle}
	}

	render (){
		return(
		    <View style={styles.container}>
		    	<Pressable onPress={() => {this.props.navigation.navigate("e-Resera")}}>
		            <Icon name="arrow-left" size={30} color='#0E4452' style={styles.bout_retour} />
		        </Pressable>
		        <FlatList 
		           data ={this.state.salle}
		           keyExtractor={(item) => item.id.toString()}
		           renderItem={({item}) => <CardSalle  salle={item} />}
		        />
		    </View>
		)
	}
}

const styles = StyleSheet.create({
	bout_retour: {
		marginHorizontal: 10,
    	marginVertical: 10
  	},
	container: {
		backgroundColor: '#DCDFDA',
		marginBottom: 60
	}
})

export default AllSalle;