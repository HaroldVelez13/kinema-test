import type { NextPage } from 'next'
import Button from '@mui/material/Button';
import Header from '../components/Header';
import PhoneBook from '../components/phoneBook';


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <PhoneBook />
      </div>
    </>
  )
}

export default Home
