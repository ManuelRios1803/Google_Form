const colors = {
  DarkTheme: {
    background_color: "#081920",
    form_background_color: "#051014",
    form_background_color_2: "#051014",
    header_color: "#00BDD4",
    words_color: "#FFFFFF",
    font_color: "#FFFFFF",
  },
  ColorBlind: {
    background_color: "#0E4667",
    form_background_color: "#0B3954",
    form_background_color_2: "#FFE66D",
    words_color: "#FFE66D",
    font_color: "#000000",
    header_color: "#FFE66D"
  },
  LightTheme: {
    background_color: "#FFFFFF",
    form_background_color: "#f4f4f9",
    form_background_color_2: "#f4f4f9",
    words_color: "#000000",
    font_color: "#000000",
    header_color: "#00BDD4",
  }
}

function Theme(value) {
  switch (value) {
    case "Dark":
      return colors.DarkTheme;
    case "CBlind":
      return colors.ColorBlind;
    case "Light":
      return colors.LightTheme;
  }
}


export default Theme;