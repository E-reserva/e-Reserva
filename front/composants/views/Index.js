import React from 'react';
import { LogBox, StyleSheet, TouchableOpacity, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';

//carroussel
import CardCarousselSalle from '../cards/carroussel/CardCarousselSalle';

//data for carroussel
import SalleProf from '../../data/forCaroussel/dataSalleProf';
import SalleExt from '../../data/forCaroussel/dataSalleExt';
import SalleEtud from '../../data/forCaroussel/dataSalleEtud';

LogBox.ignoreLogs(['Remote debugger']);

class Index extends React.Component{

	constructor(props){
		super(props)
		this.state = { 
			salleEtud: SalleEtud,
			salleExt: SalleExt,
			salleProf: SalleProf
		}
	}
				
	render(){
		const idSallProf = this.state.salleProf.id;
		const { navigation } = this.props;
		return(
			<ScrollView style={styles.body} >
				<View style={styles.content} >
					<View style={styles.s_disponible} >
						<View style={styles.cible} >
							<View style={styles.entete} >
								<Text style={styles.txt_cible} >
									Pour les professeurs
								</Text>
							</View>
							<Text style={styles.txt_statut} >
								Salle disponible
							</Text>
						</View>
						<View style={styles.carrousel} >
				 			<CardCarousselSalle salle={this.state.salleProf} />
						</View>
					</View>

					<View style={styles.s_reserve} >
						<View style={styles.titre_reserve} >
							<Text style={styles.txt_statut} >
								Salle déjà prise pour aujourd'hui
							</Text>
						</View>
						<View style={styles.carrousel} >
							<CardCarousselSalle salle={this.state.salleProf} />
						</View>
					</View>
				</View>


				<View style={styles.content} >
					<View style={styles.s_disponible} >
						<View style={styles.cible} >
							<View style={styles.entete} >
								<Text style={styles.txt_cible} >
									Pour les étudiants
								</Text>
							</View>
							<Text style={styles.txt_statut} >
								Salle libre
							</Text>
						</View>
						<View style={styles.carrousel} >
				 			<CardCarousselSalle salle={this.state.salleEtud} />
						</View>
					</View>
				</View>


				<View style={styles.content} >
					<View style={styles.s_disponible} >
						<View style={styles.cible} >
							<View style={styles.entete} >
								<Text style={styles.txt_cible} >
									Pour les autres
								</Text>
							</View>
							<Text style={styles.txt_statut} >
								Salle disponible
							</Text>
						</View>
						<View style={styles.carrousel} >
				 			<CardCarousselSalle salle={this.state.salleExt} />
						</View>
					</View>

					<View style={styles.s_reserve} >
						<View style={styles.titre_reserve} >
							<Text style={styles.txt_statut} >
								Salle déjà prise pour aujourd'hui
							</Text>
						</View>
						<View style={styles.carrousel} >
							<CardCarousselSalle salle={this.state.salleExt} />
						</View>
					</View>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	body: {
		marginTop: 20,
		flex: 1,
		flexDirection: 'column'
	},
	content: {
		flex: 1,
		flexDirection: 'column', 
		marginBottom: 15
	}, 
	s_disponible: {
		flex: 1, 
		flexDirection: 'column', 
		marginBottom: 10
	},
	s_reserve: {
		flex: 1
	},
	cible: {
		marginHorizontal: 15
	},
	titre_dispo: {
		flexDirection: 'column'
	},
	entete: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	titre_reserve: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 15
	},
	txt_cible: {
		fontSize: 22, 
		color: '#0E4452',
		fontWeight: 'bold'
	},
	txt_statut: {
		fontSize: 16,
	},
	carrousel: {

	}
})


 export default Index;