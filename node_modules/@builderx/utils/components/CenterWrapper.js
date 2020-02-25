import React from "react";
import { View } from "react-native";

export default class CenterWrapper extends React.Component {
  render() {
    let horizontal, vertical;

    horizontal = this.props.vertical && !this.props.horizontal ? false : true;
    vertical = this.props.horizontal && !this.props.vertical ? false : true;

    return (
      <View
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          alignItems: horizontal ? "center" : undefined,
          justifyContent: vertical ? "center" : undefined
        }}
        pointerEvents="box-none"
      >
        {this.props.children}
      </View>
    );
  }
}
