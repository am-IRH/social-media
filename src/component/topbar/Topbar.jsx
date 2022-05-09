import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">AMIR</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="search for friend,post or videos" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLink"> 
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div>
            <div className="topbarIcons">
              <div className="topbarIconsItem">
                <Person />
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconsItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconsItem">
                <Notifications />
                <span className="topbarIconBadge">3</span>
              </div>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar