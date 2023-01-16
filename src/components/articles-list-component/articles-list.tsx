import { Fragment, useEffect, useState } from "react";
import ArticleCard from "../article-list-item-component/";
import styles from "./article-list.module.css";
import IArticle from "../../interfaces/article-interface";
import { searchStringSelector } from "../../redux/article-slice";
import { useAppSelector } from "../../redux/hooks";

type Props = { articlesArray: IArticle[] };

export default function ArticlesList({ articlesArray }: Props) {
  const [sortedArray, setSortedArray] = useState<IArticle[]>([]);
  const searchString = useAppSelector(searchStringSelector);

  //sorting articles that has search string in title first
  useEffect(() => {
    setSortedArray(
      articlesArray.sort((x) =>
        x.title.toLowerCase().includes(searchString.toLowerCase()) ? -1 : 0
      )
    );
  }, [articlesArray, searchString]);

  return (
    <Fragment>
      <p className={styles.title}>Results: {articlesArray.length}</p>
      <div className={styles.container}>
        {sortedArray.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </Fragment>
  );
}
