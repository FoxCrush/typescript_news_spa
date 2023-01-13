import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function ArticleCard() {
  const clickHandler = (evt: any) => {
    console.log(evt);
  };

  return (
    <Card
      sx={{
        flexBasis: "400px",
        height: "530px",
        widows: "400px",
        borderRadius: "5px",
        marginRight: "45px",
        marginBottom: "45px",
        border: "1px solid rgba(234, 234, 234, 1)",
        boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Link to={"/article"} onClick={clickHandler}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={clickHandler}>
          <Link to={"/article"}>Read more</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
