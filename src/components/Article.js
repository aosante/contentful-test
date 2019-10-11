import React from "react";

const Article = props => {
  const {
    title,
    publishDate,
    content,
    author: {
      fields: {
        fullName,
        avatar: {
          fields: {
            file: { url }
          }
        }
      }
    },
    featuredImage: {
      fields: {
        file: { url: featuredUrl }
      }
    }
  } = props.article.fields;

  const date = new Date(publishDate);
  const formattedDate = `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`;
  console.log(featuredUrl);
  return (
    <article className="post">
      <div className="post-preview col-xs-10 no-gutter">
        <h2 className="">
          <a href="/hello-world/">{title}</a>
        </h2>
        <p>{content}</p>
        <img
          width="550"
          style={{ padding: "20px 0px" }}
          src={featuredUrl}
          alt=""
        />
        <p className="meta">
          <img width="50" src={url} alt="" className="user-icon user-1" />
          <a href=".author/andres/" className="mr-3">
            {fullName}
          </a>
          <time className="post-date" dateTime="2019-11-11">
            {formattedDate}
          </time>
        </p>
      </div>
    </article>
  );
};

export default Article;
