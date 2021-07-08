import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import PostPage from './screens/PostPage';
import PostDetailPage from './screens/PostDetailPage';
import ProfilePage from './screens/ProfilePage';
import VideoPage from './screens/VideoPage';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/posts/*' component={PostPage} />
          <Route path='/post/*/:id' component={PostDetailPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/videos' component={VideoPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
