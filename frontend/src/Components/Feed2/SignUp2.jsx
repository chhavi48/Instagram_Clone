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
  Link,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { RiFacebookBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export default function SignUp2() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const nav = useNavigate();

  const handleuserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (username && password) {
      setEnable(true);
    }
  }, [username, password]);
  const handleSubmit = async () => {
    const payload = {
      username,
      password,
    };
    await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (username.length != 0 && password.length != 0) {
      alert("register successfully");
      nav("/");
    }
    if (username.length == 0 && password.length == 0) {
      alert("please sigup");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {/* <HStack> */}
            <Stack align={"center"} pb={4}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                <Image src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
              </Heading>
              <Text
                fontSize={"lg"}
                fontWeight={"semibold"}
                textAlign={"center"}
                color={"gray.400"}
              >
                Sign up to see photos and videos from your friends.
              </Text>
              <Button 
                w={"100%"}
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                leftIcon={<RiFacebookBoxFill/>}
              >
                Login with Facebook
              </Button>
            </Stack>
              <hr />
            {/* <Box pt={4}>
              <FormControl id="firstName" isRequired>
                <Input type="text" placeholder="Mobile Number or Email" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <Input type="text" placeholder="Full Name" />
              </FormControl>
            </Box> */}

            <FormControl id="email" isRequired>
              <Input
                value={username}
                onChange={handleuserChange}
                type="email"
                placeholder="Username"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
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
            <Box>
              <Text fontSize={"sm"} fontWeight={""} textAlign={"center"}>
                People who use our service may have uploaded your contact
                information to Instagram. Learn More
              </Text>
              <Text fontSize={"sm"} fontWeight={""} textAlign={"center"}>
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </Text>
            </Box>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                disabled={enable ? false : true}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Have an account? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
