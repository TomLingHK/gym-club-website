import './FeatureContainer.scss'

function FeatureContainer({ id, title, description }) {
    return (
        <div className={'featureContainer scroll-checkpoint ' + id}>
            <div className='img'>
            </div>
            <div className='text'>
                <h1 className='title'>
                    { title }
                </h1>
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