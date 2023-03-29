import Image from 'next/image';
import Link from 'next/link';

const SideNav = () => {
  return (
    <section className='nav'>
      <div className='nav__container'>
        <figure className='nav__logo'>
          <Image
            src='logo.svg'
            alt='company logo'
            className='header__logo-img'
            width={200}
            height={200}
          ></Image>
        </figure>
        <div className='nav__links'>
          <Link
            href='/'
            className='header__home'
            aria-label='click to go to the homepage'
          >
            Home
          </Link>
          <Link
            href='/'
            className='nav__discovery'
            aria-label='discover new movies and tv shows'
          >
            Discover
          </Link>
          <Link
            href='/'
            className='nav__soon'
            aria-label='movies and tv shows coming soon'
          >
            Coming soon
          </Link>
          <Link
            href='/'
            className='nav__recent'
            aria-label='recent movies and tv shows'
          >
            Recent
          </Link>
          <Link
            href='/'
            className='nav__top-rated'
            aria-label='top rated movies and tv shows'
          >
            Top rated
          </Link>
          <Link
            href='/'
            className='nav__settings'
            aria-label='customize site settings'
          >
            Settings
          </Link>
          <Link href='/' className='nav__help' aria-label='help section'>
            Help
          </Link>
        </div>
        <div className='nav__log-out'>Log out</div>
      </div>
    </section>
  );
};

export default SideNav;
