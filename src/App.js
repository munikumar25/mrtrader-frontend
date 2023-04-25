import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Home/Registration/Login';
import Registration from './Home/Registration/Registration';
import Dashboard from './Dashboard/Dashboard';
import AdminDashboard from './Dashboard/admin/AdminDashboard';
import Video from './Dashboard/admin/Video';
import Audio from './Dashboard/admin/Audio';
import UserDashboard from './Dashboard/user/UserDashboard';
import VideoList from './Dashboard/user/VideoList';
import AudioList from './Dashboard/user/AudioList';
import Users from './Dashboard/admin/Users';
import VideoPlayer from './Dashboard/user/VideoPlayer';
import Player from './Dashboard/admin/Player';
import UploadUserList from './Dashboard/admin/UploadUserList';
import Comments from './Dashboard/admin/Comments';
import Polls from './Dashboard/admin/Polls';
import UDashboard from './Dashboard/UserDashboard';
import Profile from './Dashboard/user/Profile';
import Poll from './Dashboard/user/Polls';
import UserNotAccess from './Dashboard/UserNotAccess';
import ActiveUsers from './Dashboard/admin/ActiveUsers';
import PendingUsers from './Dashboard/admin/PendingUsers';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="dashboard/" element={<Dashboard />} >
          <Route path="" element={<AdminDashboard />} />
          <Route path="videos" element={<Video />} />
          <Route path="audios" element={<Audio />} />
          <Route path="users" element={<Users />} />
          <Route path="active_users" element={<ActiveUsers />} />
          <Route path="pending_users" element={<PendingUsers />} />
          <Route path="player" element={<Player />} />
          <Route path="upload" element={<UploadUserList />} />
          <Route path="comments" element={<Comments />} />
          <Route path="polls" element={<Polls />} />
          <Route path="*" element={<UserNotAccess />} />
        </Route>
        <Route path="udashboard" element={<UDashboard />} >
          <Route path="" element={<UserDashboard />} />
          <Route path="videolist" element={<VideoList />} />
          <Route path="audiolist" element={<AudioList />} />
          <Route path="profile" element={<Profile />} />
          <Route path="video_player/:id" element={<VideoPlayer />} />
          <Route path="poll" element={<Poll />} />
          <Route path="*" element={<UserNotAccess />} />
        </Route>
        <Route path="*" element={<UserNotAccess />} />
      </Routes>
    </div>
  );
}

export default App;
