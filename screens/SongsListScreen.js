import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue, set, push } from "firebase/database";

import SongTitleItem from "../components/SongTitleItem";

const SongsListScreen = (props) => {
  const currentUserName = props.currentUserName;
  const [songsListTitles, setSongsListTitles] = useState([]);
  const [songsListData, setSongsListData] = useState({});

  useEffect(() => {
    const songsListRef = ref(db, currentUserName);
    onValue(songsListRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("Updated data from Firebase");
        setSongsListData(data);
        const songsListTitles = Object.keys(data);
        setSongsListTitles(songsListTitles);
      } else {
        setSongsListTitles([]);
        console.log("No data found");
      }
    });
  }, [currentUserName, db]);

  function pressTitleHandler(id) {
    console.log(
      "Selected ID : ",
      id,
      "\tTitle : ",
      songsListData[id]["title"],
      "\tValue : ",
      songsListData[id]["val"]
    );
  }

  return (
    <View style={{ padding: 30 }}>
      <FlatList
        data={songsListTitles}
        renderItem={(itemData) => {
          return (
            <SongTitleItem
              title={songsListData[itemData.item]["title"]}
              id={itemData.item}
              onPressTitle={pressTitleHandler}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item;
        }}
      />
    </View>
  );
};

export default SongsListScreen;

const styles = StyleSheet.create({});
