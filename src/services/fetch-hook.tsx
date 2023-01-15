import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import IArticle from "../interfaces/article-interface";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles/";
const limitResponseItemsPerRequest = 6; // restricted for development
const useFetchFiltredArticles = (qString = "") => {
  const params = useMemo(() => {
    return {
      _limit: limitResponseItemsPerRequest,
      ...(qString.length > 0 && { title_contains: qString }),
      ...(qString.length > 0 && { summary_contains: qString }),
    };
  }, [qString]);
  const [response, setResponse] = useState<IArticle[] | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("", { params })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [params, qString]);

  return { response, loading };
};

const useFetchSingleArticle = (idString = "") => {
  const [response, setResponse] = useState<IArticle | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${idString}`)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [idString]);

  return { response, loading };
};

export { useFetchSingleArticle, useFetchFiltredArticles };
