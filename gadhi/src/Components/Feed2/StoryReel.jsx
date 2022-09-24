import { Box, Flex, Avatar ,Text} from "@chakra-ui/react";
import React from "react";

const StoryReel = () => {
  return (
    <Box
      justifyContent={"center"}
      w={["30rem", "40rem","40rem","50rem"]}
      mx={"auto"}
      my={4}
      border={"1px solid"}
      borderColor={"#d8d8d8"}
      p={4}
      rounded={20}
    >
      <Flex justifyContent={"space-between"}>
        <Box >

        <Avatar
          src="https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHw%3D&w=1000&q=80"
          size={"lg"}
          border={"3px solid "}
          borderRightColor={"orange.500"}
          borderLeftColor={"pink.400"}
          borderTopColor={"pink.500"}
          borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>Cascading </Text>
          </Box>
        <Box >

        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNikreL2sfwO_bXUSwV-CDu8X129UqWRnEw&usqp=CAU"
          size={"lg"}
          border={"3px solid"}
          borderRightColor={"orange.500"}
          borderLeftColor={"pink.400"}
          borderTopColor={"pink.500"}
          borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>Learn.code</Text>
          </Box>
        <Box >

        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcVsav21DEpIgasZB3Tr2yYPEYGEsrfsHf9zjKcyiIkTBbb4HBsAW4nlp3K7eys3P6RM&usqp=CAU"
          size={"lg"}
          border={"3px solid"}
          borderRightColor={"orange.500"}
          borderLeftColor={"pink.400"}
          borderTopColor={"pink.500"}
          borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}> @ Masai</Text>
          </Box>
        <Box >

        <Avatar
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202101/thisisengineering-raeng-8hgmG0_1200x768.jpeg?rQf8ZejQXo9WPB2ScwPqmaH8VjBNOjA2&size=770:433"
          size={"lg"}
          border={"3px solid"}
          borderRightColor={"orange.500"}
          borderLeftColor={"pink.400"}
          borderTopColor={"pink.500"}
          borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}> @ let's code</Text>
          </Box>

        <Box >

        <Avatar
          src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg"
          size={"lg"}
          border={"3px solid"}
          borderRightColor={"orange.500"}
          borderLeftColor={"pink.400"}
          borderTopColor={"pink.500"}
          borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>Programmer</Text>
          </Box>
        <Box>
          <Avatar
            src="https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=600"
            size={"lg"}
            border={"3px solid"}
            borderRightColor={"orange.500"}
            borderLeftColor={"pink.400"}
            borderTopColor={"pink.500"}
            borderBottomColor={"orange.400"}
          />
          <Text fontSize={'sm'}>Shoobie</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default StoryReel;
