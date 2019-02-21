import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = ({ headerText }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    paddingTop: 15
  },
  viewStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    position: "relative",
    elevation: 2,
    shadowOpacity: 0.2,
    height: "3%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8"
  }
});
