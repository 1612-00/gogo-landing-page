/* eslint-disable jsx-a11y/anchor-is-valid */
import './homePage.scss';
import HeroHome from './hero-home/HeroHome';
import ListCard from './list-card/ListCard';

const HomePage = () => {
    return (
        <div className='home-page container'>
            <HeroHome />
            <ListCard />
            <a href='#' className='home-page__button'>
                <i className='bx bx-chevron-down'></i>
            </a>
        </div>
    );
};

export default HomePage;
