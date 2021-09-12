import React from "react";
import { connect } from "frontity";

const Error = ({state}) => {
  
  return (
    <div class="alert alert-danger" role="alert">
      ERRO 404 <em>{state.router.link}</em> cannot be found.
    </div>
  );
};

export default connect(Error);
