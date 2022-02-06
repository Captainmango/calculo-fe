import { Container, Box, FormControl, FormLabel, Input, FormHelperText, Button, HStack, ButtonGroup, Center } from '@chakra-ui/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const SignUpForm = () => {
    return (
        <Container centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
            <Box w="80%">
                <form>
                    <HStack spacing="8">
                        <FormControl py="8">
                            <FormLabel htmlFor='firstName' color="white">First Name</FormLabel>
                            <Input variant="flushed" id='firstName' type='firstName' color="white" />
                        </FormControl>
                        <FormControl py="8">
                            <FormLabel htmlFor='lastName' color="white">Last Name</FormLabel>
                            <Input variant="flushed" id='lastName' type='lastName' color="white" />
                        </FormControl>
                    </HStack>
                    <FormControl pb="8">
                        <FormLabel htmlFor='email' color="white">Email</FormLabel>
                        <Input variant="flushed" id='email' type='email' color="white" />
                        <FormHelperText color="white">Your email will never be shared</FormHelperText>
                    </FormControl>
                    <FormControl pb="8">
                        <FormLabel htmlFor='password' color="white">Password</FormLabel>
                        <Input variant="flushed" id='password' type='password' color="white" />
                    </FormControl>
                    <Center>
                        <ButtonGroup spacing="8" py="8">
                            <Link href="/" passHref>
                                <Button colorScheme="whiteAlpha" variant="outline">
                                    Go back
                                </Button>
                            </Link>

                            <Button colorScheme="whatsapp">
                                Sign up
                            </Button>
                        </ButtonGroup>
                    </Center>
                </form>
            </Box>
        </Container>
    )
};

export default SignUpForm;
