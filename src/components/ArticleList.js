import React, { useState, useEffect } from "react";
import Article from "./Article";
const contentful = require("contentful");

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "r8ld6fvnr39y",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "9kXQcDAVrtyzxBajkKusE-oA5sGc9ZKz8NPUjrjB6IQ"
    });
    client.getEntries({ content_type: "post" }).then(res => {
      setArticles(res.items);
    });
  }, []);
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Surfing Spots</h1>
      {articles.map((article, i) => (
        <Article article={article} key={i} />
      ))}
    </React.Fragment>
  );
};

export default ArticleList;
