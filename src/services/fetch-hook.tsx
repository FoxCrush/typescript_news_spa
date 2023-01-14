import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/";

const useFetchArticles = (qString: string) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(`/${qString}?_limit=6`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, [qString]);

  return { response, error, loading };
};

export default useFetchArticles;
