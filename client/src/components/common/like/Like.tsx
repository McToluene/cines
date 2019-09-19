import React from "react";

interface ILike {
  liked: boolean | undefined;
  onLike: () => any;
}

const Like: React.FC<ILike> = ({ liked, onLike }) => {
  let classes = "heart icon";
  classes += !liked ? " outline" : "";
  return (
    <i style={{ cursor: "pointer" }} onClick={onLike} className={classes} />
  );
};
export default Like;
