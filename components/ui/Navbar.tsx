import { StyleSheet,View,Text} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Navbar(){

  return (
    <View style={styles.navbar}>
      <View style={styles.socialIcons}>
        <FontAwesome name="facebook" size={14} color="white" />
        <FontAwesome name="twitter" size={14} color="white" />
        <FontAwesome name="google" size={14} color="white" />
        <FontAwesome name="linkedin" size={14} color="white" />
      </View>
      <Text style={styles.navTitle}>TRENDY DESIGNS</Text>
      <View style={styles.navRight}>
        <Text style={styles.navText}>SIGN IN</Text>
        <Text style={styles.navText}>SIGN UP</Text>
        <Text style={styles.navText}>INFO@EXAMPLE.COM</Text>
      </View>
    </View>
  );
    
}


const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 20,
  },
  socialIcons: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  navRight: {
    flexDirection: "row",
    gap: 15,
  },
  navText: {
    color: "white",
    fontSize: 12,
  },
});

