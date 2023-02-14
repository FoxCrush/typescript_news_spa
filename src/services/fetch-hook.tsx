import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import IArticle from "../interfaces/article-interface";
import { debounce } from "lodash";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles/";

type ArticlesInResponse = IArticle[];

const limitResponseItemsPerRequest = 10; // restricted for development
const sortArticlesRequestString = "id:desc"; //sort descending id according strapi docs.

const useFetchFiltredArticles = (qString = "") => {
  const [response, setResponse] = useState<IArticle[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const multipleParams = useMemo(() => {
    setLoading(true);
    setResponse(null);
    const keyWords = qString.trim().split(" ");
    return [
      {
        ...(limitResponseItemsPerRequest > 0 && {
          _limit: 20,
        }),
        ...(sortArticlesRequestString.length > 0 && {
          _sort: sortArticlesRequestString,
        }),
        ...(qString.length > 0 && { title_contains: keyWords }),
      },
      {
        ...(limitResponseItemsPerRequest > 0 && {
          _limit: limitResponseItemsPerRequest,
        }),
        ...(sortArticlesRequestString.length > 0 && {
          _sort: sortArticlesRequestString,
        }),
        ...(qString.length > 0 && { summary_contains: keyWords }),
      },
    ];
  }, [qString]);

  const filterSameArticles = (array: ArticlesInResponse[]) => {
    const connectedArray = array.flat(1);
    return [
      ...new Map(connectedArray.map((item) => [item["id"], item])).values(),
    ];
  };

  const formPrioritizedList = (responses: ArticlesInResponse[]) => {
    if (responses[0].length >= 20) {
      setResponse(responses[0]);
    } else {
      setResponse(filterSameArticles(responses));
    }
  };

  const fetchAll = () => {
    const requests = multipleParams.map((params) =>
      axios
        .get<ArticlesInResponse>("", { params })
        .then((response) => response.data)
    );
    axios
      .all(requests)
      .then((responses) => {
        formPrioritizedList(responses);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const debouncedRequest = debounce(() => {
    fetchAll();
  }, 400);
  useEffect(() => {
    return () => {
      debouncedRequest.cancel();
    };
  }, [debouncedRequest]);

  useEffect(() => {
    debouncedRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qString]);

  return { response, loading };
};

const useFetchSingleArticle = (idString = "") => {
  const [response, setResponse] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        setLoading(false);
      });
  }, [idString]);

  return { response, loading };
};

export { useFetchSingleArticle, useFetchFiltredArticles };
