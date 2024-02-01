import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../features/navSlice';

import BellIcon from './../assets/img/icons/Bell.svg'
import DummyProfile from './../assets/img/icons/DummyProfile.svg'
import HamburgerIcon from './../assets/img/icons/HamburgerIcon.svg';
import Logo from './../assets/img/brand/logo.svg'

function Header({heading}) {
  const dispatch = useDispatch();
  const navBarActive = useSelector(state => state.nav.active);
  const imageUrl = useSelector(state => state.user.profile ? state.user.profile.picture: undefined);
  const onClickHandler = () => {
    dispatch(toggle());
  }
  return (
    <header className='flex justify-between relative mx-4 sm:mx-20 sm:bg-inherit'>
      <h1 className='text-2xl font-semibold hidden sm:block'>{heading}</h1>
      <button className={`${navBarActive ? 'hidden': 'block'}`} onClick={onClickHandler}> <img src={HamburgerIcon} /></button>
      <div className='absolute flex items-center gap-2 left-6 top-[-.7rem]'>
        <img className='h-8 w-8' src={Logo} />
        <p className='text-2xl text-indigo-600 font-semibold sm:hidden'>Base</p>
      </div>
      <div className='absolute right-1 top-1 flex gap-4 sm:gap-10 self-end sm:static'>
        <img src={BellIcon} />
        <img className='h-6 w-6 sm:h-8 sm:w-8 rounded-3xl' src={imageUrl ? imageUrl: DummyProfile} />
      </div>
    </header>
  );
}

export default Header;