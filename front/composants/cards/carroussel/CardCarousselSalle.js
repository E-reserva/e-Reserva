import * as React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from '@react-navigation/native';

import Carousel from 'react-native-snap-carousel';

export default class CardCarousselSalle extends React.Component {

 
    constructor(props){
        super(props);
        this.salle = this.props.salle;
        this.state = {
          activeIndex:0,
          salle: this.salle
      }
    }

    _renderItem({item,index}){
        return (
            <TouchableOpacity>
                <Link to={{ screen: 'Apropos de la salle', params: {id: `${item.id}`} }}  >
                  <View style={styles.content}>
                    <Image 
                      style={styles.img_salle}
                      source={require("../../../assets/img/salle/salle1.jpg")}
                    />
                    <Text style={styles.titre}>Salle {item.nom}</Text>
                  </View>
                </Link>
            </TouchableOpacity>
        )
    }

    render() {
        return (
          <SafeAreaView style={styles.safearea}>
            <View style={styles.caroussel}>
                <Carousel
                  layout={"default"}
                  ref={ref => this._carousel = ref}
                  data={this.state.salle}
                  sliderWidth={100}
                  itemWidth={200}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  content: {
    borderRadius: 10,
    height: 250,
  },
  safearea: {
    flex: 1, 
    paddingTop: 10
  }, 
  caroussel: { 
    width: '100%', 
    flexDirection:'row', 
    justifyContent: 'center',
    paddingVertical: 10, 
    marginHorizontal: 10
  },
  titre: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0E4452'
  }, 
  img_salle: {
    width: 200,
    resizeMode: "cover",
    flex: 2,
    borderRadius: 10
  }
})