import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import IArticle from "../interfaces/article-interface";
import { debounce } from "lodash";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles/";

const limitResponseItemsPerRequest = 9; // restricted for development
const useFetchFiltredArticles = (qString = "") => {
  const [response, setResponse] = useState<IArticle[] | null>(null);
  const [loading, setloading] = useState<boolean>(true);
  const params = useMemo(() => {
    return {
      ...(limitResponseItemsPerRequest > 0 && {
        _limit: limitResponseItemsPerRequest,
      }),
      ...(qString.length > 0 && { title_contains: qString }),
      ...(qString.length > 0 && { summary_contains: qString }),
    };
  }, [qString]);

  const debouncedRequest = debounce(() => {
    fetch();
  }, 400);
  useEffect(() => {
    return () => {
      debouncedRequest.cancel();
    };
  }, [debouncedRequest]);

  const fetch = () => {
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
  };

  useEffect(() => {
    debouncedRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qString]);

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
