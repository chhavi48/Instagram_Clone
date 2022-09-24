import {
  Avatar,
  Flex,
  Text,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
 Image,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {  AiOutlineSetting } from "react-icons/ai";
import {  CgProfile } from "react-icons/cg";
import {  BsGrid3X3,BsFillPlayFill,BsBookmark,BsThreeDots } from "react-icons/bs";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";

const Profile = () => {
    const [like,setLike] = useState(false);
    const [feeds,setFeeds]=useState([])


useEffect(()=>{
    const userId=localStorage.getItem("userid")
       axios
       .get(`https://protected-island-08310.herokuapp.com/profile/${userId}/feed`)
       .then(({data})=>{
          setFeeds(data)
          console.log(data)
       })
   },[])
   
  return (
    <>
      <Navbar/>
      <Container mt={10}>
        <Flex justifyContent={"sapce-around"} gap={[10,40]}>
          <Avatar src="https://avatars.githubusercontent.com/u/77965216?v=4" size={"2xl"} />
          <Box justifyContent={"center"}>
            <Flex justifyContent={"sapce-betweeen"} gap={4}>
              <Text fontSize={"2xl"} fontWeight={"hairline"}>
                {" "}
                chhavi_srivastvav
              </Text>
              <Button bg={"none"} border={"1px solid"} size={"sm"}>
                Edit Profile
              </Button>
              <IconButton bg={"none"} icon={<AiOutlineSetting />} />
            </Flex>
            <Flex justifyContent={"sapce-between"} gap={4}>
              <Text>{feeds.length} posts</Text>
              <Text>11M followers</Text>
              <Text>1 following</Text>
            </Flex>
            <Stack>
                <Text fontWeight={'semibold'}>Chhavi srivastva</Text>
                <Text>Full-stack web developer</Text>
                <Text>single</Text>
                <Text color={'blue.400'}><a href="https://chhavi-srivastav-portfolio-cs.vercel.app/">Portfolio</a></Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
      <Box
      justifyContent={"center"}
      w={["30rem", "40rem","40rem","50rem"]}
      mx={"auto"}
      my={4}
    //   border={"1px solid"}
    //   borderColor={"#d8d8d8"}
      p={4}
      rounded={20}
    >
      <Flex justifyContent={"space-between"} mt={4}>
        <Box >

        <Avatar
          src="https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHw%3D&w=1000&q=80"
          size={"lg"}
          border={"3px solid gray"}
        //   borderRightColor={"orange.500"}
        //   borderLeftColor={"pink.400"}
        //   borderTopColor={"pink.500"}
        //   borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>Highlights </Text>
          </Box>
        <Box >

        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNikreL2sfwO_bXUSwV-CDu8X129UqWRnEw&usqp=CAU"
          size={"lg"}
          border={"3px solid gray"}
        //   borderRightColor={"orange.500"}
        //   borderLeftColor={"pink.400"}
        //   borderTopColor={"pink.500"}
        //   borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>HIgh.code</Text>
          </Box>
        <Box >

        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcVsav21DEpIgasZB3Tr2yYPEYGEsrfsHf9zjKcyiIkTBbb4HBsAW4nlp3K7eys3P6RM&usqp=CAU"
          size={"lg"}
          border={"3px solid gray"}
  
          />
          <Text fontSize={'sm'}> College</Text>
          </Box>
        <Box >

        <Avatar
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/thisisengineering-raeng-8hgmG0_1200x768.jpeg?rQf8ZejQXo9WPB2ScwPqmaH8VjBNOjA2&size=770:433"
          size={"lg"}
          border={"3px solid gray"}
        //   borderRightColor={"orange.500"}
        //   borderLeftColor={"pink.400"}
        //   borderTopColor={"pink.500"}
        //   borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}> @ let's code</Text>
          </Box>

        <Box >

        <Avatar
          src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg"
          size={"lg"}
          border={"3px solid gray"}
        //   borderRightColor={"orange.500"}
        //   borderLeftColor={"pink.400"}
        //   borderTopColor={"pink.500"}
        //   borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>Programmer</Text>
          </Box>
        <Box>
          <Avatar
            src="https://avatars.githubusercontent.com/u/94439105?v=4"
            size={"lg"}
            border={"3px solid gray"}
            // borderColor={'gray.200'}
            // borderRightColor={"orange.500"}
            // borderLeftColor={"pink.400"}
            // borderTopColor={"pink.500"}
            // borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>Shoobie</Text>
        </Box>
      </Flex>
    </Box>
    <Box mx={[10,20,40,40,'20rem',"30rem"]}>

    <hr />
    <Flex justifyContent={'space-around'}>
        <Button bg={'none'} _hover={'white'} ><BsGrid3X3 /> POSTS</Button>
        <Button bg={'none'} _hover={'white'} ><BsFillPlayFill/>Reels</Button>
        <Button bg={'none'} _hover={'white'} ><BsBookmark/>Saved</Button>
        <Button bg={'none'} _hover={'white'} ><CgProfile/>Tagged</Button>
    </Flex>
<SimpleGrid columns={3} spacing={[2,4,8]}>
{feeds.map(f=>
        
      
         <Box>
           <Image
             w={"250px"}
             h={"250px"}
             src={`https://protected-island-08310.herokuapp.com/static/${f.image}`}
           />
         </Box>
         
      
       )}
</SimpleGrid>
    </Box>
    </>
  );
};

export default Profile;
