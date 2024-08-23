import './FeedbackThumbnail.scss'

function FeedbackThumbnail({ index, setCurIndex, id }) {
    return (
        <div className='feedbackThumbnail' onClick={ () => setCurIndex(index) }>
            <img src={`./images/people/${id}_img.jpg`} alt="Happy person" className='img' />
        </div> 
    )
}

export default FeedbackThumbnail;