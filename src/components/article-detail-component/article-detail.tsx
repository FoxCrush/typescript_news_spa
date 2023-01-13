import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ArticleDetail() {
  return (
    <Fragment>
      ArticleDetails <Link to={"/"}>Back to home page</Link>
    </Fragment>
  );
}
