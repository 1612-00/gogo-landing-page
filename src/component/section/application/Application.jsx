import './application.scss';

import survey from '../../../asset/application/survey.jpg';
import chat from '../../../asset/application/chat.jpg';
import todo from '../../../asset/application/todo.jpg';

const Application = () => {
    const onClick = (e) => {
        if (!e.target.classList.contains('active')) {
            // remove class active of nav-link-btn  
            document.querySelectorAll('.nav-link__btn').forEach((item) => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            // remove class active of nav-img__item 
            document.querySelectorAll('.nav-img__item').forEach((item) => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            // add class active on element clicked
            e.target.classList.add('active');

            let count = 0;

            document.querySelectorAll('.nav-link__btn').forEach((item) => {
                count += 1;

                if (item.classList.contains('active')) {
                    document.querySelectorAll('.nav-img__item').forEach((item) => {
                        count -= 1;
                        if (count === 0) {
                            item.classList.add('active');
                        }
                    });
                }
            });

        }
    };

    return (
        <div className='application'>
            <div className='container'>
                <div className='section-header'>
                    <h2>Applications</h2>
                    <span>
                        With the help of components and layouts, we created four
                        different applications. They are a good way to get you
                        started if you want to build something similar.
                    </span>
                </div>

                <div className='application__content'>
                    <div className='nav-link'>
                        <span
                            className='nav-link__btn active'
                            onClick={onClick}
                        >
                            Survey
                        </span>
                        <span className='nav-link__btn' onClick={onClick}>
                            Chat
                        </span>
                        <span className='nav-link__btn' onClick={onClick}>
                            Todo
                        </span>
                    </div>
                    <div className='nav-img'>
                        <img
                            className='nav-img__item active'
                            src={survey}
                            alt=''
                        />
                        <img className='nav-img__item' src={chat} alt='' />
                        <img className='nav-img__item' src={todo} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;
