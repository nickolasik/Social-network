const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE';

const initialstate = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};


const usersReducer = (state = initialstate, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: [ ...action.users ]}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.newCurrentPage}
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount}
        case IS_FETCHING_TOGGLE:
            return { ...state, isFetching: action.isFetching}
        default:
            return state;
    }
};

export const follow = (userId) => {
    return { type: FOLLOW, userId }
};

export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
};

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPage = (newCurrentPage) => {
    return { type: SET_CURRENT_PAGE, newCurrentPage }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
}

export const isFetchingToggle = (isFetching) => {
    return { type: IS_FETCHING_TOGGLE, isFetching }
}

export default usersReducer;
