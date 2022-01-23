import { Box, Container, Icon } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Image from 'next/image';
import money from '../public/money2.jpg'
import TwoColumn from '../components/Layout/TwoColumn';
import LoginForm from '../components/Forms/UserAccounts/login';
import { useState } from 'react';

const Index: NextPage = () => {

  return (
    <>
      <Box display="flex">
        <Box display="flex" flexDirection="column" justifyContent="space-around" w="30%" h="100vh" bg="blue.800">
          <Container centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
            <LoginForm />
          </Container>
        </Box>
        <Box bgImg="url('money.jpg')" bgPos="center" w="70%" h="100vh">
        </Box>
      </Box>
    </>
  )
};

export default Index
