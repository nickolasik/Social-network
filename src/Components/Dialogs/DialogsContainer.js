import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/reducers/Dialogs_Page_Reducer';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        update: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        send: () => {
            dispatch(sendMessageCreator())
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);