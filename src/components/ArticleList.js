import React, { useEffect } from "react";
import Article from "./Article";
const contentful = require("contentful");

const ArticleList = () => {
  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "r8ld6fvnr39y",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "9kXQcDAVrtyzxBajkKusE-oA5sGc9ZKz8NPUjrjB6IQ"
    });
    client.getEntries({ content_type: "post" }).then(res => console.log(res));
  }, []);
  const articles = [];
  for (let i = 0; i < 6; i++) {
    articles.push(<Article key={i} />);
  }
  return (
    <React.Fragment>
      <h1>Article List</h1>
      {articles}
    </React.Fragment>
  );
};

export default ArticleList;
