import './PopularClasses.scss';

// Components
import ClassContainer from "../../../components/ClassContainer/ClassContainer";

// Constants
import class_info from "../../../constants/class_info.json";

function PopularClasses() {
    const classesArr = [
        "gym_beginner",
        "badminton",
        "triathlon",
        "dumbell",
        "personal_trainer",
    ];

    return (
        <div className='popuplarClasses'>
            <h2 className='title'>Most Popuplar Classes</h2>
            <div className='classesPanel'>
                {classesArr.map((title, index) => {
                    const classDetails = class_info[title];
                    return (
                        <ClassContainer
                            key={index}
                            title={classDetails?.title}
                            fullTitle={classDetails?.fullTitle}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default PopularClasses;