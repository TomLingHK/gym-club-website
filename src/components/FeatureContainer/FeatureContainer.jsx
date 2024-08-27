import './FeatureContainer.scss'

function FeatureContainer({ id, title, description }) {
    return (
        <div className={'featureContainer scroll-checkpoint ' + id}>
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