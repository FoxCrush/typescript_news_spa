import { Fragment } from "react";
import Box from "@mui/material/Box";
import MagIcon from "../../media/mag-icon";
import styles from "./search-form.module.css";
import { Search, SearchIconWrapper, StyledInputBase } from "./mui-styles";
import ArticlesList from "../articles-list-component/";

export default function InputWithIcon() {
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
      <ArticlesList />
    </Fragment>
  );
}
