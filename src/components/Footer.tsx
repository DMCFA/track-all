import Image from 'next/image';
import Link from 'next/link';

const Footer = (): JSX.Element => {
  return (
    <section className='footer'>
      <div className='footer__container'>
        <div className='footer__hero'>
          <div className='footer__subscribe'>
            <h3>No subscription required</h3>
            <h2>Start tracking</h2>
            <div className='footer__email-container'>
              <label htmlFor='email'>
                Email
                <input
                  type='email'
                  name='subscribe'
                  id='email'
                  placeholder='Enter your email'
                />
              </label>
              <figure className='footer__hero-image'>
                <Image src='/footer-hero.png' alt='' height={128} width={128} />
              </figure>
            </div>
          </div>
        </div>
        <div className='footer__content'>
          <div className='footer__company'>
            <h2>Track Everything</h2>
            <p>Track all your TV shows in one place</p>
          </div>
          <div className='footer__links'>
            <div className='footer__links-content'>
              <Link href='/'>About</Link>
              <Link href='/'>Popular</Link>
              <Link href='/'>Top Rated</Link>
              <Link href='/'>Airing Today</Link>
            </div>
            <div className='footer__links-legal'>
              <Link href='/'>Terms and Conditions</Link>
              <Link href='/'>Privacy Policy</Link>
              <Link href='/'>Cookie Policy</Link>
            </div>
          </div>
          <div className='footer__social'>
            <p>Let&#39;s chat!</p>
            <Link href='/'>hi@tracktv.app</Link>
            <div className='footer__social-links'>
              <Link
                href='/'
                className='footer__social-link facebook'
                aria-label=' click to go to facebook page'
              />
              <Link
                href='/'
                className='footer__social-link twitter'
                aria-label='click to go to twitter page'
              />
              <Link
                href='/'
                className='footer__social-link linkedin'
                aria-label='click to go to linkedin page'
              />
              <Link
                href='/'
                className='footer__social-link instagram'
                aria-label='click to go to instagram page'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
