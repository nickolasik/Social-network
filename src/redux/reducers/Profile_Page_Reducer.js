const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialstate = {
    postsData: [
        { id: 1, text: 'Hi', countLikes: 0 },
        { id: 2, text: 'This is my firs post!', countLikes: 0 },
        { id: 3, text: 'It is amazing', countLikes: 0 },
        { id: 4, text: 'I am here again', countLikes: 0 },
        { id: 5, text: 'Yo!', countLikes: 0 },
        { id: 6, text: 'Yo!', countLikes: 0 }
    ],
    newPostText: 'IT kamasutra'
};

const profileReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                countLikes: 0
            };
            // state.postsData.push(newPost);
            // return state;
            state.newPostText = '';
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText;
            // return state;
            return {
                ...state, newPostText: action.newText
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;
