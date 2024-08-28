import { useEffect, useState, useContext } from 'react';
import './FeedbackContainer.scss';
import OrientationContext from '../../store/orientationContext';

function FeedbackContainer({ highlightContent, content, person, id }) {
    const orientation = useContext(OrientationContext);
    const [fading, setFading] = useState(false);
    let timeoutID = undefined;

    useEffect(() => {
        clearTimeout(timeoutID);
        timeoutID = undefined;
        setFading(true);

        timeoutID = setTimeout(() => {
            setFading(false);
        }, 500);
    }, [id])

    return (
        <div className={'feedbackContainer ' + orientation}>
            <div className='txt'>
                <div className='highlightContainer'>
                    <h1 className='openQuotationMark'>
                        “
                    </h1>
                    <h2 className={'highlightContent' + (fading ? ' fading' : '')}>
                        { highlightContent }
                    </h2>
                    <h1 className='closeQuotationMark'>
                        ”
                    </h1>
                </div>      
                <div className={'content ' + (fading ? 'fading' : '')}>
                    { content }
                </div>
                <div className={'name ' + (fading ? 'fading' : '')}>
                    { person }
                </div>
            </div>
            <img src={`./images/people/${id}_img.jpg`} alt="Happy person" className={'img ' + (fading ? 'fading' : '')} />
        </div>
    )
}

export default FeedbackContainer;