import { useEffect, useState } from "react";

export const useFetch = ({ method, url, body }) => {
  console.log("fetch fetching");

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url, {
      method: method,
    })
      .then((response) => response.json())
      .then((data) => {
        setState({
          loading: false,
          error: false,
          data,
        });
      })
      .catch((error) => {
        console.log(error); // Log any fetch errors
        setState({
          loading: false,
          error: true,
          data: null,
        });
      });
  }, [url]);
  return state;
};
