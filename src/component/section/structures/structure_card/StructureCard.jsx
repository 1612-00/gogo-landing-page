import './structureCard.scss';

const StructureCard = (props) => {
    return <div className='structure-card'>
        <div className="structure-card__img">
            <img src={props.img} alt="" />
        </div>
        <div className="structure-card__description">
            <span>{props.description}</span>
        </div>
    </div>;
};

export default StructureCard;
