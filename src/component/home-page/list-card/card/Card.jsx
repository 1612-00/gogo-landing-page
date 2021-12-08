import './card.scss';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card__inner'>
                <div className='card__icon'>
                    <i className={props.icon}></i>
                </div>
                <div className='card__title'>
                    <span>{props.title}</span>
                </div>
                <div className='card__description'>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
