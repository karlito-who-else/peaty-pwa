import React from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  Theme
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
  Restore as RestoreIcon
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridArea: "footer"
    }
  })
);

export const BottomNavigationMobile = (): ReactElement => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      className={classes.root}
      component="nav"
      onChange={(event, newValue): void => {
        setValue(newValue);
      }}
      showLabels
      value={value}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationMobile;
