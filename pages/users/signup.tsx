import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Link } from '@chakra-ui/react';
import React from 'react';
import SignUpForm from '../../components/Forms/UserAccounts/signup';
import LandingPage from '../../components/Layout/Landing';

const SignUp = () => {
    return (
        <LandingPage>
            <SignUpForm />
        </LandingPage>
    )
};

export default SignUp;
