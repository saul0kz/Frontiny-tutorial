import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <ul class="nav flex-column">
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <li key={item.id} class="nav-item">
            <a class="nav-link active" aria-current="page" href={post.link}>
              {post.title.rendered}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default connect(List);
