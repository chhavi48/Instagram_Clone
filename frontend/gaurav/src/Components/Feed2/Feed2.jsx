import React from "react";
import StoryReel from "./StoryReel";
import Navbar from "./Navbar";
import { Flex,Stack } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Post2 from "./Post2";
const Feed2 = () => {
  return (
    <div>
      <Navbar />

      
      <Flex justifyContent={"center"} gap={8}>
        <Stack>

      <StoryReel />
        <Post2 />
        </Stack>

        <Sidebar ml={8} />
      </Flex>
    </div>
  );
};

export default Feed2;
