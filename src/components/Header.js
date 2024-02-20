import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';
const Header = () => {
  const useAppstate=useContext(Appstate);
  return (
    <div className='sticky top-0 z-10 header text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-gray-500 border-b-2'>
      <Link to='/'><span>Movie 
      <span className='text-white'>world</span></span></Link>
      {
        useAppstate.login ?
      <Link to='/addmovie'><h1 className='text-lg cursor-pointer text-white flex items-center'><Button><AddIcon className='mr-1' color='secondary'
      /><span className='text-white'>Add New</span></Button></h1></Link>
      :
      <Link to='/login'><h1 className='text-lg cursor-pointer bg-green-500 text-white flex items-center'><Button><span className='text-white font-medium capitalize'>Login</span></Button></h1></Link>
      }
     </div>
  )
}

export default Header
