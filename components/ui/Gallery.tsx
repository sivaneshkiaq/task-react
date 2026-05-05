import {StyleSheet,View,Text,Dimensions,Image} from "react-native";

const { width } = Dimensions.get("window");

export default function Gallery(){

    const galleryData = [
    { id: "1", source: require("../../assets/images/img11.jpg") },
    { id: "2", source: require("../../assets/images/img12.jpg") },
    { id: "3", source: require("../../assets/images/img13.jpg") },
    { id: "4", source: require("../../assets/images/img14.jpg") },
    { id: "5", source: require("../../assets/images/img15.jpg") },
    { id: "6", source: require("../../assets/images/img16.jpg") },
    { id: "7", source: require("../../assets/images/img17.jpg") },
    { id: "8", source: require("../../assets/images/img18.jpg") },
    { id: "9", source: require("../../assets/images/img19.jpg") },
    { id: "10", source: require("../../assets/images/img20.jpg") },
  ];
    return(
        <View style={styles.galleryContainer}>
                  <Text style={styles.galleryTitle}>OUR GALLERY</Text>
                  {galleryData.map((item) => (
                    <View key={item.id} style={styles.imageWrapper}>
                      <Image source={item.source} style={styles.galleryImage} />
                    </View>
                  ))}
                </View>
    )
}

const styles=StyleSheet.create({
    galleryContainer: {
    backgroundColor: "#F5F5DC",
    paddingVertical: 40,
  },
  galleryTitle: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 30,
  },
  imageWrapper: {
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  galleryImage: {
    width: "100%",
    height: 250,
  },
})