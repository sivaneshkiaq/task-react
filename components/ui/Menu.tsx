import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT", "SERVICES", "TEAM", "GALLERY", "CONTACT"];

  return (
    <View>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <FontAwesome name="bars" size={20} color="black" />
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput placeholder="Tap to text here" style={styles.input} />
          <FontAwesome name="search" size={16} color="gray" />
        </View>
      </View>

      {menuOpen && (
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <Text key={index} style={styles.menuItem}>
              {item}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    width: 120,
  },
  menu: {
    padding: 20,
    backgroundColor: "lightgray",
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});
