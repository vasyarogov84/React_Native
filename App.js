import React from "react";
import { Text, View,ScrollView } from "react-native";

import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

export default class App extends React.Component {
  state = {
    header: "Albums!",
    preload: false
  };
  setHeader = () => {
    this.setState({preload: true});
  }
  render() {
    
    return (
      <ScrollView >
        <View style={{backgroundColor: "black"}}>
          {this.state.preload && <Header headerText={this.state.header} />}

          <AlbumList setHeader={this.setHeader}/>
        </View>
      </ScrollView>
    );
  }
}
