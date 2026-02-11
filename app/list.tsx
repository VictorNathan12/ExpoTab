import Personagen from "@/app/personagens";
import { Image, ImageBackground } from "expo-image";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
export default function List() {
  const [personagens, setPersonagens] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://dragonball-api.com/api/characters?page=" + page,
      );
      const data = await response.json();
      setPersonagens((prev: any) => [...(prev || []), ...data.items]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 0 && page < 7) {
      fetchCharacters();
    }
  }, [page]);

  return (
    <ImageBackground
      source={require("@/assets/Fundo2.gif")}
      resizeMode="cover"
      style={s.BackGrd2}
    >
      <View style={s.screen}>
        <Text style={s.titulo}>Personagens Dragon Ball</Text>

        {loading ? (
          <View style={s.wrapImage}>
            <Image source={require("@/assets/carregar.gif")} />
          </View>
        ) : (
          <FlatList
            data={personagens}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return <Personagen item={item}></Personagen>;
            }}
            onEndReached={loading ? null : () => setPage((prev) => prev + 1)}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  BackGrd2: {
    flex: 1,
    width: "auto",
    height: "100%",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  titulo: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  wrapImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    width: 220,
    height: 500,
  },
  image: {
    flex: 1,
  },
  personagem: {
    backgroundColor: "#44005d60",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
    borderRadius: 50,
  },
});
