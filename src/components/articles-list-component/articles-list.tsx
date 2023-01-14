import React, { Fragment } from "react";
import ArticleCard from "../article-list-item-component/";
import styles from "./article-list.module.css";
import IArticle from "../../interfaces/article-interface";

export default function ArticlesList({ articlesArr }: any) {
  console.log("articlesArr", articlesArr);

  return (
    <Fragment>
      <p className={styles.title}>Results: {articlesArr.length}</p>
      <div className={styles.container}>
        {articlesArr.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </Fragment>
  );
}
