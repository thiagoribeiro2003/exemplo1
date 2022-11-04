import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text>Olá!!!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
