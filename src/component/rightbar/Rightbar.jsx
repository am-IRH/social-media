import './rightbar.css'
import Online from "../online/Online"

const Rightbar = ({ users, profile }) => {

	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img src="assets/gift.png" alt="" className="birthdayImg" draggable="false" />
					<span className="birthdayText">
						{" "}
						<b>Polo Foster </b>and <b>3 other friends</b> have a birthday today.
					</span>
				</div>
				<img src="assets/ad.png" alt="" className="rigthbarAd" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">

					{!users ? <p>loading</p> : users.map(u => {
						return <Online key={u.id} user={u} />
					})}
				</ul>
			</>
		)
	}

	const ProfileRightbar = () => {
		return (
			<>
			<h4 className='rightTitle'>User information</h4>
			<div className="rightbarInfo">
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">City:</span>
					<span className="rightbarInfoValue">New York</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">from:</span>
					<span className="rightbarInfoValue">Madrid</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">Relationship:</span>
					<span className="rightbarInfoValue">Single</span>
				</div>
			</div>
			<h4 className="rightbarTitle">User friends</h4>
			<div className="rightbarFollowings">
				<div className="rightbarFollowing">
					<img src="assets/person/1.jpeg" alt="person" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Car</span>
				</div>
				<div className="rightbarFollowing">
					<img src="assets/person/1.jpeg" alt="person" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Car</span>
				</div>
				<div className="rightbarFollowing">
					<img src="assets/person/1.jpeg" alt="person" className="rightbarFollowingImg" />
					<span className="rightbarFollowingName">John Car</span>
				</div>
			</div>
			</>
		)
	}
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	)
}

export default Rightbar