import React from "react";
import StoryReel from "./StoryReel";
import Navbar from "./Navbar";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Post2 from "./Post2";
const Feed2 = () => {
  return (
    <div>
      <Navbar />

      <StoryReel />
      <Flex justifyContent={'space-around'}>
    
        <Post2/>
       
      </Flex>
      <Sidebar ml={8}/>
    </div>
  );
};

export default Feed2;
