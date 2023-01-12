import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectorArticle, setArticleID } from "../redux/articleSlice";

export default function MainView() {
  const articleID = useAppSelector(selectorArticle);
  const dispatch = useAppDispatch();
  const btnClickHandler = () => {
    dispatch(setArticleID(10));
  };

  return (
    <>
      <div>{`${articleID}`}</div>
      <button onClick={btnClickHandler}>Change redux store</button>
    </>
  );
}
