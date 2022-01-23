import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Image from 'next/image';
import money from '../public/money2.jpg'
import TwoColumn from '../components/layout/TwoColumn';

const Index: NextPage = () => {

  return (
    <>
      <Box display="flex">
        <Box w="30%" h="100vh" bg="blue.800">

        </Box>
        <Box bgImg="url('money.jpg')" bgPos="center" w="70%" h="100vh">
        </Box>
      </Box>
    </>
  )
};

export default Index
