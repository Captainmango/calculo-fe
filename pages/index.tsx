import type { NextPage } from 'next'
import Head from 'next/head'
import { useStore } from '../store/UserAuthStore'


const Home: NextPage = () => {
  const [useStor, api] = useStore
  
  function testfunc() {
    api.dispatch({ type: "LOG_IN", body: { user: null, loading: true } })
  }
  return (<>
    <h1 className='card-panel teal lighten-2 center-align'>Test entry</h1>
    <button onClick={() => testfunc()}>Click me</button>
    <p>{useStore(state=>state.loading)}</p>
  </>
  )
}

export default Home
