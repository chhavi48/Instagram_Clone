
import Navbar from './Navbar'
import StoryReel from './StoryReel'
import "./Feed.css"
import Post from './Post'
import Sidebar from './Sidebar'


const Feed = () => {
 
  
  return (
    <div className='feeddesign'>
      
    <Navbar/>
 
     <div className="feed">
       <StoryReel/>
     </div>
     <Sidebar/>
      <Post/>

    </div>
  )
}

export default Feed