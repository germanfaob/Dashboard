import { useState, useEffect } from "react";
import "./sportcard.css";
import axios from "axios";
import { SportItem } from "./SportItem";

export function SportCard() {
  const [data, setData] = useState([]);
  const SPORTS = "category=sports";
  const NEWS_KEY = "7ade6ea44a044548a37659470356cee7";

  useEffect(() => {
    const getSports = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&${SPORTS}&apiKey=${NEWS_KEY}`
      );
      setData(response.data.articles);
    };
    getSports();
  }, []);

  return (
    <div className="sports">
      {data.map((sport, index) => {
        return (
          <SportItem
            key={index}
            title={sport.title}
            description={sport.description}
            urlToImage={sport.urlToImage}
            publishedAt={sport.publishedAt}
          />
        );
      })}
    </div>
  );
}
