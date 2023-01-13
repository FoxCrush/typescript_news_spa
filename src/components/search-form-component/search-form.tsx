import { Fragment } from "react";
import Box from "@mui/material/Box";
import MagIcon from "../../media/mag-icon";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import styles from "./search-form.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid rgba(234, 234, 234, 1)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.05)",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50%",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));
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
    </Fragment>
  );
}
