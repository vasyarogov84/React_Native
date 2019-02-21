import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";

class AlbumList extends Component {
  state = {
    albums: []
  };
  async componentDidMount() {
    const request = await fetch(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    const data = await request.json();
    this.setState({ albums: data });
  }
  render() {
    console.log(this.state.albums.length);
    if (!this.state.albums.length) {
      return (
        <View style={styles.loadingView}>
          <Text style={{ fontSize: 25 }}></Text>
        </View>
      );
    }
    return (
      <View>
        {this.state.albums.map(
          ({ title, image, artist, thumbnail_image }, i) => {
            return (
              <View key={i} style={styles.albumsView}>
                <View
                  style={{
                    borderWidth: 1,
                    width: "100%",
                    flexDirection: "row"
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
                <View style={{
                  borderWidth: 1, 
                  flexDirection: "column",
                  marginTop: 5,
                  padding: 5,
                  width: "100%"
                  }}>
                <Image
                      style={{ flex: 1, height: 250 }}
                      source={{ uri: image }}
                    />
                </View>
                <View style={{
                  justifyContent:"center",
                  borderWidth: 1, 
                  flexDirection: "row",
                  padding: 5, 
                  marginTop: 5,
                  flex: 1,
                  
                  }}>
                   <Button 
                   onPress={() => console.log("Buy Now")}
                   title="Buy Now"
                   style={{ alignSelf: "center", padding: 5}}
                   color="#841584"
                   />
                   
                </View>
              </View>
            );
          }
        )}
      </View>
    );
  }
}

export default AlbumList;

const styles = StyleSheet.create({
  loadingView: {
   
    alignItems: "center",
    
  },
  albumsView: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
    borderWidth: 1,
    flexWrap: "wrap",
    marginBottom: 15
  }
});
