import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"
import'./feed.css'

const Feed = ({posts, users}) => {
	return (
		<>
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{!posts ? <p>loading </p> : posts.map(p => {
					const user = users.filter(u=> u.id === p?.userId)[0];
					return <Post key={p.id} post={p} user={user}/>
				})}
			</div>
		</div>
		</>
	)
}

export default Feed