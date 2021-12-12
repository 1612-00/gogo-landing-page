import './themeBar.scss';

const ThemeBar = (props) => {
    return (
        <div className='theme-bar'>
            <div className='theme-bar__title'>
                <span>{props.title}</span>
            </div>
            <div className='theme-bar__content'>
                <div className='theme-bar__right'>
                    <div
                        className='theme-bar__right__1'
                        style={{ backgroundColor: `${props.right__1}` }}
                    ></div>
                    <div
                        className='theme-bar__right__2'
                        style={{ backgroundColor: 'white' }}
                    ></div>
                    <div
                        className='theme-bar__right__3'
                        style={{ backgroundColor: `${props.right__3}` }}
                    ></div>
                </div>
                <div className='theme-bar__left'>
                    <div
                        className='theme-bar__left__1'
                        style={{ backgroundColor: `${props.left__1}` }}
                    ></div>
                    <div
                        className='theme-bar__left__2'
                        style={{ backgroundColor: 'black' }}
                    ></div>
                    <div
                        className='theme-bar__left__3'
                        style={{ backgroundColor: `${props.left__3}` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ThemeBar;
