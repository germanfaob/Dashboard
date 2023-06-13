import axios from "axios";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./newscard.css";

export const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const GENERAL = "category=general";
  const NEWS_KEY = "7ade6ea44a044548a37659470356cee7";

  useEffect(() => {
    // Abort fetch if the component is unmounted
    const cancelToken = axios.CancelToken.source();

    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&${GENERAL}&apiKey=${NEWS_KEY}`,
          { cancelToken: cancelToken.token }
        );
        setArticles(response.data.articles);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled");
        } else {
          console.log("Error occured while fetching", error.message);
        }
      }
    };
    getArticles();

    return () => {
      cancelToken.cancel("The request was cancelled from the component");
    };
  }, []);

  return (
    <div className="news">
      {articles.map((article, index) => {
        return (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
          />
        );
      })}
    </div>
  );
};
