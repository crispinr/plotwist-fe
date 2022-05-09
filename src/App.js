import { BrowserRouter as Router, 
         Routes, 
         Route,
        } from "react-router-dom";
import "./assets/scss/style.scss";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <>
      <Router>
          <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          </Routes>
      </Router>
    </>
  );
}

