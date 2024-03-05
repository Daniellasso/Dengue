import { StatusBar, StyleSheet, Platform } from "react-native";
import Routes from "./src/Routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#8A2BE2" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A2BE2",
    alignItems: "center",
    justifyContent: "center"
  }
});
