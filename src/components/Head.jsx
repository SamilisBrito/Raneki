import React, { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title === "Produtos" ? "Raneki" : "Raneki | " + props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.descripition);
  }, [props]);
  return <div></div>;
};

export default Head;
