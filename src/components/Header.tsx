import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [image, setImage] = useState<string>('/no-user.svg');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggedInOptions = () => {
    return (
      <div className='header__user-container'>
        <div className='header__notifications'></div>
        <Link
          href='/'
          className='header__user'
          aria-label='click to go to user account'
        >
          <figure className='header__user-img-container'>
            <Image
              className='header__user-img'
              alt='user profile picture'
              src={image}
              height={80}
              width={80}
            ></Image>
          </figure>
        </Link>
      </div>
    );
  };

  const loggedOutOptions = () => {
    return (
      <div className='header__user-container'>
        <Link
          href='/login'
          className='header__login'
          aria-label='click to log in'
        >
          Login
        </Link>
        <Link
          href='/'
          className='header__signup'
          aria-label='click to create an account'
        >
          Sign Up
        </Link>
      </div>
    );
  };

  return (
    <section className='header'>
      <div className='header__container'>
        <figure className='header__logo'>
          <Image
            src='logo.svg'
            alt='company logo'
            className='header__logo-img'
            width={80}
            height={80}
          />
        </figure>
        <div className='header__links'>
          <Link
            href='/movies'
            className='header__movies'
            aria-label='click to go to the movies page'
          >
            Movies
          </Link>
          <Link
            href='/tv'
            className='header__shows'
            aria-label='click to go to the tv shows page'
          >
            TV Shows
          </Link>
          <div className='header__search-container'>
            <label
              htmlFor='search'
              aria-labelledby='search'
              className='header__search-label'
            >
              Search
            </label>
            <input type='text' id='search' />
          </div>
        </div>
        <>{isLoggedIn ? loggedInOptions() : loggedOutOptions()}</>
      </div>
    </section>
  );
};

export default Header;
