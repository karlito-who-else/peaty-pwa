import React from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles
} from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
  Restore as RestoreIcon
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    // width: 500
  }
});

export const BottomNavigationMobile = (): ReactElement => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue): void => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationMobile;
