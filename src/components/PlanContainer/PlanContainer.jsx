import './PlanContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import OrientationContext from '../../store/orientationContext';

function PlanContainer({ title, price, description, item, activePlan, setActivePlan }) {
    const orientation = useContext(OrientationContext);

    return (
        <div className={`planContainer ${orientation} ` + (activePlan == title ? 'active ' : '') + title} onMouseEnter={ () => setActivePlan(title) }>
            <div className='priceContainer'>
                <h2 className='price'>
                    {price}
                </h2>
                <div className='monthTxt'>
                    /month
                </div>
            </div>
            <h2 className='title'>
                {title}
            </h2>
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
                { orientation=='landscape' ? 'Select plan' : 'Select' }
            </div>
        </div>
    )
}

export default PlanContainer;