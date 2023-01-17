import { Card } from "./mui-styles-article-item";
import Highlighter from "react-highlight-words";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import CalendarIcon from "../../icons/calendar-icon";
import ArrowIcon from "../../icons/arrow-icon";
import IArticle from "../../interfaces/article-interface";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { searchStringSelector, setArticleID } from "../../redux/article-slice";
import styles from "./highlight.module.css";

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
  const formatSummaryString = (sumString: string) => {
    if (sumString.length > 100) {
      return `${sumString.substring(0, 100)}...`;
    } else {
      return sumString;
    }
  };

  const formatTextToHighlight = (text: string) => {
    return text.split(" ");
  };

  return (
    <Card id={`${article.id}`}>
      <NavLink
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
            <Highlighter
              highlightClassName={styles.highLighted}
              searchWords={formatTextToHighlight(
                useAppSelector(searchStringSelector)
              )}
              autoEscape={true}
              textToHighlight={formatSummaryString(article.title)}
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Highlighter
              highlightClassName={styles.highLighted}
              searchWords={formatTextToHighlight(
                useAppSelector(searchStringSelector)
              )}
              autoEscape={true}
              textToHighlight={formatSummaryString(article.summary)}
            />
          </Typography>
        </Box>
      </NavLink>
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
        <NavLink style={{ display: "flex" }} to={`/article/${article.id}`}>
          Read more <ArrowIcon />
        </NavLink>
      </Button>
    </Card>
  );
}
