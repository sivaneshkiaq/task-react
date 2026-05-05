import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Services() {
  const bgImage = require("../../assets/images/img4.jpg");

  const services = [
    {
      title: "DESIGN TRENDS",
      icon: "home",
      description:
        "Latest modern design trends help create stylish and functional spaces.",
    },
    {
      title: "INTERIOR SKETCH",
      icon: "pencil-alt",
      description:
        "We create detailed interior sketches to visualize your dream space.",
    },
    {
      title: "REPAIR WORK",
      icon: "tools",
      description:
        "Professional repair services to maintain and improve your spaces.",
    },
  ];

  return (
    <ImageBackground source={bgImage} style={styles.serviceBg}>
      {services.map((item, i) => (
        <View key={i} style={styles.serviceItem}>
          <FontAwesome5
            name={item.icon}
            size={50}
            color="white"
            style={styles.serviceIcon}
          />
          <Text style={styles.serviceHeader}>{item.title}</Text>
          <Text style={styles.serviceDescription}>{item.description}</Text>
        </View>
      ))}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  serviceBg: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  serviceItem: {
    alignItems: "flex-start",
    marginBottom: 30,
  },
  serviceIcon: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 50,
    marginBottom: 10,
  },
  serviceHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  serviceDescription: {
    textAlign: "left",
    color: "#eee",
    fontSize: 14,
  },
});
