import styles from "./article-detail.module.css";
import { Fragment } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowIcon from "../../icons/arrow-left-icon";
import { articleSelector } from "../../redux/article-slice";
import { useAppSelector } from "../../redux/hooks";
import CircularProgress from "@mui/material/CircularProgress";

export default function ArticleDetail() {
  const articleID = String(useAppSelector(articleSelector));
  const loading = false;
  return (
    <Fragment>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "24px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div className={styles.imageContainer}></div>
          <div className={styles.contentContainer}>
            <div className={styles.articleContainer}>
              <Typography
                gutterBottom
                variant="h5"
                component="p"
                sx={{ textAlign: "center", mt: "35px" }}
              >
                `Article ID is {articleID}`
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ margin: "50px 75px", textAlign: "start" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 s exercitationem magnam ut neque assumenda! Vitae
                perspiciatis, dignissimos ad eveniet qui minima blanditiis
                deleniti in iste sequi quis quam ut, quibusdam libero.
              </Typography>
            </div>
            <Button
              size="small"
              color="primary"
              sx={{
                display: "flex",
                mt: "35px",
                ml: "75px",
                mb: "45px",
              }}
            >
              <ArrowIcon />
              <Link to={"/"}>Back to home page</Link>
            </Button>
          </div>
        </>
      )}
    </Fragment>
  );
}
