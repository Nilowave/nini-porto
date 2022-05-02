import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { Typography } from "@strapi/design-system/Typography";
import { useTheme } from "@strapi/design-system/ThemeProvider";
import * as HH from "@strapi/helper-plugin";
console.log(HH);

import * as S from "./index.styles";

const ColorPicker = (props) => {
  const { colors } = useTheme();

  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(props.value);

  const updateColorValue = (colorValue) => {
    if (colorValue) {
      props.onChange({
        target: {
          name: props.name,
          value: colorValue,
          type: "string",
        },
      });
    }
  };

  useEffect(() => {
    if (!props.value) {
      updateColorValue(color);
    }
  }, []);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    updateColorValue(color.hex);
  };

  return (
    <div>
      <Typography variant="pi" fontWeight="bold">
        {props.name}
      </Typography>
      <S.ColorWindow
        color={color}
        onClick={() => setShowPicker(true)}
        themeColors={colors}
      />
      {showPicker ? (
        <S.PopOver>
          <S.Cover onClick={() => setShowPicker(false)} />
          <ChromePicker color={color} onChange={handleChangeComplete} />
        </S.PopOver>
      ) : null}
    </div>
  );
};

export default ColorPicker;
