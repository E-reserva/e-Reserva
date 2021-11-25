import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

class CardRadioButton extends React.Component {
	state = {
		value: null,
	};
	render() {
    const { PROP } = this.props;
    const { value } = this.state;

    return (
        <View>
            {PROP.map(res => {
                return (
                    <View key={res.key} style={styles.container}>
                        <Text style={styles.radioText}>{res.text}</Text>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                this.setState({
                                    value: res.key,
                                });
                            }}>
                              {value === res.key && <View style={styles.selectedRb} />}
                        </TouchableOpacity>
                    </View>
                );
            })}
            <Text style={styles.result} > Votre choix :  {this.state.value} </Text>
        </View>
    );
	}
}

const styles = StyleSheet.create({
	container: {
        marginBottom: 20,
        flexDirection: 'row',
		justifyContent: 'space-between'
	},
    radioText: {
        marginRight: 20,
        fontSize: 20,
        color: '#FF8038',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#FF8038',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#FF8038',
    },
    result: {
        marginTop: 15,
        color: 'white',
        fontWeight: 'bold'
    },
});

export default CardRadioButton;