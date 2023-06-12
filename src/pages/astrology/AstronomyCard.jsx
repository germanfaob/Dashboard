import { useState, useEffect } from "react";
import axios from "axios";
import { AstronomyItem } from "./AstronomyItem";
import "./astronomycard.css";

// const NASA_KEY = "jnyUXAOkazc1si0pvAgQrCQly186E5SBCZVLbg03";

export function AstronomyCard() {
  const [astronomy, setAstronomy] = useState([]);

  useEffect(() => {
    const SEARCH_PARAM = "supernova";

    const getAstronomy = async () => {
      try {
        const response = await axios.get(
          `https://images-api.nasa.gov/search?q=${SEARCH_PARAM}&media_type=image`
        );
        setAstronomy(response.data.collection.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAstronomy();
  }, []);

  console.log(astronomy);

  return (
    <div className="astronomy-container">
      {astronomy.map((astronomyItem) => {
        return (
          <div key={astronomyItem.data[0].nasa_id} className="astronomy-row">
            <AstronomyItem
              titleImg={astronomyItem.data[0].title}
              imageNasa={astronomyItem.links[0].href}
              dateImg={astronomyItem.data[0].date_created}
              descriptionImg={astronomyItem.data[0].description}
            />
          </div>
        );
      })}
    </div>
  );
}
