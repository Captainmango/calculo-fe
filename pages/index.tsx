import { Container, Input } from '@chakra-ui/react';
import type { NextPage } from 'next'

const Index: NextPage = () => {

  return (
    <>
      <Container>
        <Input variant='flushed' placeholder='test input' aria-label='test' />
      </Container>
    </>
  )
};

export default Index
