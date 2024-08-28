import './FeedbackThumbnail.scss'

function FeedbackThumbnail({ index, curIndex, setCurIndex, id }) {
    const isActive = index === curIndex;

    return (
        <div className={'feedbackThumbnail ' + (isActive ? 'active' : '') } onClick={ () => setCurIndex(index) }>
            <img src={`./images/people/${id}_img.jpg`} alt="Happy person" className='img' />
        </div> 
    )
}

export default FeedbackThumbnail;