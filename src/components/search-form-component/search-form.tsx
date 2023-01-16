import { Fragment, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import MagIcon from "../../icons/mag-icon";
import styles from "./search-form.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { setSearchString } from "../../redux/article-slice";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./mui-styles-search-form";
import ArticlesList from "../articles-list-component/";
import { useFetchFiltredArticles } from "../../services/fetch-hook";
import IArticle from "../../interfaces/article-interface";

export default function InputWithIcon() {
  const [queryString, setQueryString] = useState("");
  const dispatch = useAppDispatch();

  let articleArray: IArticle[] = [];
  let { response, loading } = useFetchFiltredArticles(queryString);
  if (Array.isArray(response)) {
    articleArray = response;
  } else {
    loading = true;
  }
  useEffect(() => {
    dispatch(setSearchString(queryString));
  });

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <p className={styles.searchTitle}>Filter by keywords</p>
        <Search>
          <SearchIconWrapper>
            <MagIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => {
              setQueryString(e.currentTarget.value);
            }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "24px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ArticlesList articlesArray={articleArray} />
      )}
    </Fragment>
  );
}
