import { View, Text, Pressable, StyleSheet } from "react-native";

function SongTitleItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#ff6666" }}
      onPress={props.onPressTitle.bind(this, props.id, props.title)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.songTitleItemStyle}>
        <Text style={styles.songTitleItemTextStyle}>{props.title}</Text>
      </View>
    </Pressable>
  );
}

export default SongTitleItem;

const styles = StyleSheet.create({
  songTitleItemStyle: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  songTitleItemTextStyle: {
    padding: 8,
    color: "white",
  },
});
