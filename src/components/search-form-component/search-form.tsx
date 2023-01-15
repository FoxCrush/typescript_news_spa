import { Fragment } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import MagIcon from "../../icons/mag-icon";
import styles from "./search-form.module.css";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./mui-styles-search-form";
import ArticlesList from "../articles-list-component/";
import useFetchArticles from "../../services/fetch-hook";

export default function InputWithIcon() {
  const { response, loading } = useFetchArticles("articles");

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <p className={styles.searchTitle}>Filter by keywords</p>
        <Search>
          <SearchIconWrapper>
            <MagIcon />
          </SearchIconWrapper>
          <StyledInputBase
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
        <ArticlesList articlesArray={response} />
      )}
    </Fragment>
  );
}
