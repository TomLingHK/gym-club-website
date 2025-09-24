import './YogaClasses.scss';

// Components
import ClassContainer from "../../../components/ClassContainer/ClassContainer";

// Constants
import class_info from "../../../constants/class_info.json";

function YogaClasses() {
    const classesArr = [
        "yoga_beginner",
        "aerial_beginner",
        "aerial_hoop",
        "pilates",
        "yoga_therapy",
        "yoga_wheel",
        "mat_pilates",
    ];

    return (
        <div className='yogaClasses'>
            <h2 className='title'>Yoga Classes</h2>
            <div className='classesPanel'>
                {classesArr.map((title, index) => {
                    const classDetails = class_info[title];
                    return (
                        <ClassContainer
                            key={index}
                            index={index}
                            title={classDetails?.title}
                            fullTitle={classDetails?.fullTitle}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default YogaClasses;