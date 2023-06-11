import axios from "axios";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./newscard.css";

export const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const GENERAL = "category=general";
  const NEWS_KEY = "7ade6ea44a044548a37659470356cee7";

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&${GENERAL}&apiKey=${NEWS_KEY}`
      );
      setArticles(response.data.articles);
    };
    getArticles();
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
