import React from "react";
import { Text, View,ScrollView } from "react-native";

import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

export default class App extends React.Component {
  state = {
    header: "Albums!"
  };

  render() {
    return (
      <ScrollView >
        <View style={{ flex: 1 }}>
          <Header headerText={this.state.header} />

          <AlbumList />
        </View>
      </ScrollView>
    );
  }
}
