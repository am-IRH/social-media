import React from 'react'

const Online = ({user}) => {
	return (
		<li className="rightbarFriend">
			<div className="rightbarProfileImgContainer">
				<img src="assets/person/3.jpeg" alt="" className="rigthbarProfileImg" />
				<span className="rigthbarOnline"></span>
			</div>
			<span className="rigthbarUsername">{user.username}</span>
		</li>
	)
}

export default Online