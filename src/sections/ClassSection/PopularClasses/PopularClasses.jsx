import './PopularClasses.scss';
import ClassContainer from '../../../components/ClassContainer/ClassContainer';

function PopularClasses() {
    const classesArr = ['Beginner gym programme', 'Badminton programme', 'Triathlon', 'Dumbell programme', 'Personal Trainer'];

    return (
        <div className='popuplarClasses'>
            <h2 className='title'>Most Popuplar Classes</h2>
            <div className='classesPanel'>
                {classesArr.map((title, index) => <ClassContainer key={index} title={title} />)}
            </div>
        </div>
    )
}

export default PopularClasses;