import React from "react";
import { connect } from "frontity";

const Loading = () => {
  
  return (
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default connect(Loading);
