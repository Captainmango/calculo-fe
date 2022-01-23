import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next'
import TwoColumn from '../components/layout/TwoColumn';

const Index: NextPage = () => {

  return (
    <>
      <Box display="flex">
        <Box w="30%" h="100vh" bg="blue.800">

        </Box>
        <Box w="70%" h="100vh">

        </Box>
      </Box>
    </>
  )
};

export default Index
