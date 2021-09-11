import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <Link link={post.link} key={item.id}>
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);
