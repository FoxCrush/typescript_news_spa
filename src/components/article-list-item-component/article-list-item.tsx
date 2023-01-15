import { Card } from "./mui-styles-article-item";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarIcon from "../../icons/calendar-icon";
import ArrowIcon from "../../icons/arrow-icon";
import IArticle from "../../interfaces/article-interface";
import { useAppDispatch } from "../../redux/hooks";
import { setArticleID } from "../../redux/article-slice";

type Props = { article: IArticle };

export default function ArticleCard({ article }: Props) {
  //redux
  const dispatch = useAppDispatch();
  const clickHandler = (id: number) => dispatch(setArticleID(id));

  const formatDate = (dateString: string) => {
    const dateUTC = Date.parse(dateString);
    const date = new Date(dateUTC);
    return `${date.toLocaleString([], { month: "long" })} ${date.toLocaleString(
      [],
      { day: "numeric" }
    )}th, ${date.toLocaleString([], { year: "numeric" })}`;
  };

  return (
    <Card id={`${article.id}`}>
      <Link
        to={`/article/${article.id}`}
        onClick={() => {
          clickHandler(article.id);
        }}
      >
        <CardMedia
          component="img"
          height="217"
          image={article.imageUrl}
          alt={article.title}
        />
        <Box sx={{ padding: "25px 20px 64px 20px" }}>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="p"
            sx={{ marginBottom: "25px", display: "flex" }}
          >
            <CalendarIcon />
            {`${formatDate(article.publishedAt)}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="p">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
        </Box>
      </Link>

      <Button
        sx={{
          display: "flex",
          position: "absolute",
          bottom: "25px",
          left: "25px",
        }}
        size="small"
        color="primary"
        onClick={() => {
          clickHandler(article.id);
        }}
      >
        <Link to={`/article/${article.id}`}>Read more</Link>
        <ArrowIcon />
      </Button>
    </Card>
  );
}
