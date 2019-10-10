import React from "react";

const Article = () => {
  return (
    <article className="post">
      <div className="post-preview col-xs-10 no-gutter">
        <h2 className="">
          <a href="/hello-world/">Hello World</a>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          sequi, labore incidunt amet qui corporis voluptate sint excepturi
          error sed minus rerum aperiam cum possimus modi rem, tempora vero
          ratione!
        </p>

        <p className="meta">
          <img
            width="100"
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg"
            alt=""
            className="user-icon user-1"
          />
          <a href=".author/andres/" className="mr-3">
            Andres Osante
          </a>
          <time className="post-date" dateTime="2019-11-11">
            Nov 2019
          </time>
        </p>
      </div>
    </article>
  );
};

export default Article;
