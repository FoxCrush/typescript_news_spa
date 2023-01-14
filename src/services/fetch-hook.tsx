import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/";

const useFetchArticles = (qString = "") => {
  const [response, setResponse] = useState<[] | null>(null);
  const [loading, setloading] = useState(true);

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
