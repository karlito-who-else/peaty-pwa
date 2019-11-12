import PropTypes, { InferProps } from "prop-types";
import React, { ReactElement } from "react";

import { useMediaQuery } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple, red } from "@material-ui/core/colors";

const primary = red[500]; // #F44336
const secondary = purple["A200"]; // #E040FB

export const Theme = ({
  children
}: InferProps<typeof DrawerMain.propTypes>): ReactElement => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const themeName = "Peaty";

  const palette = {
    type: prefersDarkMode ? "dark" : "light",
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
    // primary: {
    //   main: "#3f51b5"
    // },
    // secondary: {
    //   main: "#f50057"
    // },
    // error: {
    //   main: red.A400
    // },
    // background: {
    //   default: "#fff"
    // }
  };

  const theme = React.useMemo(() => createMuiTheme({ palette, themeName }), [
    prefersDarkMode
  ]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
