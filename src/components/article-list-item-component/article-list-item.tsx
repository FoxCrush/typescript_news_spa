import { Card } from "./mui-styles-article-item";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarIcon from "../../media/calendar-icon";
import ArrowIcon from "../../media/arrow-icon";

export default function ArticleCard() {
  const clickHandler = (evt: any) => {
    console.log(evt);
  };

  return (
    <Card>
      <Link to={"/article"} onClick={clickHandler}>
        <CardMedia
          component="img"
          height="217"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ paddingTop: "25px" }}>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="p"
            sx={{ marginBottom: "25px", display: "flex" }}
          >
            <CalendarIcon />
            Jun 29 2022
          </Typography>
          <Typography gutterBottom variant="h5" component="p">
            Lizards Lizards Lizards Lizards Lizards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lorem ipsum
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={clickHandler}
          sx={{ display: "flex" }}
        >
          <Link to={"/article"}>Read more</Link>
          <ArrowIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
