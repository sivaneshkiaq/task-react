import {
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/ui/Navbar";
import Menu from "@/components/ui/Menu";
import Header from "@/components/ui/Header";
import Home from "@/components/ui/Home";
import Services from "@/components/ui/Services";
import Team from "@/components/ui/Team";
import Gallery from "@/components/ui/Gallery";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="black" barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Navbar />
        <Menu />
        <Header />
        <Home />
        <Services />
        <Team/>
        <Gallery/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
