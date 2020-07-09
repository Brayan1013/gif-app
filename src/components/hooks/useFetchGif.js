/** @format */

const { useState, useEffect } = require("react");
const { getGifs } = require("../helpers/GetGifs");

export const useFetchGif = (serie) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(serie).then((data) => {
      setState({
        data,
        loading: false,
      });
    });
  }, [serie]);

  return state;
};
