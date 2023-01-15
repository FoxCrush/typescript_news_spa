import axios from "axios";
import { useState, useEffect } from "react";
import IArticle from "../interfaces/article-interface";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles/";
const limitResponseItemsPerRequest = 6;
const params = {
  _limit: limitResponseItemsPerRequest,
};
const useFetchArticles = () => {
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
  }, []);

  return { response, loading };
};

const useFetchSingleArticle = (qString = "") => {
  const [response, setResponse] = useState<IArticle | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${qString}`)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, [qString]);

  return { response, loading };
};

export { useFetchArticles, useFetchSingleArticle };
