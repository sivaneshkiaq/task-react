import { Button } from "@react-navigation/elements";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const img = require("../../assets/images/img4.jpg");
export default function Contact() {
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.img}>
      <View style={styles.main}>
        <Text style={styles.text}>Contact</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.message}
          placeholder="Message"
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    color: "white",
    borderRadius: 10,
    padding: 12,

    marginBottom: 20,
    textAlignVertical: "top",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  button: {
    padding: 15,
    borderWidth: 1,
    width: 150,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "orange",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
  },

  img: {
    flex: 1,
    objectFit: "cover",
  },
  message: {
    height: 120,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    textAlignVertical: "top",
  },
});
