import React from "react";
import { View, Text } from "react-native";
import { Svg, Path } from "react-native-svg";

const uparrow = () => {
  return (
    <Svg width={14} height={14} fill="none">
      <Path
        d="M.938 8.048l-.712-.694a.734.734 0 010-1.06L6.455.22a.78.78 0 011.087 0l6.232 6.075a.734.734 0 010 1.059l-.712.694a.784.784 0 01-1.1-.013L8.283 4.27v8.98c0 .416-.343.75-.77.75H6.488a.758.758 0 01-.77-.75V4.27l-3.68 3.765a.779.779 0 01-1.1.013z"
        fill="#fff"
        fillOpacity={0.7}
      />
    </Svg>
  );
};

export default uparrow;
