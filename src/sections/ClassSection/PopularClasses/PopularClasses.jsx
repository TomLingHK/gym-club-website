import './PopularClasses.scss';
import ClassContainer from '../../../components/ClassContainer/ClassContainer';

function PopularClasses() {
    const classesArr = [
        {
            fullTitle: 'Beginner gym programme', 
            title: 'gym_beginner',
        },
        {
            fullTitle: 'Badminton programme', 
            title: 'badminton',
        },
        {
            fullTitle: 'Triathlon', 
            title: 'triathlon',
        },
        {
            fullTitle: 'Dumbell programme', 
            title: 'dumbell',
        },
        {
            fullTitle: 'Personal Trainer',
            title: 'personal_trainer',
        },
    ];

    return (
        <div className='popuplarClasses'>
            <h2 className='title'>Most Popuplar Classes</h2>
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

export default PopularClasses;