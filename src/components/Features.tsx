import React from "react";
import PropTypes, { InferProps } from "prop-types";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gap: `${theme.spacing(4)}px`,
      gridTemplateColumns: `repeat(4, 1fr)`,
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2)
    },
    paper: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
      textAlign: "center"
    }
  })
);

const FeatureGrid = ({
  gridItems
}: InferProps<typeof FeatureGrid.propTypes>): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      {gridItems.map(item => (
        <div key={item.text} className="item">
          <PreviewCompatibleImage imageInfo={item} />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
