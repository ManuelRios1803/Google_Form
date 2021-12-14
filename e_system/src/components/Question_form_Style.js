import { makeStyles } from "@material-ui/core";

import Theme from "./Themes/Themes"

const colors = Theme(localStorage.getItem("palette"))

export const useStyles = makeStyles(() => ({
  select: {
    backgroundColor: colors.form_background_color,
  },
  icon: {
    fill: colors.words_color
  },
}));