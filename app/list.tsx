import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function List() {
  const [personagens, setPersonagens] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://dragonball-api.com/api/characters");
      const data = await response.json();
      setPersonagens(data.items);
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <View style={s.screen}>
      <Text style={s.titulo}>Lista de Personagens</Text>
      {loading ? (
        <View style={s.wrapImage}>
          <Image source={require("@/assets/carregar.gif")} />
        </View>
      ) : (
        <FlatList
          data={personagens}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Image source={{ uri: item.image }}></Image>
            </View>
          )}
        />
      )}
    </View>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  titulo: {
    fontSize: 22,
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
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
});
