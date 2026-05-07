import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Home() {
  return (
    <View>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.magic}>Bring Magic To Home</Text>
        <Text style={styles.description}>
          Effective office design boosts productivity and employee well-being by
          blending functionality with aesthetic improve.
        </Text>
      </View>

      <View style={styles.featureContainer}>
        {[1, 2, 3].map((item, index) => (
          <View key={index} style={styles.featureRow}>
            <FontAwesome name="check" size={16} color="blue" />
            <Text style={styles.featureText}>
              Flexibility: Modular furniture and workstations that adapt to
              various work styles.
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <FontAwesome name="bath" size={40} />
          <FontAwesome name="heart" size={40} />
          <FontAwesome name="lightbulb-o" size={40} />
        </View>
        <View style={styles.row}>
          <FontAwesome name="bed" size={40} />
          <FontAwesome name="laptop" size={40} />
          <FontAwesome name="users" size={40} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeSection: {
    padding: 20,
    alignItems: "center",
  },
  welcome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  magic: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  featureContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  featureRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
  },
  gridContainer: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
});
