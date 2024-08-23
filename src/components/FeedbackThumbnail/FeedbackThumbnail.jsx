import './FeedbackThumbnail.scss'

function FeedbackThumbnail({ index, setCurIndex, picture }) {
    return (
        <div className='feedbackThumbnail' onClick={ () => setCurIndex(index) }></div> 
    )
}

export default FeedbackThumbnail;