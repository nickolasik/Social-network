import { connect } from "react-redux";
import Profile from "./Profile";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/reducers/Profile_Page_Reducer';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        update: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        add: () => {
            dispatch(addPostActionCreator())
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);