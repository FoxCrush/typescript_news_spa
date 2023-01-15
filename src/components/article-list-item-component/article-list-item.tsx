import { Card } from "./mui-styles-article-item";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarIcon from "../../icons/calendar-icon";
import ArrowIcon from "../../icons/arrow-icon";
import IArticle from "../../interfaces/article-interface";

type Props = { article: IArticle };

export default function ArticleCard({ article }: Props) {
  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target);
  };

  return (
    <Card>
      <Link to={`/article/${article.id}`} onClick={clickHandler}>
        <CardMedia
          component="img"
          height="217"
          image={article.imageUrl}
          alt={article.title}
        />
        <CardContent sx={{ paddingTop: "25px" }}>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="p"
            sx={{ marginBottom: "25px", display: "flex" }}
          >
            <CalendarIcon />
            {article.publishedAt}
          </Typography>
          <Typography gutterBottom variant="h5" component="p">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
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
          <Link to={`/article/${article.id}`}>Read more</Link>
          <ArrowIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
