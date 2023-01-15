import axios from "axios";
import { useState, useEffect } from "react";
import IArticle from "../interfaces/article-interface";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/";

const useFetchArticles = (qString = "articles") => {
  const [response, setResponse] = useState<IArticle[]>([]);
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`/${qString}?_limit=6`)
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

export default useFetchArticles;
