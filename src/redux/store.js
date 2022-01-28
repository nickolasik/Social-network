import dialogsReducer from './reducers/Dialog_Page_Reducer';
import profileReducer from './reducers/Profile_Page_Reducer';


let store = {
    _state: {
        dialogsPage: {
            messagesData: [
                { id: 1, body: 'Hi' },
                { id: 2, body: 'Whats up' },
                { id: 3, body: 'Hows it going on?' },
                { id: 4, body: 'Yo!' },
                { id: 5, body: 'Yo!' },
                { id: 6, body: 'Yo!' },
                { id: 6, body: 'Yo!' },
                { id: 6, body: 'Yo!' },
                { id: 6, body: 'Yo!' }
            ],
            dialogsData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Valera' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Roma' },
                { id: 5, name: 'Liza' },
                { id: 6, name: 'Dasha' }
            ],
            newMessageBody: ''
        },
        profilePage: {
            postsData: [
                { id: 1, text: 'Hi', countLikes: 0 },
                { id: 2, text: 'This is my firs post!', countLikes: 0 },
                { id: 3, text: 'It is amazing', countLikes: 0 },
                { id: 4, text: 'I am here again', countLikes: 0 },
                { id: 5, text: 'Yo!', countLikes: 0 },
                { id: 6, text: 'Yo!', countLikes: 0 }
            ],
            newPostText: 'IT kamasutra'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state has changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;
