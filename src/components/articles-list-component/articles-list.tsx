import { Fragment, useMemo, useState } from "react";
import ArticleCard from "../article-list-item-component/";
import styles from "./article-list.module.css";
import IArticle from "../../interfaces/article-interface";
import { searchStringSelector } from "../../redux/article-slice";
import { useAppSelector } from "../../redux/hooks";
import { Box, Typography } from "@mui/material";

type Props = { articlesArray: IArticle[] };

export default function ArticlesList({ articlesArray }: Props) {
  const [sortedArray, setSortedArray] = useState<IArticle[]>([]);
  const searchString = useAppSelector(searchStringSelector);

  //sorting articles that has search string in title first
  useMemo(() => {
    setSortedArray(
      articlesArray.sort((x) => {
        return x.title.toLowerCase().includes(searchString.toLowerCase())
          ? -1
          : 0;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articlesArray]);

  sortedArray.map((article: any) => (
    <ArticleCard key={article.id} article={article} />
  ));

  return (
    <Fragment>
      <Box
        sx={{
          margin: "40px 0 0 75px",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Results: {articlesArray.length}
        </Typography>
      </Box>
      <div className={styles.container}>
        {articlesArray.map((article: any) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </div>
    </Fragment>
  );
}
