import React from "react";
import style from './Dialogs.module.css';

const Dialogs = (props) => {

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.send();
    }

    let onNewMessageBodyChange = (evt) => {
        let body = evt.target.value;
        props.update(body);
    }

    let dialogsList = props.dialogsPage.dialogsData.map(dialog => <li> {dialog.name} </li> );

    let messagesList = props.dialogsPage.messagesData.map(message => <li> {message.body} </li> );

    return (
        <div className={style.DialogsWrapper}>
            <ul className={style.DialogList}>
                {dialogsList}
            </ul>
            <div className={style.DialogWindow}>
                <ul className="messageList">
                    {messagesList}
                </ul>
                <div>
                    <textarea
                    onChange={onNewMessageBodyChange}
                    value={newMessageBody}
                    placeholder="Enter your message">
                    </textarea>
                    <button onClick={onSendMessageClick} >Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;