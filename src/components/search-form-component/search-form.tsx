import { Fragment, memo, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import MagIcon from "../../icons/mag-icon";
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
import { Typography } from "@mui/material";

const MemoList = memo(ArticlesList);

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
    // loading = true;
    dispatch(setSearchString(queryString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString]);

  const stringChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.currentTarget.value);
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ ml: "75px", mt: "50px" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Filter by keywords
          </Typography>
        </Box>

        <Search>
          <SearchIconWrapper>
            <MagIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={stringChangeHandler}
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
        <MemoList articlesArray={articleArray} />
      )}
    </Fragment>
  );
}
