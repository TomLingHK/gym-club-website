import "./GymClasses.scss";

// Components
import ClassContainer from "../../../components/ClassContainer/ClassContainer";

// Constants
import class_info from "../../../constants/class_info.json";

function GymClasses() {
    const classesArr = [
        "gym_beginner",
        "barbell",
        "dumbell",
        "advanced_weight_lifting",
        "spinning",
        "personal_trainer",
        "cardio",
        "full_body_workout",
        "core",
    ];

    return (
        <div className="gymClasses">
            <h2 className="title">Gym Classes</h2>
            <div className="classesPanel">
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
    );
}

export default GymClasses;