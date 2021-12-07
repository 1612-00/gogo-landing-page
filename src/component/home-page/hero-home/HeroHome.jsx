import './heroHome.scss';

import heroHome from '../../../asset/image/home-hero.png';
import heroHomeMobile from '../../../asset/image/home-hero-mobile.png';

const HeroHome = () => {
    return (
        <div className='hero-home'>
            <div className='hero-home__info'>
                <div className='title'>
                    <span>MAGIC IS IN THE DETAILS</span>
                </div>
                <div className='description'>
                    <span>
                        Gogo is the combination of good design, quality code and
                        attention for details.
                    </span>
                    <span>
                        We used same design language for components, layouts,
                        apps and other parts of the template.
                    </span>
                    <span>Hope you enjoy it!</span>
                </div>
                <button className='button'>
                    <span>view now</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='25'
                        viewBox='0 0 24 24'
                        style={{ opacity: '0.5' }}
                    >
                        <path d='M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z'></path>
                    </svg>
                </button>
            </div>
            <div className='hero-home__img'>
                <img className='default' src={heroHome} alt='' />
                <img className='mobile' src={heroHomeMobile} alt='' />
            </div>
        </div>
    );
};

export default HeroHome;
