import { Container, TextField } from '@mui/material';
import type { NextPage } from 'next'
import Head from 'next/head'
import { UserState, UserStore } from '../store/UserAuthStore'
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TimePicker } from '@mui/lab';
import { useState } from 'react';

const Index: NextPage = () => {
  //@ts-ignore
  const [useStore, api] = UserStore
  const [time, setTime] = useState(null)

  function testfunc() {
    api.dispatch({ type: "LOG_IN", body: { user: null, loading: true } })
  }
  return (

    <Container>
      <LocalizationProvider dateAdapter={DateAdapter}>    
      <TimePicker
        label="Basic example"
        value={time}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  </Container>
  )
};

export default Index
