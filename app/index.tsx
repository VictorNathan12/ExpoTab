import { Link, router } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Inicial() {
  return (
    <ImageBackground
      source={require("@/assets/Fundo.jpg")}
      resizeMode="cover"
      style={s.BackGrd}
    >
      <View style={s.wrapInicial}>
        <Text style={s.titulo}>Consumo da API do Dragon Ball</Text>
      </View>
      <View style={s.wrapInicial}>
        <Image style={s.img} source={require("@/assets/logo.svg")} alt="Logo" />
      </View>
      <View style={s.wrapInicial}>
        <TouchableOpacity
          style={s.btn}
          onPress={() => {
            router.push("/list");
          }}
        >
          <Text style={s.btn2}>Lista dos Personagens</Text>
        </TouchableOpacity>
      </View>
      <Link href="/modal" style={s.link}>
        Open modal
      </Link>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
  BackGrd: {
    flex: 1,
    width: "auto",
    height: "100%",
  },
  wrapInicial: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 38,
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    color: "#ffffff",
  },
  img: {
    width: "100%",
    height: 110,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  btn2: {
    fontSize: 27,
    color: "#ffffff",
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#000000",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
