import React from "react";
import Post from "./Posts/Posts";
import style from './Profile.module.css';

const Profile = (props) => {

    // let newPostElement = React.createRef();

    // let addPost = () => {
    //     props.add();
    // }

    let onPostChange = (evt) => {
        let text = evt.target.value;
        props.update(text);
    }
    let postValue = props.profilePage.newPostText;
    let posts = props.profilePage.postsData.map(post => <Post postText={post.text} /> );

    return (
        <div className={style.ProfileWrapper}>
            <h2>Profile</h2>
            <div>
                <textarea
                    onChange={onPostChange}
                    value={postValue}
                    cols="30"
                    rows="10">
                </textarea>
                <button onClick={() => props.add()} >
                    Add Post
                </button>
            </div>
            <ul className={style.UserPosts}>
                {posts}
            </ul>
        </div>
    );
};

export default Profile;