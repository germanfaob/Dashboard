import axios from "axios";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./newscard.css";
import { Loader } from "../../components/Loader";

const NEWS_TOKEN = "7yUs5W0LVnFWeMtWuglfjm2wtsktZBw3n6GWzcvi";

export const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const GENERAL = "category=general";
  // const NEWS_KEY = "7ade6ea44a044548a37659470356cee7";

  useEffect(() => {
    // Abort fetch if the component is unmounted
    const cancelToken = axios.CancelToken.source();

    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://api.thenewsapi.com/v1/news/all?api_token=${NEWS_TOKEN}&language=en&limit=3`,
          { cancelToken: cancelToken.token }
        );
        setArticles(response.data.data);
        setLoading(false);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="news">
      {articles.map((article) => {
        return (
          <NewsItem
            key={article.uuid}
            title={article.title}
            description={article.description}
            urlToImage={article.image_url}
            publishedAt={article.published_at}
          />
        );
      })}
    </div>
  );
};
