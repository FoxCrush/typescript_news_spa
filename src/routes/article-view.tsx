import React from "react";
import ArticleDetail from "../components/article-detail-component";

export default function ArticleView() {
  return <ArticleDetail />;
}
const articleLoader = () => {
  console.log("Loading Article View");
  return null;
};
export { articleLoader };
