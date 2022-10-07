import { Button, ButtonGroup, Container, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Link from 'next/link';
import LandingPage from '../components/Layout/Landing';

const Index: NextPage = () => {

  return (
    <>
      <LandingPage>
        <Container>
          <Flex px="32px" direction="column">
            <Heading fontSize="6xl" color="white">Welcome to Calculo</Heading>
            <Divider my="8" />
            <Text mb="8" fontSize="2xl" color="white">Your suite of personal budgeting tools to help you manage your finances.</Text>
            <ButtonGroup spacing="28px">
              <Link href="/users/signup" passHref>
                <Button colorScheme="telegram">
                  Sign Up
                </Button>
              </Link>
              <Link href="/users/login" passHref>
                <Button colorScheme="whatsapp">
                  Log In
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </Container>
      </LandingPage>
    </>
  )
};

export default Index
