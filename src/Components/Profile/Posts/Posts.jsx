import React from "react";
import style from './Posts.module.css';

const Post = (props) => {
    return (
        <li className={style.Post}>
            {props.postText}
        </li>
    );
};

export default Post;