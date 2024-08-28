import './FeatureContainer.scss'
import { useContext } from 'react';
import OrientationContext from '../../store/orientationContext';

function FeatureContainer({ id, title, description }) {
    const orientation = useContext(OrientationContext);

    return (
        <div className={`featureContainer scroll-checkpoint ${id} ${orientation}`}>
            <div className='img'>
            </div>
            <div className='text'>
                <h2 className='title'>
                    { title }
                </h2>
                <div className='description'>
                    { description }
                </div>
                <div className='btn moreBtn'>
                    More
                </div>
            </div>
        </div>
    )
}

export default FeatureContainer;