const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const initialstate = {
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
};

const dialogsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                body: state.newMessageBody
            }
            // state.messagesData.push(newMessage);
            // return state;
            state.newMessageBody = '';
            return {
                ...state, messagesData: [...state.messagesData, newMessage]
            }
        default:
            return state;
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;