import React from "react";
import styles from './styles.module.css';
import avatar from './../../images/avatar.jpeg';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return (<span
                        className={props.currentPage === page ? styles.selectedPage : styles.page}
                        onClick={evt => props.onPageChanged(page)}>
                        {page}
                    </span>)
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={styles.userAvatar} src={user.photos.small !== null ? user.photos.small : avatar} alt="avatar" />
                        </div>
                        <div>
                            {
                                user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}> unfollow </button>
                                    : <button onClick={() => props.follow(user.id)}> follow </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div >
    )
}

export default Users;