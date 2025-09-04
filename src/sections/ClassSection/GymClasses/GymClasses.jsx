import './GymClasses.scss';
import ClassContainer from '../../../components/ClassContainer/ClassContainer';

function GymClasses() {
    const classesArr = [
        {
            fullTitle: 'Beginner gym programme', 
            title: 'gym_beginner',
        },
        {
            fullTitle: 'Barbell programme', 
            title: 'barbell',
        },
        {
            fullTitle: 'Dumbell programme', 
            title: 'dumbell',
        },
        {
            fullTitle: 'Advanced weight lifting', 
            title: 'advanced_weight_lifting',
        },
        {
            fullTitle: 'Spinning Classes', 
            title: 'spinning',
        },
        {
            fullTitle: 'Personal Trainer', 
            title: 'personal_trainer',
        },
        {
            fullTitle: 'Cardio Programme', 
            title: 'cardio',
        },
        {
            fullTitle: 'Full-body workout', 
            title: 'full_body_workout',
        },
        {
            fullTitle: 'Core Programme', 
            title: 'core',
        },
    ]

    return (
        <div className='gymClasses'>
            <h2 className='title'>Gym Classes</h2>
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

export default GymClasses;