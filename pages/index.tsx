import type { NextPage } from 'next'
import Head from 'next/head'
import { Card, DatePicker } from 'react-materialize'


const Home: NextPage = () => {
  return (<>
    <h1 className='card-panel teal lighten-2 center-align'>Test entry</h1>
    <DatePicker />
    </>
  )
}

export default Home
