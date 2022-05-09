import {useState} from "react"
import "./post.css"
import {MoreVert} from "@mui/icons-material"

const Post = ({post, user}) => {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		setLike(l => isLiked ? l-1 : l+1);
		setIsLiked(il => !il);
	}
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img className="postProfileImg" src={post.photo} />
						<span className="postUsername">{user.username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRigth">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img className="postImg" src={user.profilePicture} draggable="false"/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
						<img src="assets/heart.png" alt="" className="likeIcon" />
						<span className="postLikeCounter">{like} people liked it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comments</span>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Post