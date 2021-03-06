import React from "react";
import { Svg, Path } from "react-native-svg";

const group = () => {
  return (
    <Svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.224 3.25h-.003a.392.392 0 00-.25.06v.001L10.199 5.91l-.01.008-.012.007c-1.477.877-3.024 1.003-4.578.377l-.006-.003h0a6.144 6.144 0 01-1.178-.653l-3.38-2.332c-.151-.096-.375-.068-.48.03-.033.035-.033.06-.032.071.002.014.013.051.073.091l.001.001h0l4.48 3.02h0a.61.61 0 01.275.504v8.424c.25.06.519.06.77 0v-4.091c0-.418.384-.623.675-.623h1.407v.4c.152 0 .275.1.275.223l5.745-8.113zm0 0a.353.353 0 01.209.08c.04.036.045.064.045.076v.003c0 .012-.006.053-.072.097h-.002l-4.479 3.02h0a.61.61 0 00-.276.504v8.425c-.25.06-.519.06-.77 0l5.345-12.204z"
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={0.8}
      />
      <Path
        d="M10.6 2.824c0 1.262-1.303 2.423-3.1 2.423-1.797 0-3.1-1.16-3.1-2.423C4.4 1.56 5.703.4 7.5.4c1.797 0 3.1 1.161 3.1 2.424z"
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={0.8}
      />
    </Svg>
  );
};

export default group;
