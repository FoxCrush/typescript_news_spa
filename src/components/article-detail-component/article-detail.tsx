import styles from "./article-detail.module.css";
import { Fragment, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowIcon from "../../icons/arrow-left-icon";
import { articleSelector } from "../../redux/article-slice";
import { useAppSelector } from "../../redux/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { useFetchSingleArticle } from "../../services/fetch-hook";

const initialArticle = {
  title: "string",
  summary: "string",
  imageUrl: "string",
};

export default function ArticleDetail() {
  let articleID = String(useAppSelector(articleSelector));
  if (articleID === "0") {
    articleID = JSON.parse(localStorage.getItem("LastStarArticleID") || "");
  }
  const { response, loading } = useFetchSingleArticle(articleID);
  const [articleLoading, setArticleLoading] = useState(true);
  const [article, setArticle] = useState<{
    title: string;
    summary: string;
    imageUrl: string;
  }>(initialArticle);

  useEffect(() => {
    if (response !== null) {
      setArticle(response);
      setArticleLoading(loading);
    }
  }, [loading, response]);

  useEffect(() => {
    if (articleID !== "0" || !articleID) {
      localStorage.setItem("LastStarArticleID", JSON.stringify(articleID));
    }
  }, [articleID]);

  return (
    <Fragment>
      {articleLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "24px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div className={styles.imageContainer}>
            <img
              className={styles.coverImage}
              alt={article.title}
              src={article.imageUrl}
            ></img>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.articleContainer}>
              <Typography
                gutterBottom
                variant="h5"
                component="p"
                sx={{ textAlign: "center", mt: "35px" }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "15px", textAlign: "start" }}
              >
                {article.summary}
              </Typography>
            </div>
            <Button
              size="small"
              color="primary"
              sx={{
                display: "flex",
                mt: "35px",
                ml: "75px",
                mb: "45px",
              }}
            >
              <ArrowIcon />
              <Link to={"/"}>Back to home page</Link>
            </Button>
          </div>
        </>
      )}
    </Fragment>
  );
}
