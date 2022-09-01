import { Avatar, Button, Flex, Stack ,Text} from '@chakra-ui/react'
import React from 'react'

 const Sidebar = () => {
  return (
    <Stack >
        <Stack gap={2} border={'1px solid '} rounded={8} p={4} borderColor={'gray.300'} w={'20rem'}>
        <Flex justifyContent={'space-between'}>
                <Avatar src='https://pbs.twimg.com/profile_images/1534381051732459520/UXLbk1u4_400x400.jpg'/>
                <Stack>
                <Text>
                    coding_girl😎😎
                </Text>
                <Text>
                    cod_gir
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Switch</Button>
            </Flex>
            <Text fontWeight='bold' color={'gray.500'}>Suggestions For You</Text>
            <Flex justifyContent={'space-between'}>
                <Avatar src='https://media.istockphoto.com/photos/the-code-is-on-a-laptop-on-a-wooden-table-in-front-of-the-window-in-picture-id1327335521?b=1&k=20&m=1327335521&s=170667a&w=0&h=Ary_K-k5jNmfhHKmhDm5meAT2DZYg0n5s_i9vcj9xrs='/>
                <Stack>
                <Text>
                     let's💁‍♀️code 
                </Text>
                <Text>
                    let's_code
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-AybHZabxynGdnqBCzynG7ISTax8Zgdu8Ti9nL25Ji5qrA5wWoKHiT1u0JvyfQt45Jw&usqp=CAU'/>
                <Stack>
                <Text>
                    @technical_code
                </Text>
                <Text>
                     techcode⚡
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vWn-MWnG5HmIsN6UXWJBwCZkk8PnBEyXq8a2wSmYuDF5mZqnwGNDn7ccIMjfGRYve80&usqp=CAU'/>
                <Stack>
                <Text>
                    code with ☕
                </Text>
                <Text>
                   coffee__
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBx9QmOk33i0bQZx1aH9eqF2Qx2R4KjA8RPLVyHhtiPzhrHr3GmwzHsztJkhr5_4KukU&usqp=CAU'/>
                <Stack>
                <Text>
                      techtalk
                </Text>
                <Text>
                      @techtalk
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ub2znXEDRbOZN9Fc-BJZYGDlgfL9xGOhZjdJLwU3Jp-_vy5lttHjZZzusTA_VZQvhfA&usqp=CAU'/>
                <Stack>
                <Text>
                   techknow_gamer
                </Text>
                <Text>
                    @techgame⚡
                </Text>
                </Stack>
                <Button bg={'none'} color={'blue.400'}>Follow</Button>
            </Flex>
     
        </Stack>


    </Stack>
  )
}
export default Sidebar