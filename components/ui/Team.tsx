import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Team() {
  return (
    <View>
      <View style={styles.teamSection}>
        <Text style={styles.teamTitle}>OUR TEAM</Text>
        {[
          { name: "Thomas", img: require("../../assets/images/img6.jpg") },
          { name: "Fersana", img: require("../../assets/images/img5.jpg") },
          { name: "Albert", img: require("../../assets/images/img7.jpg") },
          { name: "Thomas", img: require("../../assets/images/img.8.jpg") },
        ].map((member, index) => (
          <View key={index} style={styles.cardContainer}>
            <Image
              source={member.img}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{member.name}</Text>
              <Text style={styles.subText}>Neque porro</Text>
              <View style={styles.teamIcons}>
                <FontAwesome name="facebook" size={20} color="#333" />
                <FontAwesome name="twitter" size={20} color="#333" />
                <FontAwesome name="google-plus" size={20} color="#333" />
                <FontAwesome name="linkedin" size={20} color="#333" />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teamSection: {
    alignItems: "center",
    paddingVertical: 40,
  },
  teamTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  cardContainer: {
    width: "85%",
    backgroundColor: "#C5D0B1",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 25,
  },
  profileImage: {
    width: "100%",
    height: 250,
    borderWidth: 1,
    borderColor: "#fff",
  },
  detailsContainer: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00A896",
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  teamIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
