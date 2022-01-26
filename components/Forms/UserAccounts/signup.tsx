import { Container, Box, FormControl, FormLabel, Input, FormHelperText, Button, HStack } from '@chakra-ui/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

const SignUpForm = () => {
    return (
        <Container centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
            <Box w="80%">
                <form>
                    <HStack>
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
                    <Box w="100%" pt="8" display="flex" justifyContent="space-evenly">
                        <Link href="/users/login" passHref>
                            <Button colorScheme="whiteAlpha" variant="outline">
                                Log in
                            </Button>
                        </Link>

                        <Button colorScheme="whatsapp">
                            Log in
                        </Button>

                    </Box>
                </form>
            </Box>
        </Container>
    )
};

export default SignUpForm;
