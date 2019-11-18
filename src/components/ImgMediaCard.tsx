import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export const ImgMediaCard = ({
  media,
  summary,
  title
}: InferProps<typeof FeatureGrid.propTypes>): ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          alt={media.alt}
          component={media.component}
          height={media.height}
          image={media.image}
          title={media.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
// alt, component, height, image, title;
ImgMediaCard.propTypes = {
  media: PropTypes.shape({
    alt: PropTypes.string,
    component: PropTypes.string,
    height: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string
  }),
  summary: PropTypes.string,
  title: PropTypes.string
};
