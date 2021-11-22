import React from 'react';
import { StyleSheet, Button, View, Text, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-platform-searchbar';

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
		   		<View style={styles.nav_head}>
		   			<Icon name="arrow-left" size={27} color="#FF8038" />
		   			<Text style={styles.titre}>
			    		Listes des salles
			    	</Text>
			    	<Icon name="search" size={30} color="#FF8038" onPress= {() => {
			    		
			    	}} />
		   		</View>
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
		marginBottom: 118
	},
	titre: {
		fontSize : 20,
		marginRight: 40,
		color: '#F0F0F0',
		fontWeight: 'bold'
	},
	nav_head:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 15,
		backgroundColor: '#0E4452'	
	}
})

export default AllSalle;