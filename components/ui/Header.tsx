import { StyleSheet,View,Text,Image} from "react-native";
import Swiper from "react-native-swiper";
export default function Header(){
      const designs = [
        {
          id: 1,
          title: "OFFICE DESIGNS",
          subtitle: "Bring Magic To Home",
          image: require("../../assets/images/img1.jpeg"),
        },
        {
          id: 2,
          title: "MODERN DESIGNS",
          subtitle: "Creative Interior Style",
          image: require("../../assets/images/img2.jpg"),
        },
        {
          id: 3,
          title: "HOME DESIGNS",
          subtitle: "Make Your Dream Home",
          image: require("../../assets/images/img3.jpg"),
        },
      ];
    return(
        <View style={styles.swiperContainer}>
                  <Swiper autoplay  activeDotColor="white">
                    {designs.map((item) => (
                      <View key={item.id} style={styles.slide}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                          <Text style={styles.subtitle}>{item.subtitle}</Text>
                          <Text style={styles.sliderTitle}>{item.title}</Text>
                        </View>
                      </View>
                    ))}
                  </Swiper>
                </View>
    )
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: 300,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
  },
  sliderTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
});