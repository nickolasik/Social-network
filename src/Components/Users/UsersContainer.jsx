import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    isFetchingToggle
} from '../../redux/reducers/Users_Page_Reducer';
import * as axios from 'axios';
import Users from "./Users";
import preloader from '../../images/preloader.svg';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isFetchingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.pageSize}`)
            .then(response => {
                this.props.isFetchingToggle(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.isFetchingToggle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.pageSize}`)
            .then(response => {
                this.props.isFetchingToggle(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <img src={preloader} alt="preloader" /> : null}
            </div>
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged} /></>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalUsersCount))
//         },
//         isFetchingToggle: (isFetching) => {
//             dispatch(isFetchingActinCreator(isFetching))
//         }
//     }
// };


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    isFetchingToggle
})(UsersContainer);