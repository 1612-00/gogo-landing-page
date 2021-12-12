import './themes.scss';
import ThemeBar from './theme-bar/ThemeBar';

const Themes = () => {
    return (
        <div className='theme'>
            <div className='container'>
                <div className='section-header'>
                    <h2>Themes</h2>
                    <span>
                        We carefully choosed colors and created 10 different
                        themes with dark and light versions. You may also create
                        your own themes easily since all the theme related
                        styling is managed by Sass variables.
                    </span>
                </div>
                <div className='theme-content'>
                    <ThemeBar
                        title='Navy Blue'
                        right__1='#00365a'
                        right__3='#184f90'
                        left__1='#236591'
                        left__3='#1d477a'
                    />
                    <ThemeBar
                        title='Olympic Blue'
                        right__1='#008ecc'
                        right__3='#73c2fb'
                        left__1='#3e83a1'
                        left__3='#304d72'
                    />
                    <ThemeBar
                        title='Yale Blue'
                        right__1='#145388'
                        right__3='#2a93d5'
                        left__1='#38688b'
                        left__3='3e8ab9'
                    />
                    <ThemeBar
                        title='Moss Green'
                        right__1='#576a3d'
                        right__3='#dd9c02'
                        left__1='#627745'
                        left__3='#8f7b39'
                    />
                    <ThemeBar
                        title='Lime Green'
                        right__1='#6fb327'
                        right__3='#51c878'
                        left__1='#63883b'
                        left__3='#4d7058'
                    />
                    <ThemeBar
                        title='Carrot Orange'
                        right__1='#ed7117'
                        right__3='#e7523e'
                        left__1='#ad7140'
                        left__3='#aa4f43'
                    />
                    <ThemeBar
                        title='Ruby Red'
                        right__1='#900604'
                        right__3='#e7284a'
                        left__1='#913a47'
                        left__3='#aa5e6c'
                    />
                    <ThemeBar
                        title='Monster Purple'
                        right__1='#922c88'
                        right__3='#4556ac'
                        left__1='#7e4877'
                        left__3='#3c4b9a'
                    />
                    <ThemeBar
                        title='Steel Grey'
                        right__1='#48494b'
                        right__3='#999da0'
                        left__1='#767e8d'
                        left__3='#4d5a5f'
                    />
                    <ThemeBar
                        title='Granola Yellow'
                        right__1='#c0a145'
                        right__3='#e3b778'
                        left__1='#8a722c'
                        left__3='#a88048'
                    />
                </div>
            </div>
        </div>
    );
};

export default Themes;
