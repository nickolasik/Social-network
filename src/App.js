import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import News from './Components/News/News.jsx';
import Music from './Components/Music/Music.jsx';
import Settings from './Components/Settings/Settings.jsx';
import UsersContainer from './Components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className="App">
      <Header imgName="logo" />
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/Profile' element={<ProfileContainer
            store={props.store}
            dispatch={props.dispatch} />} />
          <Route path='/Dialogs' element={<DialogsContainer
              store={props.store}
              dispatch={props.dispatch} />} />
          <Route path='/Users' element={<UsersContainer
            store={props.store}
            dispatch={props.dispatch} />} />
          <Route path='/News' element={<News store={props.store} />} />
          <Route path='/Music' element={<Music store={props.store} />} />
          <Route path='/Settings' element={<Settings store={props.store} />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
