import React from 'react';
import { Text, View, StyleSheet, TextInput,  TouchableOpacity, Pressable, Modal, Linking } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import CardModal from '../cards/CardModal'

class LoginEsti extends React.Component{

	state = {
	    modalVisible: false
	 };

	 setModalVisible = (visible) => {
	    this.setState({ modalVisible: visible });
	 }

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.centeredView}>
			        <Modal
			          animationType="slide"
			          transparent={true}
			          visible={this.state.modalVisible}
			        >
			          <View style={styles.centeredView}>
			            <View style={styles.modalView}>
			              <Icon name='check' size={30} color='#FF8038' /> 
			              <Text style={styles.modalText}>N'oubliez pas de prendre votre ticket au sécretariat! Merci bien</Text>
			              <Pressable
			                style={[styles.button, styles.buttonClose]}
			                onPress={() => this.setModalVisible(!this.state.modalVisible)}
			              >
			                <Text style={styles.textStyle}>Fermer</Text>
			              </Pressable>
			            </View>
			          </View>
			        </Modal>
		     	</View>



				<Pressable onPress={() => {this.props.navigation.navigate("Faites votre choix suite")}}>
		            <Icon name="arrow-left" size={30} color='#FF8038' style={styles.bout_retour} />
		         </Pressable>
				<View style={styles.icone} >
					<Icon 
						name='users'
						size={160}
						color='#FF8038'
					/>
				</View>
				<View style={styles.cont_input} >
					<TextInput 
						style={styles.input_log}
						placeholder="Entrer votre mail ESTI..."
					/>
					<TextInput 
						style={styles.input_mdp}
						placeholder="Entrer votre mot de passe..."
						secureTextEntry={true}
					/>
					<Pressable><Text style={{color: '#FF8038', textAlign: 'right', marginBottom: 20 }} >Forgot your password?</Text></Pressable>
				</View>
				<Pressable style={styles.bouton} onPress={() => this.setModalVisible(true)} >
						<Text style={styles.txt_bouton} >CONNEXION</Text>
				</Pressable>
				<Text style={{color: 'white', fontSize: 24}} >ou</Text>
				<Pressable style={styles.mail} onPress={() => Linking.openURL('mailto:miranto.ndriantiana@esti.mg?subject="Demande de salle"') }
      						title="support@example.com" >
					<Icon name='envelope' size={30} color='#FF8038' />
				</Pressable>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	bout_retour: {
    marginRight: 320,
    marginBottom: 10
  },
	container: {
		backgroundColor: '#0E4452',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		paddingBottom: 40
	},
	icone: {
		paddingBottom: 30
	},
	cont_passforg: {
		paddingLeft: 130
	},
	input_log: {
		borderWidth : 1,
		borderColor: 'white',
		borderRadius: 35,
		backgroundColor: 'white',
		paddingVertical: 20,
		paddingHorizontal: 16,
		marginBottom: 20
	},
	input_mdp:{
		borderWidth : 1,
		borderColor: 'white',
		borderRadius: 35,
		backgroundColor: 'white',
		paddingVertical: 20,
		paddingHorizontal: 16
	},
	bouton: {
		paddingVertical: 17,
		paddingHorizontal: 40,
		width: 190,
		borderRadius: 20, 
		backgroundColor: '#FF8038',
	}, 
	mail:{
		marginTop: 10,
		borderWidth: 1,
		borderColor: '#FF8038',
		borderRadius: 70,
		width: 70,
		height: 35, 
		flexDirection: 'row',
		justifyContent : 'center'
	},
	txt_bouton: {
		textAlign: 'center',
		fontSize: 18,
		color: 'white',

	},
	centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#FF8038",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default LoginEsti;	