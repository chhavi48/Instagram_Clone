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
       .get(`https://insta-server.onrender.com/profile/${userId}/feed`)
       .then(({data})=>{
          setFeeds(data)
          console.log(data)
       })
   },[])
   
  return (
    <Stack gap={3} w="40rem" m={3}>
    {feeds.map((f,index)=>
         <Stack border={"1px solid"} rounded={8} borderColor={"gray.300"}>
         <Flex justifyContent={"space-between"} p={4}>
           <Flex gap={4}>
             <Avatar src="https://pbs.twimg.com/profile_images/1534381051732459520/UXLbk1u4_400x400.jpg" />
             <Text fontWeight={"semibold"} mt={2} align={"center"}>
                   {f.title}<br/>
                   {f.description}
                   

             </Text>
            
           </Flex>

           <BsThreeDots />
         </Flex>
      
         <Box>
           <Image
             w={"40rem"}
             src={`https://insta-server.onrender.com/static/${f.image}`}
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
         <span style={{color:"blue"}}>{f.tags}</span>
       </Stack> )}
    
    </Stack>
  );
};

export default Post2;
