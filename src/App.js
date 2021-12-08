import 'swiper/swiper.min.css';
import './App.scss';
import Header from './component/header/Header';
import HomePage from './component/home-page/HomePage';
import Section from './component/section/Section';

function App() {
    return (
        <div className='App'>
            <Header />
            <HomePage />
            <Section />
        </div>
    );
}

export default App;
