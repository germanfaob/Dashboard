import { useState, useEffect } from "react";
import "./sportcard.css";
import axios from "axios";
import { SportItem } from "./SportItem";
import { Loader } from "../components/Loader";

export function SportCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const SPORTS = "category=sports";
  // const NEWS_KEY = "7ade6ea44a044548a37659470356cee7";
  const API_TOKEN = "7yUs5W0LVnFWeMtWuglfjm2wtsktZBw3n6GWzcvi";

  useEffect(() => {
    // Abort fetch if the component is unmounted
    const cancelToken = axios.CancelToken.source();

    const getSports = async () => {
      try {
        const response = await axios.get(
          `https://api.thenewsapi.com/v1/news/top?api_token=${API_TOKEN}&categories=sports&locale=us&limit=3`,
          { cancelToken: cancelToken.token }
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled");
        } else {
          console.log("Error occured while fetching", error.message);
        }
      }
    };
    getSports();
    return () => {
      cancelToken.cancel("The request was cancelled from the component");
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="sports">
      {data.map((sport) => {
        return (
          <SportItem
            key={sport.uuid}
            title={sport.title}
            description={sport.description}
            urlToImage={sport.image_url}
            publishedAt={sport.published_at}
          />
        );
      })}
    </div>
  );
}
