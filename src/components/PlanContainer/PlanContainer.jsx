import './PlanContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function PlanContainer({ title, price, description, item, activePlan, setActivePlan }) {
    return (
        <div className={'planContainer ' + (activePlan == title ? 'active ' : '') + title} onMouseEnter={ () => setActivePlan(title) }>
            <div className='priceContainer'>
                <h2 className='price'>
                    {price}
                </h2>
                <div className='monthTxt'>
                    /month
                </div>
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='description'>
                {description}
            </div>
            <div className='details'>
                {item.map( type => {
                    return (
                        <div className='item' key={type}>
                            <FontAwesomeIcon icon={faCircleCheck} className='tickIcon' />
                            <div className='text'>
                                {type}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='btn selectPlanBtn'>
                Select plan
            </div>
        </div>
    )
}

export default PlanContainer;