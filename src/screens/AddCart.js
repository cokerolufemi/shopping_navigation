import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity
       } from 'react-native';



const AddCart = ({route,navigation}) => {
  // const {newProduct} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.SuccessfulContainer}>
        <Text style={styles.SuccessfulText}>New Products</Text>
      </View>
      <View>
        <Text style={styles.mainText}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industy's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley
        </Text>
      </View>
      <View>
        <Image style={styles.Image} source={require("../../assets/addcart.jpg")} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() =>{
          navigation.navigate("Payment")
        }} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainerNext}>
        <View ><Text  onPress={() =>{
          navigation.navigate("OnlineShopping")
        }} style={styles.privious}>Previous</Text></View>

        <TouchableOpacity style={styles.buttonNext1}>
          <Text style={styles.buttonnextText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonnextText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext3}>
          <Text style={styles.buttonnextText}>3</Text>
        </TouchableOpacity>
        <View><Text onPress={() =>{
          navigation.navigate("Payment")
        }} style={styles.privious1}>Skip</Text></View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: "#fffaf0",
    marginHorizontal: 0
  },

  Image: {
    width: 300,
    height: 300,
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: "center",
    borderRadius: 15,

  },

  SuccessfulContainer: {
    marginTop: 5,
    marginHorizontal: 20,
  },

  LoginHeader: {
    fontSize: 20,
    color: "#5082d9",
    fontWeight: "bold",
    height: 70,
  },

  buttonContainer: {
    width: 150,
    height: 50,
    backgroundColor: "#6a5acd",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginVertical: 5,
  },

  buttonText: {
    alignSelf: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },

  SuccessfulText: {
    fontSize: 26,
    fontWeight: "bold",

  },

  mainText: {
    fontSize: 16.5,
    fontWeight: "normal",
    marginHorizontal: 10

  },

  mainTextContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },

  buttonContainerNext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 5

  },

  buttonNext: {
    width: 20,
    height: 14,
    backgroundColor: "#6a5acd",
    borderRadius: 20,
    marginVertical: 50,
    marginHorizontal: 5,
  },

  buttonNext1: {
    width: 20,
    height: 14,
    backgroundColor: "#a9a9a9",
    borderRadius: 20,
    marginVertical: 50,
    marginHorizontal: 5,
    marginLeft: 70
  },

  buttonNext3: {
    width: 25,
    height: 14,
    backgroundColor: "#a9a9a9",
    borderRadius: 20,
    marginVertical: 5,
    marginRight: 80
  },

  buttonnextText: {
    fontSize: 8,
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },

  privious: {
    marginLeft: 5,
    fontSize: 18,
    textAlign: "left"
  },

  privious1: {
    marginLeft: 1,
    fontSize: 18,
    textAlign: "right"
  },
});

export default AddCart;