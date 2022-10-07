import { Container, Box, FormControl, FormLabel, Input, FormHelperText, Button, HStack, ButtonGroup, Center, FormErrorMessage } from '@chakra-ui/react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { useRegisterUserQuery } from '../../../queries/users/hooks';
import { useSignupFormHandler } from '../Handlers/useSignupFormHandler';

const SignUpForm = () => {
    const router = useRouter()

    const onSuccess = () => {
        router.push("/expenses")
        toast.success("Created account and logged in successfully")
    }
    const onError = () => {
    }

    const signupFormHandler = useSignupFormHandler()
    const { refetch } = useRegisterUserQuery(onSuccess, onError, signupFormHandler.values)

    const handleSubmit = () => {
        signupFormHandler.handleSubmit()
        refetch()
        signupFormHandler.resetForm()
    }
    return (
        <Container centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
            <Box w="80%">
                <form>
                    <HStack spacing="8">
                        <FormControl py="8">
                            <FormLabel htmlFor='firstName' color="white">First Name</FormLabel>
                            <Input variant="flushed" id='firstName' type='firstName' color="white" {...signupFormHandler.getFieldProps("firstName")} />
                            <FormErrorMessage pos="fixed">{signupFormHandler.errors.firstName}</FormErrorMessage>
                        </FormControl>
                        <FormControl py="8">
                            <FormLabel htmlFor='lastName' color="white">Last Name</FormLabel>
                            <Input variant="flushed" id='lastName' type='lastName' color="white" {...signupFormHandler.getFieldProps("lastName")} />
                            <FormErrorMessage pos="fixed">{signupFormHandler.errors.lastName}</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <FormControl pb="8">
                        <FormLabel htmlFor='email' color="white">Email</FormLabel>
                        <Input variant="flushed" id='email' type='email' color="white" {...signupFormHandler.getFieldProps("email")} />
                        {
                            false && signupFormHandler.errors.email
                                ? <FormHelperText color="white">Your email will never be shared</FormHelperText>
                                : <FormErrorMessage pos="fixed">{signupFormHandler.errors.email}</FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl pb="8">
                        <FormLabel htmlFor='password' color="white">Password</FormLabel>
                        <Input variant="flushed" id='password' type='password' color="white" {...signupFormHandler.getFieldProps("password")} />
                        <FormErrorMessage pos="fixed">{signupFormHandler.errors.password}</FormErrorMessage>
                    </FormControl>
                    <Center>
                        <ButtonGroup spacing="8" py="8">
                            <Link href="/" passHref>
                                <Button colorScheme="whiteAlpha" variant="outline">
                                    Go back
                                </Button>
                            </Link>

                            <Button onClick={handleSubmit} colorScheme="whatsapp">
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
