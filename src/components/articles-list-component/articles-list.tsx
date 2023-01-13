import React, { Fragment } from "react";
import ArticleCard from "../article-list-item-component/";
import styles from "./article-list.module.css";

const arr = [1, 2, 3, 4, 5, 6];

export default function ArticlesList() {
  return (
    <Fragment>
      <p className={styles.title}>Results: {arr.length}</p>
      <div className={styles.container}>
        {arr.map((item) => (
          <ArticleCard key={item} />
        ))}
      </div>
    </Fragment>
  );
}
