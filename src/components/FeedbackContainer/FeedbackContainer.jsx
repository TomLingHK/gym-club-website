import './FeedbackContainer.scss';
import { useEffect, useState, useContext } from 'react';
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
                    { orientation === 'landscape'
                    ?
                    <>
                        <h2 className='openQuotationMark'>
                            “
                        </h2>
                        <h2 className={'highlightContent' + (fading ? ' fading' : '')}>
                            { highlightContent }
                        </h2>
                        <h2 className='closeQuotationMark'>
                            ”
                        </h2>
                    </>
                    :
                    
                    <>
                        <h2 className='openQuotationMark'>
                            “
                        </h2>
                        <h3 className={'highlightContent' + (fading ? ' fading' : '')}>
                            { highlightContent }
                        </h3>
                        <h2 className='closeQuotationMark'>
                            ”
                        </h2>
                    </>
                    }
                </div>
                <div className={'content ' + (fading ? 'fading' : '')}>
                    { content }
                </div>
                <div className={'name ' + (fading ? 'fading' : '')}>
                    { person }
                </div>
            </div>
            <div className='imgContainer'>
                <img src={`./images/people/${id}_img.jpg`} alt="Happy person" className={'img ' + (fading ? 'fading' : '')} />
            </div>
        </div>
    )
}

export default FeedbackContainer;