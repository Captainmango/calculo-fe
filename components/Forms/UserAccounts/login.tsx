import { FormControl, FormHelperText, FormLabel, Input, Box, Button, Container, ButtonGroup, Center } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const LoginForm = () => (
    <Container centerContent>
        <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
        <Box w="80%">
            <form>
                <FormControl py="8">
                    <FormLabel htmlFor='email' color="white">Email address</FormLabel>
                    <Input variant="flushed" id='email' type='email' color="white" />
                </FormControl>
                <FormControl pb="8">
                    <FormLabel htmlFor='password' color="white">Password</FormLabel>
                    <Input variant="flushed" id='password' type='password' color="white" />
                </FormControl>
                <Center>
                    <ButtonGroup spacing="8" py="8">
                        <Link href="/users/signup" passHref>
                            <Button colorScheme="whiteAlpha" variant="outline">
                                Sign up
                            </Button>
                        </Link>
                        <Button colorScheme="whatsapp">
                            Log in
                        </Button>
                    </ButtonGroup>
                </Center>
            </form>
        </Box>
    </Container>
)

export default LoginForm
