import axios from 'axios';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { RiFacebookBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData,setformDate]=useState({});
  const nav=useNavigate()

  const handleChange=(e)=>{
   
    const {value,name}=e.target;
    setformDate({
      ...formData,
      [name]:value,
    });

  };
    const handlelogin=async(e)=>{
      try{
        e.preventDefault();
        // console.log(formData)
        const {data}= await axios.post("https://insta-server.onrender.com/auth/login",formData)
        const user=data[0]
        localStorage.setItem("userid",user["_id"])
        // console.log(data[0]);
        nav("/feed")

      }
      catch(err){
             if(err.response.status===401){
                alert("invaild user ")
             }
      }
    
      
    }

    
  return (
    <div>
    
       {/* <div className="outer">
        <form>
          <div className="logo">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>
          </div>
          <div className="userform">
         
        <input type="text" name="username" onChange={handleChange} placeholder="enter username"/><br/><br/>
        <input type="text" name='password' onChange={handleChange} placeholder="passowrd"/><br/><br/>
        <button onClick={handlelogin} className="loginbtn">Login</button>
          
          
          
          
          
           <p style={{fontSize:"14px", color:"gray",marginTop:"10px"}}>OR</p>
            <p></p>
            <a className='fb'>Log in with Facebook</a>
            <p style={{fontSize:"14px", color:"gray",marginTop:"10px"}}>Forgot password?</p>
       </div>
        </form>
    
       </div>

       <div className="secondouter">
        <p style={{textAlign:"center"}}>Don't have an account?   </p><Link to="/signup"><a href='' className='fb1'>Sign up</a></Link>
       </div>
      

  */}

<Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <Stack align={"center"}>
              <Image src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
            </Stack>

            <FormControl id="email" isRequired>
              <Input
                fontSize={"md"}
                name="username"
                onChange={handleChange}
                type="text"
                placeholder="Phone number,Username, or email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  name="password"
                  onChange={handleChange}
                  placeholder="password"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={handlelogin}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Log In
              </Button>
            </Stack>

           
            <Text textAlign={'center'} color={'gray.300'}>or</Text>
            
            <Stack textAlign={"center"}>
              <Button
                w={"100%"}
                bg={"none"}
                color={"blue.500"}
                _hover={{
                  bg: "white.500",
                }}
                leftIcon={<RiFacebookBoxFill />}
              >
                Login with Facebook
              </Button>
              <Text color={"blue.400"}>
                Forget Password?
              </Text>
            </Stack>

            <hr />
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account? <Link to="/signup" ><Text color={"blue.400"}> Sign up</Text></Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </div>

        
       
        
  

 
  
  )
}

export default Login