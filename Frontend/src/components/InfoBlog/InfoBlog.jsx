import React, { useEffect, useState } from "react";
import "./InfoBlog.css";
import defaultImage from "../../assets/defaultNews.jpg";
import moreButton from "../../assets/read-more.png";

export default function InfoBlog() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {" "}
      <div className="top-heading-container">
        <div>
          <div className="Top-heading">Health News Hub</div>
          <div className="top-heading-description">
            Stay informed with the latest health news from around the world. Our
            curated selection of articles provides insights into the most recent
            developments in health and wellness, helping you stay updated with
            trustworthy and timely information.
          </div>
        </div>
      </div>
      {news ? (
        news.articles.map((item, index) => (
          <div key={index}>
            {" "}
            <div className="newsBlogflex">
              <img className="news-image" src={item.urlToImage} />
              <div className="news-card-mid">
                <div className="news-heading">{item.title}</div>
                <div className="news-author">
                  {" "}
                  Author: {item.author || "Unknown"}
                </div>
                <div className="news-description"> {item.description}</div>
              </div>
              <div className="readmore">
                <a
                  className="readmore"
                  href={item.url || defaultImage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="readmoreimage" src={moreButton} />
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
