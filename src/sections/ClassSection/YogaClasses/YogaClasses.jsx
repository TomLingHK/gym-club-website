import './YogaClasses.scss';
import ClassContainer from '../../../components/ClassContainer/ClassContainer';

function YogaClasses() {
    const classesArr = [
        {
            fullTitle: 'Yoga for beginners', 
            title: 'yoga_beginner',
        },
        {
            fullTitle: 'Aerial for beginners', 
            title: 'aerial_beginner',
        },
        {
            fullTitle: 'Aerial Hoop', 
            title: 'aerial_hoop',
        },
        {
            fullTitle: 'Pilates', 
            title: 'pilates',
        },
        {
            fullTitle: 'Yoga Therapy',
            title: 'yoga_therapy',
        },
        {
            fullTitle: 'Yoga Wheel', 
            title: 'yoga_wheel',
        },
        {
            fullTitle: 'Mat Pilates', 
            title: 'mat_pilates',
        },
    ];

    return (
        <div className='yogaClasses'>
            <h2 className='title'>Yoga Classes</h2>
            <div className='classesPanel'>
                {classesArr.map(({title, fullTitle}, index) => 
                    <ClassContainer 
                        key={index} 
                        title={title} 
                        fullTitle={fullTitle}
                    />
                )}
            </div>
        </div>
    )
}

export default YogaClasses;