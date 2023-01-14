import React, { Fragment, useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../redux/hooks";
// import { articleSelector, setArticleID } from "../redux/article-slice";
import SearchForm from "../components/search-form-component";

export default function MainView() {
  useEffect(() => {
    console.log("invoke");
  });
  //Bringing Redux action and value
  // const articleID = useAppSelector(articleSelector);
  // const dispatch = useAppDispatch();

  // const btnClickHandler = () => {
  //   dispatch(setArticleID(10));
  // };

  return (
    <Fragment>
      {/* <div>{`${articleID}`}</div> */}
      {/* <button onClick={btnClickHandler}>Change redux store</button> */}
      <SearchForm />
    </Fragment>
  );
}
