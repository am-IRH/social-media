import {useState, useEffect} from "react"
import axios from "axios"
import "./home.css"

import Topbar from '../../component/topbar/Topbar.jsx'
import Sidebar from '../../component/sidebar/Sidebar.jsx'
import Feed from '../../component/feed/Feed.jsx'
import Rightbar from '../../component/rightbar/Rightbar.jsx'


const Home = () => {
  const [posts, setPost] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
      .then(d=>d.data)
      .then(setPost)
    axios.get("http://localhost:3001/users")
      .then(d=>d.data)
      .then(setUsers)
  }, []);

  return (
    <>
      <Topbar />
      {!posts? <p> loading </p> :
        <div className="homeContainer">
            <Sidebar posts={posts} users={users}/>
            <Feed posts={posts} users={users}/>
            <Rightbar users={users}/>
        </div>
    }
    </>
  )
}
export default Home