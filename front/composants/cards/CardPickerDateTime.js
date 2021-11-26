import React, { useState } from 'react'
import { View, Button, StyleSheet, Text, Pressable } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'

const CardPickerDateTime = () => {

  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showDate, setShowDate] = useState("")
  const [showMonth, setShowMonth] = useState("")
  const [showYear, setShowYear] = useState("")

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    setShowDate(date.getDate());
    setShowMonth(date.getMonth());
    setShowYear(date.getFullYear());
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const colorOptions = {
    confirmButtonColor: '#FF8038',
    headerColor : '#FF8038',
    weekDaysColor: '#FF8038',
    selectedDateBackgroundColor: '#0E4452'
  }
  const styles = StyleSheet.create({
    result: {
        marginTop: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    bouton: {
      borderWidth: 1,
      backgroundColor: '#FF8038',
      padding: 15,
      width: 200,
      marginHorizontal: 30
    }, 
    txt_bouton: {
      textAlign: 'center',
      color: 'white'
    }
  })

  return (
    <View>
      <Pressable onPress={openDatePicker} style={styles.bouton} >
        <Text style={styles.txt_bouton} >Cliquez ici</Text>
      </Pressable>
      <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        colorOptions={colorOptions}
      />
      <Text style={styles.result} > Votre avez choisi le :  {`${showDate} / ${showMonth} / ${showYear}`}</Text>
    </View>
)}
export default CardPickerDateTime;