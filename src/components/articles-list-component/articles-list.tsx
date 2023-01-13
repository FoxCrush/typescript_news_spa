import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  return (
    <Fragment>
      <Link to={"/article"}>Link</Link>
    </Fragment>
  );
}
