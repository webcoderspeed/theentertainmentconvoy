import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import PostPage from './screens/PostPage';
import PostDetailPage from './screens/PostDetailPage';
import ProfilePage from './screens/ProfilePage';
import VideoPage from './screens/VideoPage';
import CreatePost from './components/CreatePost';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import UserEditScreen from './screens/UserEditScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/posts/*' component={PostPage} />
          <Route path='/post/*/:id' component={PostDetailPage} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/videos' component={VideoPage} />
          <Route path='/createpost' component={CreatePost} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/user/edit/*/:userId' component={UserEditScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
