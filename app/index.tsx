import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Inicial() {
  return (
    <>
      <View style={s.wrapInicial}>
        <Text style={s.titulo}>Consumo da API do Dragon Ball</Text>
      </View>
      <View style={s.wrapInicial}>
        <Image
          style={s.img}
          source={require("@/assets/LOGO.webp")}
          alt="Logo"
        />
      </View>
      <View style={s.wrapInicial}>
        <TouchableOpacity
          style={s.btn}
          onPress={() => {
            router.push("/list");
          }}
        >
          <Text>Visitar personagem</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  wrapInicial: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgb(255, 166, 0)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: "#ff8800",
  },
  img: {
    width: "80%",
    height: 300,
  },
  btn: {
    backgroundColor: "#ffb700",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
