import React from "react";
import { View, Text } from "react-native";
import { Svg, Path } from "react-native-svg";

const downarrow = () => {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.062 5.952l.712.694a.734.734 0 010 1.06L7.545 13.78a.78.78 0 01-1.087 0L.226 7.705a.734.734 0 010-1.059l.712-.694a.784.784 0 011.1.013l3.68 3.765V.75c0-.416.343-.75.769-.75h1.026c.426 0 .77.334.77.75v8.98l3.68-3.765a.779.779 0 011.1-.013z"
        fill="#fff"
        fillOpacity={0.7}
      />
    </Svg>
  );
};

export default downarrow;
