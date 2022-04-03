import { FormControl, FormHelperText, FormLabel, Input, Box, Button, Container, ButtonGroup, Center, FormErrorMessage } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useLoginFormHandler } from '../Handlers/useLoginFormHandler'
import { useLoginUserQuery } from '../../../queries/users/hooks'
import { useRouter } from 'next/router'

const LoginForm = () => {
    const router = useRouter()
    const onSuccess = () => {
        router.push("/expenses")
        toast.success("Logged in successfully")
    }
    const onError = () => {
    }

    const loginFormHandler = useLoginFormHandler()
    const { refetch } = useLoginUserQuery(onSuccess, onError, loginFormHandler.values)

    const handleSubmit = () => {
        loginFormHandler.handleSubmit()
        refetch()
        loginFormHandler.resetForm()  
    }

    return (
        <Container centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
            <Box w="80%">
                <form>
                    <FormControl
                        //@ts-ignore
                        isInvalid={loginFormHandler.touched.email && loginFormHandler.errors.email}
                        py="8">
                        <FormLabel htmlFor='email' color="white">Email address</FormLabel>
                        <Input variant="flushed" id='email' type='email' color="white" {...loginFormHandler.getFieldProps("email")} />
                        <FormErrorMessage pos="fixed">{loginFormHandler.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                        //@ts-ignore 
                        isInvalid={loginFormHandler.touched.password && loginFormHandler.errors.password}
                        pb="8">
                        <FormLabel htmlFor='password' color="white">Password</FormLabel>
                        <Input variant="flushed" id='password' type='password' color="white" {...loginFormHandler.getFieldProps("password")} />
                        <FormErrorMessage pos="fixed">{loginFormHandler.errors.password}</FormErrorMessage>
                    </FormControl>
                    <Center>
                        <ButtonGroup spacing="8" py="8">
                            <Link href="/users/signup" passHref>
                                <Button colorScheme="whiteAlpha" variant="outline">
                                    Sign up
                                </Button>
                            </Link>
                            <Button onClick={handleSubmit} colorScheme="whatsapp">
                                Log in
                            </Button>
                        </ButtonGroup>
                    </Center>
                </form>
            </Box>
        </Container>
    )
}

export default LoginForm
