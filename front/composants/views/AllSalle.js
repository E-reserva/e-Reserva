import React from 'react';
import { StyleSheet, Button, View, Text, FlatList, Image } from 'react-native';
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
	container: {
		backgroundColor: '#DCDFDA',
		marginTop: 20,
		marginBottom: 8
	},
	titre: {
		fontSize : 20,
		marginRight: 40,
		color: '#F0F0F0',
		fontWeight: 'bold'
	}
})

export default AllSalle;