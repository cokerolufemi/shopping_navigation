import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';



const Shopping = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.SuccessfulContainer}>
        <Text style={styles.SuccessfulText}>ONLINE SHOPPING</Text>
      </View>
      <View>
        <Text style={styles.mainText}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industy's 
            standard dummy text ever since the 1500s, when an unknown printer too
        </Text>
      </View>
      <View>
        <Image style={styles.Image} source={require("../../assets/shopping.jpg")} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() =>{
          navigation.navigate("AddToCart")
        }} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.buttonContainerNext}>
        <TouchableOpacity style={styles.buttonNext1}>
          <Text style={styles.buttonnextText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonnextText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext3}>
          <Text style={styles.buttonnextText}>3</Text>
        </TouchableOpacity>

        <View ><Text onPress={() =>{
          navigation.navigate("AddToCart")
        }} style={styles.privious}>Skip</Text></View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: "#fffaf0",
  },

  Image: {
    width: 300,
    height: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 15,

  },

  SuccessfulContainer: {
    marginTop: 20,
    marginVertical: 5,
    marginBottom: 2,
    marginHorizontal: 20
  },

  LoginHeader: {
    fontSize: 20,
    color: "#5082d9",
    fontWeight: "bold",
    height: 40,
  },

  buttonContainer: {
    width: 150,
    height: 50,
    backgroundColor: "#6a5acd",
    justifyContent: "center",
    borderRadius: 30,
    marginVertical: 15,
    alignSelf: "center",
    marginHorizontal:50
  },

  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },

  SuccessfulText: {
    fontSize: 26,
    fontWeight: "bold",

  },

  mainText: {
    fontSize: 16,
    fontWeight: "normal",
    marginHorizontal: 20

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
    marginVertical: 10,
    marginHorizontal: 20

  },

  buttonNext: {
    width: 20,
    height: 14,
    backgroundColor: "#a9a9a9",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5
  },

  buttonNext1: {
    width: 20,
    height: 14,
    backgroundColor: "#6a5acd",
    borderRadius: 20,
    marginVertical: 5,
    marginLeft: 120
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
});


export default Shopping