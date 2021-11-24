import React from 'react';
import { LogBox, StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CardViewIndex from '../cards/CardViewIndex';

LogBox.ignoreLogs(['Remote debugger']);

class Index extends React.Component{


	render(){
		const { navigation } = this.props;
		return(
			<View style={styles.body} >
				<View style={styles.content} >
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	body: {
		marginTop: 20,
		backgroundColor: '#DCDFDA'
	},
	titre_menu: {
		backgroundColor: '#0E4452',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 12,
		paddingVertical: 10
	},
	nom_proj: {
		color: "white", 
		fontSize: 22, 
		marginRight: 40,
		fontWeight: 'bold'
	}
})


 export default Index;