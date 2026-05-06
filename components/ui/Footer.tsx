import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import { AntDesign, Entypo, EvilIcons, FontAwesome } from "@expo/vector-icons";

export default function Footer({ pass }:any) {
  return (
    <View style={styles.footer}>
      <View style={styles.foot}>
        <Text style={{ color: "white" }}>Menu</Text>
        <TouchableOpacity onPress={pass} style={styles.arrow}>
          <Text>
            <Text>hello</Text>
            <FontAwesome name="arrow-up" color="white" size={24} />
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>9080541607</Text>
      </View>

      <View style={styles.secContainer}>
        <View style={styles.first}>
          <Text style={styles.title}>Our Address</Text>
          <Text style={styles.icon}>
            <Entypo name="location-pin" size={22} color="white" />
            Chennai,Navalur
          </Text>

          <Text style={styles.icon}>
            <Entypo name="phone" size={22} color="white" />
            9080541607
          </Text>

          <Text style={styles.icon}>
            <Entypo name="email" size={22} color="white" /> info@example.com
          </Text>
        </View>
        <View style={styles.second}>
          <Text style={styles.titles}>TRENDY DESIGNS</Text>

          <View style={styles.evilMenu}>
            <EvilIcons
              style={styles.evil}
              name="sc-facebook"
              size={24}
              color="white"
            />
            <EvilIcons
              style={styles.evil}
              name="sc-twitter"
              size={24}
              color="white"
            />
            <AntDesign
              style={styles.evil}
              name="google-plus"
              size={22}
              color="white"
            />
            <Entypo
              style={styles.evil}
              name="linkedin"
              size={22}
              color="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  arrow: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  foot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  footer: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  secContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  first: {
    flex: 1,
    paddingVertical: 30,
  },
  title: {
    color: "purple",
    fontSize: 32,
    marginBottom: 20,
  },
  evil: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    textAlign: "center",
    padding: 10,
  },
  evilMenu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  icon: {
    color: "white",
    marginBottom: 18,
    fontSize: 14,
  },
  second: {
    flex: 1,
    alignItems: "center",
  },
  titles: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
