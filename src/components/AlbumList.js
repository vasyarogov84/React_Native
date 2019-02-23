import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button, TouchableOpacity , Linking } from "react-native";
import Header from "./Header";

class AlbumList extends Component {
  state = {
    albums: []
  };
  async componentDidMount() {
    const request = await fetch(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    const data = await request.json();
    await this.setState({ albums: data });
    this.props.setHeader();
  }
  render() {
    if (!this.state.albums.length) {
      return (
        <View style={styles.loadingView}>
          <Text style={{ fontSize: 20 }}>Albums Loading...</Text>
        </View>
      );
    } else {
      return (
        <View>
          {this.state.albums.map(
            ({ title, image, artist, thumbnail_image, url }, i) => {
              return (
                <View key={i} style={styles.albumsView}>
                  <View
                    style={{
                      borderWidth: 1,
                      width: "100%",
                      flexDirection: "row",
                      marginTop: 5,
                      padding: 5
                    }}
                  >
                    <View>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: thumbnail_image }}
                      />
                    </View>
                    <View style={{ flexDirection: "column", padding: 5 }}>
                      <Text>{title}</Text>
                      <Text>{artist}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      flexDirection: "column",
                      flex: 1,
                      marginTop: 5,
                      padding: 5,
                      width: "100%"
                    }}
                  >
                    <Image
                      style={{ flex: 1, height: 250 }}
                      source={{ uri: image }}
                    />
                  </View>
                  <TouchableOpacity
                    style={{
                      justifyContent: "center",
                      borderWidth: 1,
                      flexDirection: "column",
                      padding: 5,
                      marginTop: 5,
                      flex: 1
                    }}
                  >
                    <Button
                      onPress={() => Linking.openURL(url)}
                      title="Buy Now"
                      style={{ alignSelf: "center", padding: 5 }}
                      color="#841584"
                    />
                  </TouchableOpacity>
                </View>
              );
            }
          )}
        </View>
      );
    }
  }
}

export default AlbumList;

const styles = StyleSheet.create({
  loadingView: {
    height: 700,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9f0f9"
  },
  albumsView: {
    flexDirection: "column",
    margin: 5,
    padding: 5,
    borderWidth: 1,
    flexWrap: "wrap",
    marginBottom: 15,
    backgroundColor: "#e9f0f9"
  }
});
