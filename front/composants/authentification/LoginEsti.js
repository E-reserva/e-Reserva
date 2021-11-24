import React from 'react';
import { Text, View, StyleSheet, TextInput,  TouchableOpacity, Pressable } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginEsti extends React.Component{
	render(){
		return(
			<View style={styles.container}>
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
				<TouchableOpacity style={styles.bouton}>
						<Text style={styles.txt_bouton} >ENVOYER</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#0E4452',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		paddingBottom: 60
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
		width: 180,
		borderRadius: 20, 
		backgroundColor: '#FF8038',
	}, 
	txt_bouton: {
		textAlign: 'center',
		fontSize: 18,
		color: 'white',

	}
});

export default LoginEsti;	