import { Fragment } from "react";
import ArticleCard from "../article-list-item-component/";
import styles from "./article-list.module.css";
import IArticle from "../../interfaces/article-interface";

type Props = { articlesArray: IArticle[] };

export default function ArticlesList({ articlesArray }: Props) {
  return (
    <Fragment>
      <p className={styles.title}>Results: {articlesArray.length}</p>
      <div className={styles.container}>
        {articlesArray.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </Fragment>
  );
}
