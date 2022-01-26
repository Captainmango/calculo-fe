import { FormControl, FormHelperText, FormLabel, Input, Box, Button, forwardRef, BoxProps } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const LoginForm = () => (
    <Box w="80%">
        <form>
            <FormControl py="8">
                <FormLabel htmlFor='email' color="white">Email address</FormLabel>
                <Input variant="flushed" id='email' type='email' color="white" />
                <FormHelperText color="white">Your email will never be shared</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='password' color="white">Password</FormLabel>
                <Input variant="flushed" id='password' type='password' color="white" />
            </FormControl>
            <Box w="100%" pt="8" display="flex" justifyContent="space-evenly">
                <Link href="/sign-up" passHref>
                    <Button colorScheme="whiteAlpha" variant="outline">
                        Sign up
                    </Button>
                </Link>

                <Button colorScheme="whatsapp">
                    Log in
                </Button>

            </Box>
        </form>
    </Box>
)

export default LoginForm
