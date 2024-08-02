import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";

import SongsListScreen from "./screens/SongsListScreen";
import AuthenticationByEmailScreen from "./screens/AuthenticationByEmailScreen";

// const currentUserName = "sasinduwije1";
let screen;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("Default");

  function handleAuthentication(isLoggedIn, userName = "Default") {
    if (isLoggedIn) {
      setUserName(userName);
      setIsAuthenticated(true);
      console.log("Authentication : Logged in as", userName);
    } else {
      setIsAuthenticated(false);
      setUserName("Default");
      console.log("Authentication : Logged out");
    }
  }

  function logoutHandler() {
    handleAuthentication(false);
    console.log("Logging out...");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {isAuthenticated ? (
          <SongsListScreen
            currentUserName={userName}
            onLogoutPress={logoutHandler}
          />
        ) : (
          <AuthenticationByEmailScreen
            onAuthenticationDone={handleAuthentication}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
  },
  loggedOutContainer: {
    backgroundColor: "#b92c2c",
  },
  loggedInContainer: {
    backgroundColor: "#15dd5e",
  },
});
