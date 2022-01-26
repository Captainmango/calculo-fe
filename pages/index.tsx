import { Button } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Link from 'next/link';
import LoginForm from '../components/Forms/UserAccounts/login';
import LandingPage from '../components/Layout/Landing';

const Index: NextPage = () => {

  return (
    <>
      <LandingPage>
        <Link href="/users/login" passHref>
          <Button>
            Press me
          </Button>
        </Link>
      </LandingPage>
    </>
  )
};

export default Index
