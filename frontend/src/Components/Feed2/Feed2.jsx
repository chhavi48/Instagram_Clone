import React from 'react'
import StoryReel from './StoryReel'
import Navbar from './Navbar'
import {  Flex} from "@chakra-ui/react";
import Sidebar from '../Sidebar';
import Post from '../Post';
const Feed2 = () => {
  return (
    <div>
      <Navbar/>
      
      <StoryReel/>
       
      <Post/>
    </div>
  )
}

export default Feed2