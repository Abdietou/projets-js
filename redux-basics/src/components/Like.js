import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikes } from "../actions/post.action";
import { addUserLikes } from "../actions/user.action";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post.id,
    };

    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      age: user[0].age,
      id: user[0].id,
    };

    dispatch(addLikes(postData));
    dispatch(addUserLikes(userData));
  };
  return (
    <div>
      <img
        src="./icons/clap.png"
        className="clap"
        alt="clap"
        onClick={handleLike}
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
