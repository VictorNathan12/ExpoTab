import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Personagen({ item }: { item: any }) {
  return (
    <>
      <Link href={`/modal/${item.id}`}>
        <View style={s.wrap2}>
          <View style={s.wrap3}>
            <Text style={s.name}>{item.name}</Text>
          </View>
          <View style={s.imageConteiner}>
            <Image style={s.image} source={{ uri: item.image }} />
          </View>
        </View>
      </Link>
    </>
  );
}

const s = StyleSheet.create({
  name: {
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  wrap2: {
    backgroundColor: "#7700005d",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    borderRadius: 50,
    borderWidth: 5,
    gap: 5,
    marginTop: 50,
  },
  wrap3: {
    padding: 5,
    color: "#ffffff",
    fontSize: 22,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  imageConteiner: {
    height: 400,
    width: 177,
  },
  image: {
    height: 450,
    width: 200,
  },
});
