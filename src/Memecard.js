import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Imemeard(props) {
  const classes = useStyles();

  return (
    <div>
    <Link to={`/${props.memes.id}/${props.memes.box_count}`} >
    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          alt={props.memes.name}
          title={props.memes.name}
          style={{height:400, width:350}}
        >
          <img style={{height:400, width:350}} src= {props.memes.url}></img>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.memes.name}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button>Create Meme!</Button>
      </CardActions>

    </Card>
    <br />
    <br />
    </Link>
    </div>
  );
}
