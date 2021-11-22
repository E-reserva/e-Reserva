import React from 'react'
import { Pressable, View, Text, StyleSheet, Image } from 'react-native'


class CardSalle extends React.Component {
	render(){
		const salle = this.props.salle;
		const reserve = salle.reserve;
		return(
			<View style={styles.container}>
				<Image 
					style={styles.img_baniere}
					source={require("../../assets/img/salle/salle1.jpg")}
				/>

				<View style={styles.description}>
					<View style={styles.head_desc} >
						<Text style={styles.titre}>
							 S{salle.nom}
						</Text>
						<Text style={styles.txt_reserv} >
							{reserve ? 'reservé' : ' '}
						</Text>
					</View>
					<Text style={styles.capacite}>
						Capacite : {salle.capacite}
					</Text>

					<View style={styles.cont_boutton}>
						<Pressable style={styles.bouton} onPress={() => {alert('Voici ses details')}}>
							<Text style={styles.txt_bouton}>Détails</Text>
						</Pressable>
						<Pressable style={styles.bouton} onPress={() => {alert('vous avez reserver cette salle')}}>
							<Text style={styles.txt_bouton}>Réserver</Text>
						</Pressable>
					</View>

				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 400,
		flexDirection: 'column',
		marginHorizontal: 10,
		marginVertical: 8,
	},
	img_baniere: {
		width: 346,
		resizeMode: "cover",
		flex: 2,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	description: {
		backgroundColor: '#0E4452',
		paddingVertical: 10,
		paddingHorizontal: 5,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10
	},
	head_desc: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	titre: {
		fontSize: 24,
		marginLeft: 20,
		color: 'white'
	},
	capacite: {
		fontSize: 16,
		marginLeft: 20,
		color: 'white'
	},
	cont_boutton: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	bouton: {
		borderWidth: 1,
		paddingVertical: 10,
		width: 130,
		borderRadius: 20, 
		borderColor: '#FF8038'
	},
	txt_bouton: {
		textAlign: 'center',
		fontSize: 18,
		color: '#FF8038'
	},
	txt_reserv: {
		fontSize: 20,
		marginRight: 30,
		marginTop: 6,
		color: '#FF8038'
	}
});

export default CardSalle;