import "./profile.css"
import { useState, useEffect } from "react"
import Topbar from '../../component/topbar/Topbar.jsx'
import Sidebar from '../../component/sidebar/Sidebar.jsx'
import Feed from '../../component/feed/Feed.jsx'
import Rightbar from '../../component/rightbar/Rigthbar.jsx'
import axios from "axios"

const Profile = () => {
	const [posts, setPost] = useState(null);
	const [users, setUsers] = useState(null);

	useEffect(() => {
		axios.get("http://localhost:3001/posts")
			.then(d => d.data)
			.then(setPost)
		axios.get("http://localhost:3001/users")
			.then(d => d.data)
			.then(setUsers)
	}, [])
	return (
		<>
			<Topbar />
			{!posts ? <p> loading </p> :
				<div className="profile">
					<Sidebar posts={posts} users={users} />
					<div className="profileRight">
						<div className="profileRightTop">
							<div className="profileCover">
								<img className="profileCoverImg" src="assets/post/3.jpeg" />
								<img className="profileUserImg" src="assets/person/7.jpeg" />
							</div>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">safak Kocaoglu</h4>
							<span className="profileInfoDesc">hello my Friends</span>
						</div>
						<div className="profileRightBottom">
						<Feed posts={posts} users={users} />
						<Rightbar users={users} profile={true}/>
						</div>
						
					</div>
				</div>
			}
		</>
	)
}

export default Profile


