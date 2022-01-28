import React from "react";
import styles from './styles.module.css';
import avatar from './../../images/avatar.jpeg';
import * as axios from 'axios';


const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
        // props.setUsers(
        //     [
        //         { id: 1, avatarUrl: avatar, followed: true, name: 'Dmitriy', statu: 'I am the boss', location: { city: 'Minsk', country: 'Belarus' } },
        //         { id: 2, avatarUrl: avatar, followed: false, name: 'Nikolay', statu: 'I am the motherfucker', location: { city: 'Saint-Petersburg', country: 'Russia' } },
        //         { id: 3, avatarUrl: avatar, followed: true, name: 'Maria', statu: 'Hi there', location: { city: 'Moscow', country: 'Russia' } },
        //         { id: 4, avatarUrl: avatar, followed: false, name: 'Aleksandr', statu: 'Ho Ho Ho', location: { city: 'Moscow', country: 'Russia' } },
        //         { id: 5, avatarUrl: avatar, followed: false, name: 'Oleg', statu: 'Checking the beer', location: { city: 'Saint-Petersburg', country: 'Russia' } },
        //         { id: 6, avatarUrl: avatar, followed: true, name: 'Maxim', statu: 'Message me please', location: { city: 'Saint-Petersburg', country: 'Russia' } }
        //     ]
        // )
    }

    return (
        <div>
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
        </div>
    )
};

export default Users;