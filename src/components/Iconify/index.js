import React from "react";
import { Icon } from "@iconify/react";

const Iconify = ({ size = 28, ...others }) => {
  return (
    <Icon
      icon="mdi-light:home"
      style={{ fontSize: size, ...others.style }}
      {...others}
    />
  );
};

export default React.memo(Iconify);
