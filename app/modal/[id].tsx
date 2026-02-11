import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Modal() {
  const local = useLocalSearchParams();
  const id = local.id;

  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://dragonball-api.com/api/characters/${id}`,
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const voltar = () => {
    router.push("..");
  };

  useEffect(() => {
    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (loading) {
    return (
      <View style={s.wrapImage}>
        <Image style={s.ldngImg} source={require("@/assets/carregar.gif")} />
        <Text style={s.loadingText}>CARREGANDO...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("@/assets/Fundo3.jpeg")}
      resizeMode="cover"
      style={s.BackGrd2}
    >
      <ScrollView>
        <TouchableOpacity onPress={voltar}>
          <Text style={s.backbtn}>↩️</Text>
        </TouchableOpacity>
        {data && (
          <View style={s.card}>
            <Text style={s.titulo}>{data.name}</Text>
            <Image
              style={s.img}
              contentFit="contain"
              source={{ uri: data.image }}
            />
            <View style={s.infoBox}>
              <Text style={s.txt}>Raça: {data.race}</Text>
              <Text style={s.txt}>KI: {data.maxKi}</Text>
              <Text style={s.txt}>{data.affiliation}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  backbtn: {
    fontSize: 30,
    padding: 10,
  },
  titulo: {
    fontSize: 36,
    color: "#ffffffff",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: "bold",
  },
  BackGrd2: {
    flex: 1,
    width: "auto",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    textAlign: "center",
    color: "#ffffffff",
    fontSize: 18,
    textShadowColor: "#ffffff",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: "bold",
  },
  ldngImg: {
    width: 300,
    height: 300,
    borderRadius: 999,
    borderWidth: 6,
    borderColor: "#e79418",
  },
  img: {
    width: 300,
    height: 700,
    backgroundColor: "#ffffff52",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#e79418",
  },
  title: {
    fontSize: 26,
  },
  txt: {
    fontSize: 18,
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    backgroundColor: "#ffffff85",
    margin: 10,
    padding: 40,
    borderColor: "#e79418",
    borderWidth: 2,
    borderRadius: 20,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
});
