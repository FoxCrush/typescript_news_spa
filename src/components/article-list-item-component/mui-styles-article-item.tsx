import { styled } from "@mui/material/styles";

export const Card = styled("div")(({ theme }) => ({
  position: "relative",
  margin: theme.spacing(3),
  flexBasis: "400px",
  minHeight: "530px",
  maxWidth: "400px",
  widows: "400px",
  borderRadius: "5px",
  border: "1px solid rgba(234, 234, 234, 1)",
  boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.05)",
  "&:hover": {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  overflow: "hidden",
}));
