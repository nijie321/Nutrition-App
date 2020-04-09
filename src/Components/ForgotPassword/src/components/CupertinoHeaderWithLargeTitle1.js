import React from "react";
import { StyleSheet, View, Text } from "react-native";

function CupertinoHeaderWithLargeTitle1(props) {

  return (
    <View style={[styles.container, props.style]}>
      
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Forgot Your Password
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    paddingRight: 8,
    paddingLeft: 8,
  },
  header: {
    width: 359,
    height: 44,
    flexDirection: "row"
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon2: {
    color: "rgba(65,117,5,1)",
    fontSize: 32
  },
  leftText: {
    color: "rgba(155,155,155,1)",
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 17
  },
  textWrapper: {
    height: 52,
    justifyContent: "center",
    paddingLeft: 5
  },
  title: {
    color: "rgba(65,117,5,1)",
    alignSelf: "center",
    fontSize: 34,
    fontFamily: "roboto-300",
    lineHeight: 40
  }
});

export default CupertinoHeaderWithLargeTitle1;
