import React,{useRef, ReactNode,useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,

  useDisclosure,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import axios from "axios";

import { AiFillHome,AiOutlineSetting } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { VscDiffAdded,VscReport } from "react-icons/vsc";
import { ImCompass2 } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { HiSwitchHorizontal } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";
import { Link as RLink } from "react-router-dom";

export default function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setdata]=useState({});
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const inputfile=useRef();
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setdata({
          ...data,
          [name]:value,
        })
       }
      
        const handleSubmit=(e)=>{
          e.preventDefault();
         
      
      
          const formdata=new FormData();
          formdata.append("title",data.title)
          formdata.append("description",data.description)
          formdata.append("tags",data.tags)
          formdata.append("image",inputfile.current.files[0]);
           const userId=localStorage.getItem("userid")
          
          axios.post(`http://localhost:8000/profile/${userId}/feed`,formdata,{
            headers:{"Content-Type":"multipart/form-data"},
            
          })
      }
  
  return (
    <>
      <Box px={20} py={2} borderBottom={"1px solid"} borderColor={"#d8d8d8"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="logo"
            />
          </Box>

          <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
            <InputGroup display={['none','none','none','block']}>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearch color="gray.300" />}
              />
              <Input
                bgColor={"#ececec"}
                placeholder="Search"
                fontSize={"xl"}
                
                w={["4rem","4rem","16rem"]}
              />
            </InputGroup>
          </HStack>

          <Flex alignItems={"center"} justifyContent={"space-between"} gap={6}>
            <RLink to="/feed"><IconButton
              bgColor={"white"}
              _hover={"white"}
              icon={<AiFillHome size={"2rem"} />}
            /></RLink>
            <IconButton
              bgColor={"white"}
              _hover={"white"}
              icon={<RiMessengerLine size={"2rem"} />}
            />
            <IconButton
            as={"button"}
             onClick={onOpen}
              bgColor={"white"}
              _hover={"white"}
              icon={<VscDiffAdded size={"2rem"} />}
            />
            <IconButton
              bgColor={"white"}
              _hover={"white"}
              icon={<ImCompass2 size={"2rem"} />}
            />
            <IconButton
              bgColor={"white"}
              _hover={"white"}
              icon={<FiHeart size={"2rem"} />}
            />

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://avatars.githubusercontent.com/u/77965216?v=4"
                  }
                />
              </MenuButton>
              <MenuList>
                <RLink to="/profile">
                <MenuItem icon={<CgProfile size={20}/>}> Profile</MenuItem>
                </RLink>
                <MenuItem icon={<BsBookmark size={20}/>}>Saved</MenuItem>
                <MenuItem icon={<AiOutlineSetting size={20}/>}>Settings</MenuItem>
                <MenuItem icon={<VscReport size={20}/>}>Report a problem</MenuItem>
                <MenuItem icon={<HiSwitchHorizontal size={20}/>}>Switch Accounts</MenuItem>
                <MenuDivider />
              <RLink to="/logout"><MenuItem >Log Out</MenuItem></RLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
          <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text"  name="title"  onChange={handleChange} ref={initialRef} placeholder='Enter Title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input  type="text" name="description" onChange={handleChange} placeholder='Enter Description' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tags</FormLabel>
              <Input type="text" name="tags" onChange={handleChange} placeholder='Enter Tags' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input placeholder='' ref={inputfile} type='file' p={2} border={'none'}/>
            </FormControl>
            
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} type={"submit"} value={"new post"} colorScheme='blue' mr={3}>
              Share
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
            </form>
      </Modal>
      </Box>
    </>
  );
}
