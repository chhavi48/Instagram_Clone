import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { LinkedCamera } from "@mui/icons-material";
import axios from 'axios'
const Post2 = () => {
    const [like,setLike] = useState(false);
    const [feeds,setFeeds]=useState([])

  const handleLike = () => {
    if(like===false)
    {setLike(true)} 
     else{  
     setLike(false)
     }
};


useEffect(()=>{
    const userId=localStorage.getItem("userid")
       axios
       .get(`http://localhost:8000/profile/${userId}/feed`)
       .then(({data})=>{
          setFeeds(data)
          console.log(data)
       })
   },[])
   
  return (
    <>
    {feeds.map(f=>
         <Stack border={"1px solid"} rounded={8} borderColor={"gray.300"}>
         <Flex justifyContent={"space-between"} p={4}>
           <Flex gap={4}>
             <Avatar src="" />
             <Text fontWeight={"semibold"} mt={2} align={"center"}>
               Username
             </Text>
           </Flex>
           <BsThreeDots />
         </Flex>
         <Box>
           <Image
             w={"500px"}
             src="https://ph-files.imgix.net/bc943834-404b-4975-86f3-1b8705aefece.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&fit=max&dpr=1"
           />
         </Box>
         <Flex justifyContent={"space-between"} p={4}>
           <Flex gap={4}>
             
               <FavoriteBorderIcon />
             
             <ChatBubbleOutlineIcon />
             <SendIcon />
           </Flex>
           <BsBookmark />
         </Flex>
       </Stack> )}
    
    </>
  );
};

export default Post2;
