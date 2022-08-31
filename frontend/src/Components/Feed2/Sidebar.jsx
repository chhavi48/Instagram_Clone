import { Avatar, Button, Flex, Stack ,Text} from '@chakra-ui/react'
import React from 'react'

 const Sidebar = () => {
  return (
    <>
        <Stack gap={2} border={'1px solid '} rounded={8} p={4} borderColor={'gray.300'} w={'16rem'}>
        <Flex justifyContent={'space-between'}>
                <Avatar src=''/>
                <Stack>
                <Text>
                    User Name
                </Text>
                <Text>
                    Full Name
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Switch</Button>
            </Flex>
            <Text fontWeight='bold' color={'gray.500'}>Suggestions For You</Text>
            <Flex justifyContent={'space-between'}>
                <Avatar src=''/>
                <Stack>
                <Text>
                    User Name
                </Text>
                <Text>
                    Full Name
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src=''/>
                <Stack>
                <Text>
                    User Name
                </Text>
                <Text>
                    Full Name
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src=''/>
                <Stack>
                <Text>
                    User Name
                </Text>
                <Text>
                    Full Name
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src=''/>
                <Stack>
                <Text>
                    User Name
                </Text>
                <Text>
                    Full Name
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src=''/>
                <Stack>
                <Text>
                    User Name
                </Text>
                <Text>
                    Full Name
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
     
        </Stack>


    </>
  )
}
export default Sidebar