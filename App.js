import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SongsListScreen from "./screens/SongsListScreen";

const currentUserName = "sasinduwije1";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SongsListScreen currentUserName={currentUserName} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
