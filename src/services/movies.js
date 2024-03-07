import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const api_key = "0441c4db2a92748936c3e9dddc8a3b2c";
const language = "en";
const url = "https://api.themoviedb.org/3";

export const getNowPlayedMovies = async () => {
  const response = await axios.get(`${url}/movie/now_playing`, {
    params: {
      api_key,
      language,
      page: 1,
    },
  });

  return response.json();
};

const filterNowPlayedInfo = (movies) => {
  return movies?.map((movie) => ({
    Title: movie.title,
    Year: movie.release_date.split("-")[0],
    Poster: movie.backdrop_path,
  }));
};

export const useFetchData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/movie/now_playing`, {
          params: {
            api_key,
            language,
            page: 1,
          },
        });

        const { results, page, total_pages } = response.data;

        let filteredResults =
          results.length > 0 ? filterNowPlayedInfo(results) : [];

        setData({ results: filteredResults, page, total_pages });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return {
    now_played: data,
  };
};
